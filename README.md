# CarVibes.lk Recruitment Microsite

A premium, lightweight recruitment microsite for **CarVibes.lk** built with **Next.js 15 App Router**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. It provides a landing page for the coming soon detailing centers and an interactive form where applicants can submit their details and upload their CV. 

## Integration Workflow

The frontend collects the form data, converts the CV file to Base64, and sends it to the Next.js API route (`/api/apply`). The API route forwards it to a **Google Apps Script Web App** which handles:
1. Uploading the CV into a Google Drive folder.
2. Granting shareable view permissions to the file.
3. Appending a row with the applicant data & CV link in Google Sheets.
4. Sending an email notification via Gmail to `pubuduhar@gmail.com`.

---

## 🛠️ Step 1: Google Apps Script Setup

To link the form with Google Sheets and Google Drive, follow these steps:

1. Open **Google Drive** and log in with your Google account.
2. Open [script.google.com](https://script.google.com/) and click **New Project**.
3. Clear the default script and paste the contents of `google-apps-script.js` into the script editor.
4. Update the `NOTIFICATION_EMAIL` variable at the top of the file to your desired notification email (defaults to `pubuduhar@gmail.com`).
5. Click the **Save** icon (floppy disk).
6. Click **Deploy** (top right) -> **New deployment**.
7. In the configuration modal:
   - Click the gear icon next to "Select type" and choose **Web app**.
   - Set **Description** to: `CarVibes Recruitment API`.
   - Set **Execute as** to: `Me` (your-email@gmail.com).
   - Set **Who has access** to: `Anyone` *(Note: This is required so the Next.js API can communicate with it securely)*.
8. Click **Deploy**.
9. Google will ask you to **Authorize Access**. Click "Authorize Access", log in, click "Advanced", and click "Go to Untitled project (unsafe)" to grant the script permissions to access Google Sheets, Drive, and Gmail on your behalf.
10. Once deployed, copy the **Web app URL** (it should look like `https://script.google.com/macros/s/.../exec`).

---

## 💻 Step 2: Next.js Local Setup

1. Clone or navigate to the repository directory:
   ```bash
   cd carvibes_frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root of the project:
   ```bash
   cp .env.example .env.local
   ```

4. Open `.env.local` and paste your copied Google Web App URL:
   ```env
   GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOIED_SCRIPT_ID/exec
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 🎨 Technology Stack & Custom Styles

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons.
- **Design Style**: Luxury automotive aesthetic (dark metallic backgrounds, glassmorphism panel styling, vibrant orange `#FF7A00` accents).
- **Global Variables**: Configured custom tokens in `@theme` block of `src/app/globals.css`.

---

## 🚀 Step 3: Deployment to Vercel

The site is designed to be easily deployed on **Vercel**:

1. Log in to [vercel.com](https://vercel.com/) and click **Add New** -> **Project**.
2. Connect your GitHub repository `https://github.com/Pubudu-Harshana/carvibes_frontend`.
3. In the project configuration page, expand **Environment Variables**.
4. Add:
   - Key: `GOOGLE_SCRIPT_URL`
   - Value: `[Your Deployed Google Apps Script Web App URL]`
5. Click **Deploy**. Vercel will build the project and output a live production URL!
