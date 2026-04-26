"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-8 pt-4 px-6 max-w-4xl mx-auto border-t border-neutral-900">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
        {/* Left */}
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-wider">
          <span>© {currentYear}</span>
          <span className="text-neutral-400">Lakshya Verma</span>
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-wider text-neutral-500">
          <a
            href="https://github.com/LakshyaVerma123kl"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lakshya-verma-123kl"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:lakshya123kl@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
