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
        <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 sm:px-12 py-6 animate-on-load animate-fade-in z-10">
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
          {/* Main headline */}
          <h1 className="text-gold-gradient glow-gold-strong text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none animate-on-load animate-fade-in-up">
            AM H
            <span className="gold-coin animate-coin-spin inline-flex" />
            DLING
          </h1>

          {/* Ticker */}
          <p className="text-gold-gradient-static text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.4em] mt-4 animate-on-load animate-fade-in-up-delay-1">
            $HODL
          </p>

          {/* Divider */}
          <div className="gold-divider w-32 mx-auto mt-8 mb-8 animate-on-load animate-fade-in-delay-2" />

          {/* Subtext */}
          <p className="text-white/50 text-base sm:text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto animate-on-load animate-fade-in-up-delay-2">
            Built for diamond hands. Designed for the cycle.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 animate-on-load animate-fade-in-up-delay-3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] min-w-[200px] flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter
            </a>
            <button
              onClick={copyCA}
              className="btn-outline-gold px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] min-w-[200px] flex items-center justify-center gap-2"
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
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-on-load animate-fade-in-delay-5">
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold-400/40 to-transparent animate-pulse-glow" />
        </div>
      </section>

      {/* ──── PHILOSOPHY SECTION ──── */}
      <section
        id="philosophy"
        className="relative py-32 sm:py-40 px-6"
      >
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-gold-gradient-static text-xs font-semibold tracking-[0.4em] uppercase animate-on-load animate-fade-in-up">
            The Conviction
          </span>

          <div className="gold-divider w-16 mx-auto mt-6 mb-10 animate-on-load animate-fade-in-delay-1" />

          <p className="text-white/60 text-lg sm:text-xl md:text-2xl font-light leading-relaxed animate-on-load animate-fade-in-up-delay-1">
            In a market ruled by fear, noise, and the temptation to sell,{" "}
            <span className="text-gold-gradient-static font-medium">
              $HODL
            </span>{" "}
            is a statement. Not just a token — a philosophy. We don&apos;t
            flinch at red candles. We don&apos;t panic at volatility. We hold
            through the chaos, because conviction isn&apos;t built in bull
            markets — it&apos;s forged in the fire.
          </p>

          <p className="text-white/30 text-sm sm:text-base font-light mt-10 tracking-wide animate-on-load animate-fade-in-up-delay-2">
            This isn&apos;t for everyone. It&apos;s for the ones who understand.
          </p>
        </div>
      </section>

      {/* ──── TOKENOMICS SECTION ──── */}
      <section
        id="tokenomics"
        className="relative py-32 sm:py-40 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold-gradient-static text-xs font-semibold tracking-[0.4em] uppercase animate-on-load animate-fade-in-up">
              Tokenomics
            </span>
            <div className="gold-divider w-16 mx-auto mt-6 animate-on-load animate-fade-in-delay-1" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 animate-on-load animate-fade-in-up-delay-2">
            {/* Supply */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 text-center group hover:border-gold-400/25 transition-all duration-500">
              <p className="text-gold-gradient text-3xl sm:text-4xl font-black">
                1B
              </p>
              <p className="text-white/30 text-xs sm:text-sm font-medium tracking-wider uppercase mt-3">
                Total Supply
              </p>
            </div>

            {/* Tax */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 text-center group hover:border-gold-400/25 transition-all duration-500">
              <p className="text-gold-gradient text-3xl sm:text-4xl font-black">
                0%
              </p>
              <p className="text-white/30 text-xs sm:text-sm font-medium tracking-wider uppercase mt-3">
                Tax
              </p>
            </div>

            {/* LP */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 text-center group hover:border-gold-400/25 transition-all duration-500">
              <p className="text-gold-gradient text-3xl sm:text-4xl font-black tracking-tight">
                🔥
              </p>
              <p className="text-white/30 text-xs sm:text-sm font-medium tracking-wider uppercase mt-3">
                LP Burned
              </p>
            </div>

            {/* Ownership */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 text-center group hover:border-gold-400/25 transition-all duration-500">
              <p className="text-gold-gradient text-3xl sm:text-4xl font-black tracking-tight">
                ✓
              </p>
              <p className="text-white/30 text-xs sm:text-sm font-medium tracking-wider uppercase mt-3">
                Renounced
              </p>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-center text-white/20 text-sm font-light mt-10 tracking-wide animate-on-load animate-fade-in-up-delay-3">
            No tricks. No traps. Pure conviction.
          </p>
        </div>
      </section>

      {/* ──── CTA SECTION ──── */}
      <section className="relative py-32 sm:py-40 px-6 radial-glow">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-gold-gradient glow-gold text-4xl sm:text-5xl md:text-6xl font-black tracking-tight animate-on-load animate-fade-in-up">
            Still holding?
          </h2>
          <p className="text-white/40 text-base sm:text-lg font-light mt-6 animate-on-load animate-fade-in-up-delay-1">
            Good. You belong here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 animate-on-load animate-fade-in-up-delay-2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] min-w-[200px] flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter
            </a>
            <button
              onClick={copyCA}
              className="btn-outline-gold px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] min-w-[200px] flex items-center justify-center gap-2"
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
      <footer className="relative py-16 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-gradient-static text-sm font-semibold tracking-[0.3em] uppercase">
            $HODL
          </p>
          <p className="text-white/20 text-xs mt-4 tracking-wider">
            Built for diamond hands. Designed for the cycle.
          </p>
          <p className="text-white/10 text-[10px] mt-10 tracking-wider">
            $HODL is a memecoin with no intrinsic value or expectation of financial return. Always DYOR.
          </p>
        </div>
      </footer>
    </main>
  );
}
