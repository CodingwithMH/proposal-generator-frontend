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

      const res = await axios.post(
        `${BACKEND_URI}/generate-proposal`,
        prompt,
      );
      const obj = JSON.parse(res.data);
      setResponse(obj.proposal);
    } catch (error) {
      toast.error("Some Error Occured.");
      console.error("Error generating proposal:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="flex items-center justify-center px-6 my-20">
    <div className="w-full max-w-3xl">

      <div className="mb-12 text-center">
        <h1
          data-aos="fade-left"
          className="text-5xl font-bold bg-linear-to-r from-cyan-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent tracking-tight"
        >
          AI Proposal Generator
        </h1>

        <p
          data-aos="fade-right"
          className="mt-4 text-slate-400 text-lg max-w-xl mx-auto"
        >
          Generate persuasive, high-converting proposals in seconds.
        </p>
      </div>

      <div
        data-aos="fade-up"
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
      >
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            name="job_description"
            value={prompt.job_description}
            onChange={handleInput}
            placeholder="Paste the job description here..."
            disabled={loading}
            className="w-full bg-slate-900/70 text-slate-100 placeholder-slate-500 rounded-xl p-5 border border-slate-700/50 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 outline-none transition-all duration-300 resize-none text-base leading-6"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="link"
              value={prompt.link}
              onChange={handleInput}
              required
              placeholder="Portfolio Link"
              disabled={loading}
              className="w-full bg-slate-900/70 text-slate-100 rounded-xl p-4 border border-slate-700/50 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 outline-none transition-all duration-300"
            />

            <input
              name="client_name"
              value={prompt.client_name}
              onChange={handleInput}
              placeholder="Client Name (Optional)"
              disabled={loading}
              className="w-full bg-slate-900/70 text-slate-100 rounded-xl p-4 border border-slate-700/50 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 outline-none transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            disabled={
              loading ||
              !prompt.job_description.trim() ||
              !prompt.link.trim()
            }
            className="w-full bg-linear-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-white font-semibold py-3 rounded-xl shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Generating..." : "Generate Proposal"}
          </button>
        </form>
      </div>

      {/* Response Section */}
      <div
        className={`mt-10 transition-all duration-500 ${
          response
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">

          <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
            <span className="text-sm font-semibold text-cyan-300 tracking-wide">
              Your Proposal
            </span>

            {!loading && response && (
              <button
                onClick={handleCopy}
                className="text-slate-400 hover:text-cyan-300 transition text-sm"
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
            )}
          </div>

          <div className="p-6">
            <TypeAnimation
              key={response}
              sequence={[response]}
              wrapper="pre"
              speed={90}
              className="text-sm text-slate-300 leading-relaxed whitespace-pre-line max-h-80 overflow-y-auto"
            />
          </div>
        </div>
      </div>

    </div>
  </div>
);
};

export default Generator;
