"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Loader2,
  FileText
} from "lucide-react";

export default function JoinUs() {
  const [formData, setFormData] = useState({
    position: "Office Administration",
    name: "",
    homeTown: "",
    phoneNumber: "",
    experience: "1"
  });

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvError, setCvError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedInfo, setSubmittedInfo] = useState<{ name: string; position: string } | null>(null);

  // Position Options
  const positions = [
    "Office Administration",
    "Maintenance Technician",
    "Paint Technician"
  ];

  // Experience Options: 1 to 20 years
  const experienceOptions = Array.from({ length: 20 }, (_, i) => `${i + 1} Year${i + 1 > 1 ? "s" : ""}`);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvError("");
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setCvError("");
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const validateAndSetFile = (file: File) => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];
    const allowedExtensions = [".pdf", ".doc", ".docx"];
    const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();

    const isValidType = allowedTypes.includes(file.type) || allowedExtensions.includes(fileExtension);
    const isUnderLimit = file.size <= 5 * 1024 * 1024; // 5MB

    if (!isValidType) {
      setCvError("Only PDF, DOC, or DOCX files are accepted.");
      setCvFile(null);
      return;
    }

    if (!isUnderLimit) {
      setCvError("File size exceeds the 5MB limit.");
      setCvFile(null);
      return;
    }

    setCvFile(file);
    setCvError("");
  };

  // Convert file to Base64 helper
  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result as string;
        // Strip the data URL prefix (e.g. "data:application/pdf;base64,")
        const base64Data = base64String.substring(base64String.indexOf(",") + 1);
        resolve(base64Data);
      };
      reader.onerror = (error) => reject(error);
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cvFile) {
      setCvError("Please upload your CV before submitting.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // 1. Convert CV File to Base64
      const base64File = await toBase64(cvFile);

      // 2. Prepare payload
      const payload = {
        ...formData,
        cvName: cvFile.name,
        cvType: cvFile.type,
        cvData: base64File
      };

      // 3. Post to Next.js API Route
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok) {
        setSubmittedInfo({
          name: formData.name,
          position: formData.position
        });
        setSubmitStatus("success");
        // Clear form
        setFormData({
          position: "Office Administration",
          name: "",
          homeTown: "",
          phoneNumber: "",
          experience: "1"
        });
        setCvFile(null);
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus("error");
      setErrorMessage("An unexpected network error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full min-h-[90vh] flex items-center justify-center py-28 px-4 sm:px-6 lg:px-8 hero-bg-overlay">
      <div className="relative w-full max-w-2xl z-10">
        
        {/* Go Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <AnimatePresence mode="wait">
          
          {/* ── FORM SCREEN ──────────────────────────────────────────────── */}
          {submitStatus !== "success" && (
            <motion.div
              key="form-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 sm:p-10 space-y-8"
            >
              <div className="space-y-2 text-center sm:text-left">
                <h1 className="text-3xl font-extrabold tracking-tight text-white uppercase">
                  Join the Team
                </h1>
                <p className="text-sm text-gray-400">
                  Build your career in the luxury automotive space at CarVibes.lk. Apply below.
                </p>
              </div>

              {submitStatus === "error" && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-red-950/30 border border-red-500/20 text-red-200 text-sm">
                  <AlertTriangle className="h-5 w-5 shrink-0 text-red-500" />
                  <div>
                    <span className="font-semibold">Submission Failed:</span> {errorMessage}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Position */}
                <div className="space-y-2">
                  <label htmlFor="position" className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                    Applying Position
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="input-field w-full appearance-none bg-[#111111]"
                    required
                  >
                    {positions.map((pos) => (
                      <option key={pos} value={pos} className="bg-[#0A0A0A]">
                        {pos}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="input-field w-full"
                    required
                  />
                </div>

                {/* Grid for Hometown & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Hometown */}
                  <div className="space-y-2">
                    <label htmlFor="homeTown" className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                      Home Town
                    </label>
                    <input
                      type="text"
                      id="homeTown"
                      name="homeTown"
                      value={formData.homeTown}
                      onChange={handleInputChange}
                      placeholder="e.g. Kosgama"
                      className="input-field w-full"
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label htmlFor="phoneNumber" className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="e.g. 0771234567"
                      className="input-field w-full"
                      required
                    />
                  </div>
                </div>

                {/* Experience */}
                <div className="space-y-2">
                  <label htmlFor="experience" className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                    Years of Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="input-field w-full appearance-none bg-[#111111]"
                    required
                  >
                    {experienceOptions.map((exp) => (
                      <option key={exp} value={exp.split(" ")[0]} className="bg-[#0A0A0A]">
                        {exp}
                      </option>
                    ))}
                  </select>
                </div>

                {/* CV File Upload */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-300 block">
                    Upload your CV
                  </label>
                  <div
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                      cvFile
                        ? "border-primary/50 bg-primary/5"
                        : "border-white/10 hover:border-primary/30 bg-white/[0.01]"
                    }`}
                    onClick={() => document.getElementById("file-upload")?.click()}
                  >
                    <input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                    />
                    
                    <div className="flex flex-col items-center gap-3">
                      {cvFile ? (
                        <>
                          <div className="h-12 w-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                            <FileText className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white truncate max-w-xs">{cvFile.name}</p>
                            <p className="text-xs text-gray-400 mt-1">
                              {(cvFile.size / (1024 * 1024)).toFixed(2)} MB
                            </p>
                          </div>
                          <span className="text-xs text-primary font-semibold hover:underline">
                            Change File
                          </span>
                        </>
                      ) : (
                        <>
                          <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 text-gray-400 flex items-center justify-center group-hover:text-primary">
                            <Upload className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">Click or drag & drop to upload</p>
                            <p className="text-xs text-gray-500 mt-1">
                              Accepts PDF, DOC, or DOCX (Max size: 5MB)
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  {cvError && (
                    <p className="text-xs text-red-500 font-semibold">{cvError}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/95 text-white font-bold py-4 text-base transition-all duration-300 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer orange-glow"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    "SUBMIT APPLICATION"
                  )}
                </button>

              </form>
            </motion.div>
          )}

          {/* ── SUCCESS SCREEN ───────────────────────────────────────────── */}
          {submitStatus === "success" && (
            <motion.div
              key="success-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-10 text-center space-y-6"
            >
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary">
                <CheckCircle className="h-12 w-12 animate-pulse" />
              </div>
              
              <div className="space-y-2">
                <h1 className="text-3xl font-extrabold tracking-tight text-white uppercase">
                  Application Sent
                </h1>
                <p className="text-sm text-gray-400 max-w-md mx-auto">
                  Thank you for applying. Your resume has been uploaded and successfully registered with our system.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-sm mx-auto text-left space-y-2 text-sm text-gray-300">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-500">Applicant:</span>
                  <span className="font-semibold text-white">{submittedInfo?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Position:</span>
                  <span className="font-semibold text-white">{submittedInfo?.position}</span>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold px-6 py-3 text-sm transition-all"
                >
                  Return to Home
                </Link>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
