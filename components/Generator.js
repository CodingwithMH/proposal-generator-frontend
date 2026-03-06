"use client";
import axios from "axios";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { TypeAnimation } from "react-type-animation";
import { Copy } from "lucide-react";

const BACKEND_URI = process.env.NEXT_PUBLIC_BACKEND_URI;

const Generator = () => {
  const [prompt, setPrompt] = useState({
    job_description: "",
    link: "",
    client_name: "",
  });

  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

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

    await navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!prompt.job_description.trim() || !prompt.link.trim()) return;

    setLoading(true);
    setResponse("Generating proposal...");

    try {
      const res = await axios.post(
        `${BACKEND_URI}/generate-proposal`,
        prompt
      );

      const obj = JSON.parse(res.data);

      setResponse(obj.proposal);
    } catch (err) {
      if (err.response?.status === 429) {
    toast.error("Too many requests. Please wait before trying again.");
  } else if (err.response?.data?.error) {
    toast.error(err.response.data.error);
  } else {
    toast.error("Error generating proposal");
  }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-slate-50 via-white to-green-50 px-6 py-16 relative z-10">

      <div data-aos="fade-down" className="text-center mb-14">
        <h1 className="text-5xl font-bold text-slate-800">
          AI Proposal Generator
        </h1>

        <p className="text-slate-500 mt-3">
          Generate winning freelance proposals instantly
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

        <div data-aos="fade-right" className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">

          <h2 className="text-xl font-semibold text-slate-700 mb-6">
            Job Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <textarea
              ref={textareaRef}
              name="job_description"
              value={prompt.job_description}
              onChange={handleInput}
              placeholder="Paste job description..."
              className="w-full bg-slate-50 border border-slate-300 rounded-lg p-4 text-slate-700 outline-none focus:ring-2 focus:ring-green-400 resize-none"
              required
            />

            <input
              name="link"
              value={prompt.link}
              onChange={handleInput}
              placeholder="Portfolio Link"
              required
              className="w-full bg-slate-50 border border-slate-300 rounded-lg p-4 outline-none focus:ring-2 focus:ring-green-400"
            />

            <input
              name="client_name"
              value={prompt.client_name}
              onChange={handleInput}
              placeholder="Client Name (optional)"
              className="w-full bg-slate-50 border border-slate-300 rounded-lg p-4 outline-none focus:ring-2 focus:ring-green-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-500 text-white py-3 rounded-lg font-medium transition"
            >
              {loading ? "Generating..." : "Generate Proposal"}
            </button>

          </form>
        </div>

        <div data-aos="fade-left" className="bg-white border border-slate-200 rounded-2xl shadow-lg flex flex-col">

          <div className="flex justify-between items-center px-6 py-4 border-b">

            <h2 className="font-semibold text-slate-700">
              Generated Proposal
            </h2>

            {response && !loading && (
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-green-600"
              >
                <Copy size={16} />
                {copied ? "Copied" : "Copy"}
              </button>
            )}

          </div>

          <div className="p-6 overflow-y-auto h-100">

            {response ? (
              <TypeAnimation
                key={response}
                sequence={[response]}
                wrapper="pre"
                speed={90}
                className="text-slate-700 whitespace-pre-line text-sm leading-relaxed"
              />
            ) : (
              <p className="text-slate-400 text-sm">
                Your generated proposal will appear here...
              </p>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Generator;