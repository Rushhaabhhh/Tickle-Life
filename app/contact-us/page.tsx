"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Globe, Lock } from "lucide-react";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [telegram, setTelegram] = useState("");
  const [errors, setErrors] = useState<{ email?: string; website?: string }>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const validateWebsite = (value: string) =>
    /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$/.test(value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!email) newErrors.email = "Email address is required";
    else if (!validateEmail(email))
      newErrors.email = "Please enter a valid email address";

    if (!website) newErrors.website = "Business website is required";
    else if (!validateWebsite(website))
      newErrors.website = "Please enter a valid website URL";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        console.log({ email, website, telegram: telegram || "Not provided" });
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-600 p-4 font-inter">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 overflow-hidden"
      >
        {/* Top gradient bar */}
        <div className="h-1 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-300" />

        {/* Header */}
        <div className="px-8 pt-12 pb-6 text-center bg-gradient-to-br from-indigo-50/50 to-purple-50/50">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            Ready to move forward? Let us know how to reach you.
          </h1>
          <p className="mt-3 text-slate-500 max-w-md mx-auto">
            If you&apos;ve completed your eligibility check and qualify, fill in your
            details and our compliance team will get in touch fast.
          </p>
        </div>

        {/* Form */}
        <div className="px-8 py-8">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Email */}
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">
                    Email address:
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 rounded-xl border-2 text-base outline-none transition-all ${
                      errors.email
                        ? "border-red-500 bg-red-50"
                        : email
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 bg-gray-50"
                    }`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Website */}
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">
                    Your business website:
                  </label>
                  <input
                    type="url"
                    placeholder="https://example.com"
                    className={`w-full px-4 py-3 rounded-xl border-2 text-base outline-none transition-all ${
                      errors.website
                        ? "border-red-500 bg-red-50"
                        : website
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 bg-gray-50"
                    }`}
                    value={website}
                    onChange={(e) => {
                      let val = e.target.value;
                      if (
                        val &&
                        !/^https?:\/\//.test(val) &&
                        !val.startsWith(" ")
                      ) {
                        val = "https://" + val;
                      }
                      setWebsite(val);
                    }}
                  />
                  {errors.website && (
                    <p className="mt-2 text-sm text-red-600">{errors.website}</p>
                  )}
                </div>

                {/* Telegram */}
                <div>
                  <label className="block text-slate-400 font-normal mb-2">
                    Telegram handle (optional):
                  </label>
                  <input
                    type="text"
                    placeholder="@yourusername"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-base outline-none transition-all"
                    value={telegram}
                    onChange={(e) => {
                      let val = e.target.value;
                      if (val && !val.startsWith("@")) {
                        val = "@" + val;
                      }
                      setTelegram(val);
                    }}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl font-semibold text-white text-lg transition-all relative overflow-hidden ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-br from-indigo-400 to-purple-500 hover:shadow-xl hover:-translate-y-1"
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-3">
                      Submitting...
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    </span>
                  ) : (
                    "Submit My Contact Details"
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="thankyou"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-gradient-to-br from-green-100 to-green-200 border-2 border-green-500 rounded-xl p-6 text-center"
              >
                <h3 className="text-green-800 font-semibold text-lg">
                  ✅ Thank you!
                </h3>
                <p className="text-green-700 mt-1 text-sm">
                  If you pre-qualified, our expert team will reach out directly
                  within 24 hours by your preferred method.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-8 py-6 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500 mb-4">
            We verify each inquiry against our compliance and vertical standards
            before contacting you.
          </p>

          <div className="flex justify-center items-center gap-4 flex-wrap">
            <Badge icon={<ShieldCheck size={18} />} text="PCI DSS" />
            <Badge icon={<Globe size={18} />} text="Geo Licensed" />
            <Badge icon={<Lock size={18} />} text="Data Never Shared" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <motion.div
      whileHover={{ y: -2, boxShadow: "0px 6px 12px rgba(0,0,0,0.15)" }}
      className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow cursor-pointer"
      title={text}
      onClick={() => alert(text)}
    >
      <div className="bg-indigo-600 text-white p-1.5 rounded-md">{icon}</div>
      <span className="text-sm font-medium text-slate-700">{text}</span>
    </motion.div>
  );
}
