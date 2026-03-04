"use client";
import axios from "axios";
import { ArrowUp, Copy, CheckCircle } from "lucide-react";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { TypeAnimation } from "react-type-animation";
const BACKEND_URI = process.env.NEXT_PUBLIC_BACKEND_URI;

const Generator = () => {
  const [prompt, setPrompt] = useState({
    job_description: "",
    link: "",
    client_name: "",
  });
  const [response, setResponse] = useState(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    setPrompt((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    const textarea = textareaRef.current;
    textarea.style.height = "auto";

    const lineHeight = 24;
    const maxHeight = lineHeight * 5;

    textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + "px";
  };

  const handleCopy = async () => {
    if (!response) return;

    try {
      await navigator.clipboard.writeText(response);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.job_description.trim() || !prompt.link.trim()) return;

    setLoading(true);
    setResponse("Generating your proposal...");

    try {
      if (!prompt) return;

      const response = await axios.post(
        `${BACKEND_URI}/generate-proposal`,
        prompt,
      );
      const obj = JSON.parse(response.data);
      setResponse(obj.proposal);
      console.log("Response", response.data.proposal);
    } catch (error) {
      toast.error("Some Error Occured.");
      console.error("Error generating proposal:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-emerald-900 to-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <h1
            data-aos="fade-down"
            className="text-5xl font-bold bg-linear-to-r from-emerald-300 via-green-300 to-teal-300 bg-clip-text text-transparent mb-2"
          >
            Proposal Generator
          </h1>
          <p data-aos="fade-down" className="text-slate-300 text-lg">
            Transform job descriptions into winning proposals instantly
          </p>
        </div>

        <div className="space-y-6">
          <form
            data-aos="fade-up"
            onSubmit={handleSubmit}
            className="relative group"
          >
            <div className="flex flex-col gap-2">
              <textarea
                ref={textareaRef}
                name="job_description"
                className="w-full bg-slate-950 text-slate-50 placeholder-slate-400 outline-none rounded-lg p-4 pr-16 resize-none scroll-smooth border-0 focus:ring-0 text-base leading-6 focus:bg-slate-900 transition"
                value={prompt.job_description}
                rows={1}
                onChange={handleInput}
                placeholder="Paste the job description here..."
                disabled={loading}
              ></textarea>
              <div className="flex flex-wrap gap-2">
                <div className="relative">
                  <input
                    name="link"
                    value={prompt.link}
                    onChange={handleInput}
                    required
                    className="peer w-full bg-slate-950 text-white rounded-lg p-4 pt-6 outline-none focus:bg-slate-900"
                    placeholder="Portfolio Link"
                  />
                  <label className="absolute left-4 top-2 text-xs text-emerald-400 opacity-0 peer-focus:opacity-100 transition">
                    Portfolio Link
                  </label>
                </div>
                <div className="relative">
                  <input
                    name="client_name"
                    value={prompt.client_name}
                    onChange={handleInput}
                    required
                    className="peer w-full bg-slate-950 text-white rounded-lg p-4 pt-6 outline-none focus:bg-slate-900"
                    placeholder="Client Name"
                    disabled={loading}
                  />
                  <label className="absolute left-4 top-2 text-xs text-emerald-400 opacity-0 peer-focus:opacity-100 transition">
                    Client Name (Optional)
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={
                    loading ||
                    !prompt.job_description.trim() ||
                    !prompt.link.trim()
                  }
                  className="bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2.5 rounded-lg transition transform hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/50 w-14 flex justify-center items-center"
                >
                  <ArrowUp className="w-5 h-5" />
                </button>
              </div>
            </div>
          </form>

          <div
            className={`relative group transition-all duration-300 ${
              response !== null
                ? "opacity-100 max-h-96"
                : "opacity-0 max-h-0 overflow-hidden"
            }`}
          >
            <div className="absolute inset-0 bg-linear-to-r from-emerald-500/15 to-teal-500/15 rounded-xl blur-lg"></div>

            <div className="relative bg-slate-900/80 backdrop-blur border border-emerald-700/50 rounded-xl overflow-hidden hover:border-emerald-600/70 transition">
              <div className="bg-slate-950 border-b border-emerald-700/30 px-4 py-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-emerald-300">
                  {loading ? "Generating..." : "Your Proposal"}
                </span>
                {!loading &&
                  response &&
                  response !== "Generating your proposal... Please wait." && (
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-2 text-slate-300 hover:text-emerald-300 transition text-sm font-medium group/copy"
                    >
                      {copied ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 group-hover/copy:scale-110 transition" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  )}
              </div>

              <div className="p-4">
                {/* <pre className="text-sm text-slate-200 font-mono overflow-y-auto max-h-64 wrap-break-word leading-relaxed whitespace-pre-line">
                  {response}
                </pre> */}
                {response && !loading && (
                  <TypeAnimation
                    sequence={[response]}
                    wrapper="pre"
                    speed={90}
                    className="text-sm text-slate-200 font-mono overflow-y-auto max-h-64 leading-relaxed whitespace-pre-line"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
