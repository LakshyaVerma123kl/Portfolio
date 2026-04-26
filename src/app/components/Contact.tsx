"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setToast({ message: "Message sent successfully.", type: "success" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setToast({ message: result.message || "Failed to send.", type: "error" });
      }
    } catch {
      setToast({ message: "Something went wrong.", type: "error" });
    } finally {
      setIsSending(false);
      setTimeout(() => setToast(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-12 px-6 max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-xl font-bold tracking-tight text-zinc-50 mb-2">Contact.</h2>
        <p className="text-zinc-500 font-mono text-sm">Let&apos;s build something</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-zinc-400 text-sm leading-relaxed mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:lakshya123kl@gmail.com"
              className="block text-sm font-medium text-zinc-50 hover:text-zinc-300 transition-colors"
            >
              lakshya123kl@gmail.com
            </a>
            <a
              href="https://github.com/LakshyaVerma123kl"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm font-medium text-zinc-50 hover:text-zinc-300 transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/lakshya-verma-123kl"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm font-medium text-zinc-50 hover:text-zinc-300 transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/5">
            <div>
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input" required />
            </div>
            <div>
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />
            </div>
            <div>
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="form-input resize-none" required />
            </div>
            <button type="submit" className="btn-primary w-full justify-center mt-2" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {toast && (
        <div className={`toast ${toast.type === "success" ? "toast-success" : "toast-error"}`}>
          {toast.message}
        </div>
      )}
    </section>
  );
}
