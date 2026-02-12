"use client";

import { useState } from "react";

const CA = "YOUR_CONTRACT_ADDRESS_HERE";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyCA = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-dark-900 relative">
      {/* ──── HERO SECTION ──── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 radial-glow overflow-hidden">
        {/* Ambient particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-gold-400/20 animate-float" />
          <div
            className="absolute top-1/3 right-1/3 w-0.5 h-0.5 rounded-full bg-gold-300/15 animate-float"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 rounded-full bg-gold-400/10 animate-float"
            style={{ animationDelay: "3s" }}
          />
        </div>

        {/* Top bar */}
        <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 sm:px-12 py-5 animate-on-load animate-fade-in z-10">
          <span className="text-gold-gradient-static text-sm font-semibold tracking-[0.3em] uppercase">
            $HODL
          </span>
          <div className="flex items-center gap-6">
            <a
              href="#philosophy"
              className="text-xs text-white/40 hover:text-gold-400 transition-colors tracking-wider uppercase"
            >
              Philosophy
            </a>
            <a
              href="#tokenomics"
              className="text-xs text-white/40 hover:text-gold-400 transition-colors tracking-wider uppercase"
            >
              Tokenomics
            </a>
          </div>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* IMAGE — replace /hero.png with your image filename */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/image.png"
            alt="AM HODLING"
            className="w-40 h-40 sm:w-52 sm:h-52 mx-auto mb-8 rounded-full object-cover animate-on-load animate-fade-in"
            style={{
              boxShadow:
                "0 0 40px rgba(255, 215, 0, 0.25), 0 0 80px rgba(255, 215, 0, 0.1)",
            }}
          />

          {/* Main headline */}
          <h1 className="text-gold-gradient glow-gold-strong text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none animate-on-load animate-fade-in-up">
            AM H
            <span className="gold-coin animate-coin-spin inline-flex" />
            DLING
          </h1>

          {/* Ticker */}
          <p className="text-gold-gradient-static text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.4em] mt-3 animate-on-load animate-fade-in-up-delay-1">
            $HODL
          </p>

          {/* Divider */}
          <div className="gold-divider w-24 mx-auto mt-6 mb-6 animate-on-load animate-fade-in-delay-2" />

          {/* Subtext */}
          <p className="text-white/50 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-md mx-auto animate-on-load animate-fade-in-up-delay-2">
            Built for diamond hands. Designed for the cycle.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 animate-on-load animate-fade-in-up-delay-3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-8 py-3 rounded-full text-sm uppercase tracking-[0.2em] min-w-[180px] flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter
            </a>
            <button
              onClick={copyCA}
              className="btn-outline-gold px-8 py-3 rounded-full text-sm uppercase tracking-[0.2em] min-w-[180px] flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copy CA
                </>
              )}
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-on-load animate-fade-in-delay-5">
          <div className="w-[1px] h-10 bg-gradient-to-b from-gold-400/40 to-transparent animate-pulse-glow" />
        </div>
      </section>

      {/* ──── PHILOSOPHY SECTION ──── */}
      <section id="philosophy" className="relative py-20 sm:py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-gold-gradient-static text-xs font-semibold tracking-[0.4em] uppercase animate-on-load animate-fade-in-up">
            The Conviction
          </span>

          <div className="gold-divider w-16 mx-auto mt-5 mb-8 animate-on-load animate-fade-in-delay-1" />

          <p className="text-white/60 text-base sm:text-lg md:text-xl font-light leading-relaxed animate-on-load animate-fade-in-up-delay-1">
            In a market ruled by fear, noise, and the temptation to sell,{" "}
            <span className="text-gold-gradient-static font-medium">
              $HODL
            </span>{" "}
            is a statement. Not just a token — a philosophy. We don&apos;t
            flinch at red candles. We don&apos;t panic at volatility. We hold
            through the chaos, because conviction isn&apos;t built in bull
            markets — it&apos;s forged in the fire.
          </p>

          <p className="text-white/30 text-xs sm:text-sm font-light mt-8 tracking-wide animate-on-load animate-fade-in-up-delay-2">
            This isn&apos;t for everyone. It&apos;s for the ones who understand.
          </p>
        </div>
      </section>

      {/* ──── TOKENOMICS SECTION ──── */}
      <section id="tokenomics" className="relative py-20 sm:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-gold-gradient-static text-xs font-semibold tracking-[0.4em] uppercase animate-on-load animate-fade-in-up">
              Tokenomics
            </span>
            <div className="gold-divider w-16 mx-auto mt-5 animate-on-load animate-fade-in-delay-1" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 animate-on-load animate-fade-in-up-delay-2">
            <div className="glass-card rounded-2xl p-5 sm:p-6 text-center hover:border-gold-400/25 transition-all duration-500">
              <p className="text-gold-gradient text-2xl sm:text-3xl font-black">1B</p>
              <p className="text-white/30 text-[10px] sm:text-xs font-medium tracking-wider uppercase mt-2">Total Supply</p>
            </div>
            <div className="glass-card rounded-2xl p-5 sm:p-6 text-center hover:border-gold-400/25 transition-all duration-500">
              <p className="text-gold-gradient text-2xl sm:text-3xl font-black">0%</p>
              <p className="text-white/30 text-[10px] sm:text-xs font-medium tracking-wider uppercase mt-2">Tax</p>
            </div>
            <div className="glass-card rounded-2xl p-5 sm:p-6 text-center hover:border-gold-400/25 transition-all duration-500">
              <p className="text-gold-gradient text-2xl sm:text-3xl font-black">🔥</p>
              <p className="text-white/30 text-[10px] sm:text-xs font-medium tracking-wider uppercase mt-2">LP Burned</p>
            </div>
            <div className="glass-card rounded-2xl p-5 sm:p-6 text-center hover:border-gold-400/25 transition-all duration-500">
              <p className="text-gold-gradient text-2xl sm:text-3xl font-black">✓</p>
              <p className="text-white/30 text-[10px] sm:text-xs font-medium tracking-wider uppercase mt-2">Renounced</p>
            </div>
          </div>

          <p className="text-center text-white/20 text-xs font-light mt-8 tracking-wide animate-on-load animate-fade-in-up-delay-3">
            No tricks. No traps. Pure conviction.
          </p>
        </div>
      </section>

      {/* ──── CTA SECTION ──── */}
      <section className="relative py-20 sm:py-28 px-6 radial-glow">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-gold-gradient glow-gold text-3xl sm:text-4xl md:text-5xl font-black tracking-tight animate-on-load animate-fade-in-up">
            Still holding?
          </h2>
          <p className="text-white/40 text-sm sm:text-base font-light mt-4 animate-on-load animate-fade-in-up-delay-1">
            Good. You belong here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 animate-on-load animate-fade-in-up-delay-2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-8 py-3 rounded-full text-sm uppercase tracking-[0.2em] min-w-[180px] flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter
            </a>
            <button
              onClick={copyCA}
              className="btn-outline-gold px-8 py-3 rounded-full text-sm uppercase tracking-[0.2em] min-w-[180px] flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copy CA
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* ──── FOOTER ──── */}
      <footer className="relative py-10 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-gradient-static text-sm font-semibold tracking-[0.3em] uppercase">
            $HODL
          </p>
          <p className="text-white/20 text-xs mt-3 tracking-wider">
            Built for diamond hands. Designed for the cycle.
          </p>
        </div>
      </footer>
    </main>
  );
}
