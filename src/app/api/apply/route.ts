import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { position, name, homeTown, phoneNumber, experience, cvName, cvType, cvData } = body;

    // Simple backend validations
    if (!position || !name || !homeTown || !phoneNumber || !experience || !cvName || !cvData) {
      return NextResponse.json(
        { error: "All form fields and a valid CV file are required." },
        { status: 400 }
      );
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl || scriptUrl.includes("YOUR_DEPLOIED_SCRIPT_ID")) {
      console.warn("⚠️ GOOGLE_SCRIPT_URL is not configured in .env.local. Falling back to Mock Mode.");
      return NextResponse.json({
        success: true,
        data: {
          status: "success",
          fileUrl: "https://drive.google.com/file/d/mock-resume-url-for-testing/view",
          isMock: true,
          message: "Mock Mode enabled. Configure GOOGLE_SCRIPT_URL in .env.local to connect Google Sheets."
        }
      });
    }

    // Forward the payload to Google Apps Script Web App
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        position,
        name,
        homeTown,
        phoneNumber,
        experience,
        cvName,
        cvType,
        cvData
      }),
      // Apps Script uses redirects during execution, follow them
      redirect: "follow"
    });

    const resultText = await response.text();
    let result;
    
    try {
      result = JSON.parse(resultText);
    } catch {
      result = { status: "unknown", message: resultText };
    }

    if (response.ok && (result.status === "success" || result.result === "success")) {
      return NextResponse.json({ success: true, data: result });
    } else {
      console.error("Google Apps Script Error response:", result);
      return NextResponse.json(
        { error: result.message || "Failed to save application to Google Sheet/Drive." },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("API Route Apply Error:", error);
    return NextResponse.json(
      { error: "An internal server error occurred while processing your application." },
      { status: 500 }
    );
  }
}
