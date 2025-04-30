'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Playfair_Display, Inter } from 'next/font/google'
import { AnimatedBackground } from "@/components/AnimatedBackground"

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Page() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const loadTally = () => {
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        script.onload = () => {
          // @ts-ignore
          if (window.Tally) {
            // @ts-ignore
            window.Tally.loadEmbeds();
          }
        };
        document.body.appendChild(script);
      }
    };

    loadTally();
  }, []);

  return (
    <div className={`flex flex-col min-h-screen text-foreground ${inter.className}`}>
      <AnimatedBackground />
      
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        
        .glimmer-card {
          position: relative;
          background: rgba(23, 23, 23, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .glimmer-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(99, 102, 241, 0.1),
            rgba(124, 58, 237, 0.2),
            rgba(99, 102, 241, 0.1),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .hero-glow {
          position: absolute;
          top: 85%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 140%;
          height: 600px;
          background: radial-gradient(
            circle at center,
            rgba(99, 102, 241, 0.1) 0%,
            rgba(124, 58, 237, 0.05) 35%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
          filter: blur(50px);
        }

        .scroll-animation {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-animation.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-delay-1 { transition-delay: 0.1s; }
        .scroll-delay-2 { transition-delay: 0.2s; }
        .scroll-delay-3 { transition-delay: 0.3s; }
      `}</style>

      {/* Navigation */}
      <header className="flex items-center justify-between py-4 px-6 border-b border-neutral-800/50 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <img 
            src="/nebula-logo.svg" 
            alt="Nebula News Logo" 
            className="w-8 h-8 object-contain"
          />
        <Link href="/" className={`text-2xl md:text-3xl font-medium ${playfair.className}`}>
            Nebula News
        </Link>
        </div>
        <nav className="flex items-center gap-4">
          <Button 
            size="sm"
            variant="outline"
            className="border-indigo-500/50 hover:bg-indigo-500/10"
          >
            <Link href="/social">Social</Link>
          </Button>
          <Button 
            size="sm"
            variant="outline"
            className="border-indigo-500/50 hover:bg-indigo-500/10"
          >
            <Link href="/worlds">Worlds</Link>
          </Button>
          <div className="relative group">
            <Button 
              size="sm"
              variant="outline"
              className="border-indigo-500/50 hover:bg-indigo-500/10 flex items-center gap-2"
            >
              Categories
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
            <div className="absolute right-0 mt-2 w-48 py-2 bg-black/90 backdrop-blur-sm border border-indigo-500/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <a href="#" className="block px-4 py-2 text-sm text-neutral-300 hover:bg-indigo-500/10 hover:text-white">Space Tech</a>
              <a href="#" className="block px-4 py-2 text-sm text-neutral-300 hover:bg-indigo-500/10 hover:text-white">Astronomy</a>
              <a href="#" className="block px-4 py-2 text-sm text-neutral-300 hover:bg-indigo-500/10 hover:text-white">Exploration</a>
              <a href="#" className="block px-4 py-2 text-sm text-neutral-300 hover:bg-indigo-500/10 hover:text-white">Alien Life</a>
              <a href="#" className="block px-4 py-2 text-sm text-neutral-300 hover:bg-indigo-500/10 hover:text-white">Space Art</a>
            </div>
          </div>
          <Button 
            size="sm"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
          >
            Subscribe now
          </Button>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-40 md:py-56 px-6 relative">
          <div className="hero-glow" />
          <div className="max-w-[1200px] mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-6 py-2 text-base font-medium text-indigo-400 mb-12 fade-in bg-indigo-500/10 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
              <span className={playfair.className}>Exploring the Cosmos of Information</span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-medium mb-8 tracking-tight fade-in delay-1 ${playfair.className}`}>
              Discover the Universe of<br />News and Knowledge
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 mb-12 fade-in delay-2 max-w-2xl mx-auto">
              Your portal to the latest discoveries and insights from across the galaxy
            </p>
            <div className="fade-in delay-3">
              <Button 
                size="lg" 
                className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
              >
                <Link href="/worlds">Find your planet's news</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Second Section - Explore */}
        <section className="relative py-32 border-t border-neutral-800/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Left side - Astronaut */}
              <div className="w-full md:w-1/3">
                <div className="aspect-square relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] animate-pulse"></div>
                  <img
                    src="https://i.postimg.cc/YqL2DRzh/Astronaut-bro.png"
                    alt="Astronaut floating in space"
                    className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                  />
                      </div>
                    </div>
                    
              {/* Right side - Content */}
              <div className="w-full md:w-2/3">
                <div className="max-w-3xl">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    Explore the Universe of Information
                  </h2>
                  <p className="text-xl text-gray-300 mb-12">
                    Dive into a vast collection of articles, stories, and insights from across the cosmos.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <h3 className="text-2xl font-bold mb-4 text-white">Latest Discoveries</h3>
                      <p className="text-gray-300">Stay updated with the most recent space exploration news and breakthroughs.</p>
                            </div>
                    <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <h3 className="text-2xl font-bold mb-4 text-white">Space Technology</h3>
                      <p className="text-gray-300">Learn about cutting-edge space technology and its impact on our future.</p>
                      </div>
                    <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <h3 className="text-2xl font-bold mb-4 text-white">Astronomy Insights</h3>
                      <p className="text-gray-300">Explore fascinating astronomical phenomena and cosmic mysteries.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                    </div>
        </section>

        {/* Categories Section */}
        <section className="py-32 px-6 border-t border-neutral-800/10">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-8">
              <h2 className={`text-4xl font-medium mb-4 ${playfair.className}`}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Explore</span> our cosmic categories
              </h2>
              <p className="text-neutral-400 text-lg max-w-2xl">
                Navigate through different dimensions of space news and discover stories that matter to you.
                          </p>
                        </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-3 mb-12">
              <Button 
                variant="outline" 
                className="rounded-full border-indigo-500/30 hover:bg-indigo-500/10 text-indigo-300"
              >
                All
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full border-indigo-500/30 hover:bg-indigo-500/10 text-indigo-300"
              >
                Space Tech
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full border-indigo-500/30 hover:bg-indigo-500/10 text-indigo-300"
              >
                Astronomy
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full border-indigo-500/30 hover:bg-indigo-500/10 text-indigo-300"
              >
                Exploration
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full border-indigo-500/30 hover:bg-indigo-500/10 text-indigo-300"
              >
                Alien Life
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full border-indigo-500/30 hover:bg-indigo-500/10 text-indigo-300"
              >
                Space Art
              </Button>
                      </div>

            {/* Category Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Category Card 1 */}
              <div className="group relative">
                <div className="glimmer-card overflow-hidden rounded-xl aspect-[4/3]">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                  <img
                    src="https://i.pinimg.com/736x/54/4f/c8/544fc8004cadd3cdd1ced84c807ee588.jpg"
                    alt="Space Technology"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h3 className="text-lg font-medium text-white mb-1">Space Technology</h3>
                    <p className="text-sm text-neutral-300">120 stories</p>
                        </div>
                        </div>
                      </div>

              {/* Category Card 2 */}
              <div className="group relative">
                <div className="glimmer-card overflow-hidden rounded-xl aspect-[4/3]">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                  <img
                    src="https://i.pinimg.com/736x/49/94/64/4994646af24cad1ac449cd43267af0a1.jpg"
                    alt="Alien Civilizations"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h3 className="text-lg font-medium text-white mb-1">Alien Civilizations</h3>
                    <p className="text-sm text-neutral-300">85 stories</p>
                        </div>
                      </div>
                    </div>

              {/* Category Card 3 */}
              <div className="group relative">
                <div className="glimmer-card overflow-hidden rounded-xl aspect-[4/3]">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                  <img
                    src="https://i.pinimg.com/736x/8b/0b/f2/8b0bf23df6af8ab3ce8c1b6a588ac9dd.jpg"
                    alt="Space Exploration"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h3 className="text-lg font-medium text-white mb-1">Space Exploration</h3>
                    <p className="text-sm text-neutral-300">95 stories</p>
                  </div>
                      </div>
                    </div>

              {/* Category Card 4 */}
              <div className="group relative">
                <div className="glimmer-card overflow-hidden rounded-xl aspect-[4/3]">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                  <img
                    src="https://i.pinimg.com/736x/55/f9/d1/55f9d102dd17c42f48778fa6b64556a1.jpg"
                    alt="Cosmic Art"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h3 className="text-lg font-medium text-white mb-1">Cosmic Art</h3>
                    <p className="text-sm text-neutral-300">150 stories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News & Updates Section */}
        <section className="py-32 px-6 border-t border-neutral-800/10">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              News & Updates
            </h2>
            
            <div className="relative">
              {/* News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* News Card 1 */}
                <div className="glimmer-card overflow-hidden rounded-xl">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] animate-pulse z-10"></div>
                    <img
                      src="https://i.pinimg.com/736x/0f/ff/7b/0fff7bf34ccc49d351ae489f99366be9.jpg"
                      alt="Breaking news about Jupiter"
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex animate-pulse">
                        <span className="text-red-500">🚨</span>
                      </span>
                      <h3 className="text-xl font-bold text-white line-clamp-2">Breaking News: President of Jupiter Ends 1,200-Year War with Pluto</h3>
                    </div>
                    <p className="text-neutral-300 text-sm line-clamp-3">
                      In a historic and unexpected declaration, President Remora Pr'ee has officially halted the centuries-long conflict between Jupiter and Pluto...
                    </p>
                    <div className="flex items-center justify-between">
                      <Button 
                        size="sm"
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
                      >
                        Read More
                      </Button>
                      <span className="text-sm text-neutral-400">2 hours ago</span>
                    </div>
                  </div>
                </div>

                {/* News Card 2 */}
                <div className="glimmer-card overflow-hidden rounded-xl">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] animate-pulse z-10"></div>
                    <img
                      src="https://i.pinimg.com/736x/96/ad/9d/96ad9d885635190d5d14ca011b8140ab.jpg"
                      alt="Mars Colony Update"
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white line-clamp-2">Mars Colony Reports Record Growth in Sustainable Agriculture</h3>
                    <p className="text-neutral-300 text-sm line-clamp-3">
                      The Red Planet's largest biodome complex has achieved a breakthrough in crop yields, promising food independence by 2045...
                    </p>
                    <div className="flex items-center justify-between">
                      <Button 
                        size="sm"
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
                      >
                        Read More
                      </Button>
                      <span className="text-sm text-neutral-400">1 day ago</span>
                    </div>
                  </div>
                </div>

                {/* News Card 3 */}
                <div className="glimmer-card overflow-hidden rounded-xl">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] animate-pulse z-10"></div>
                    <img
                      src="https://i.pinimg.com/736x/8b/0b/f2/8b0bf23df6af8ab3ce8c1b6a588ac9dd.jpg"
                      alt="Saturn Ring Tourism"
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white line-clamp-2">Saturn's Rings to Open for Tourist Expeditions in 2026</h3>
                    <p className="text-neutral-300 text-sm line-clamp-3">
                      The Planetary Tourism Board has approved the first commercial space tours through Saturn's iconic rings...
                    </p>
                    <div className="flex items-center justify-between">
                      <Button 
                        size="sm"
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
                      >
                        Read More
                      </Button>
                      <span className="text-sm text-neutral-400">3 days ago</span>
                    </div>
                  </div>
                </div>

                {/* News Card 4 */}
                <div className="glimmer-card overflow-hidden rounded-xl">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] animate-pulse z-10"></div>
                    <img
                      src="https://i.pinimg.com/736x/55/f9/d1/55f9d102dd17c42f48778fa6b64556a1.jpg"
                      alt="Venus Weather System"
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white line-clamp-2">Venus Weather Control System Shows Promising Results</h3>
                    <p className="text-neutral-300 text-sm line-clamp-3">
                      The ambitious climate modification project on Venus has successfully reduced surface temperatures in test areas...
                    </p>
                    <div className="flex items-center justify-between">
                      <Button 
                        size="sm"
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
                      >
                        Read More
                      </Button>
                      <span className="text-sm text-neutral-400">1 week ago</span>
                    </div>
                  </div>
            </div>

                {/* News Card 5 */}
                <div className="glimmer-card overflow-hidden rounded-xl">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] animate-pulse z-10"></div>
                    <img
                      src="https://i.pinimg.com/736x/49/94/64/4994646af24cad1ac449cd43267af0a1.jpg"
                      alt="Quantum Space Communication"
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex">
                        <span className="text-purple-400">🔮</span>
                      </span>
                      <h3 className="text-xl font-bold text-white line-clamp-2">Quantum Entanglement Revolutionizes Deep Space Communication</h3>
                    </div>
                    <p className="text-neutral-300 text-sm line-clamp-3">
                      Scientists achieve instant communication across 50 light-years using advanced quantum entanglement technology, marking a breakthrough in interstellar communications...
                    </p>
                    <div className="flex items-center justify-between">
                      <Button 
                        size="sm"
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
                      >
                        Read More
                      </Button>
                      <span className="text-sm text-neutral-400">5 days ago</span>
                    </div>
                  </div>
                </div>

                {/* News Card 6 */}
                <div className="glimmer-card overflow-hidden rounded-xl">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] animate-pulse z-10"></div>
                    <img
                      src="https://i.pinimg.com/736x/54/4f/c8/544fc8004cadd3cdd1ced84c807ee588.jpg"
                      alt="Alien Botanical Gardens"
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex">
                        <span className="text-green-400">🌿</span>
                      </span>
                      <h3 className="text-xl font-bold text-white line-clamp-2">First Interplanetary Botanical Garden Opens on Europa</h3>
                    </div>
                    <p className="text-neutral-300 text-sm line-clamp-3">
                      Europa's subterranean greenhouse complex successfully cultivates exotic plant species from across the galaxy, creating a unique ecosystem under the ice...
                    </p>
                    <div className="flex items-center justify-between">
                      <Button 
                        size="sm"
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
                      >
                        Read More
                      </Button>
                      <span className="text-sm text-neutral-400">4 days ago</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button 
                className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 backdrop-blur-sm hover:from-indigo-500/30 hover:to-purple-500/30 transition-all"
                aria-label="Previous page"
              >
                <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                className="absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 backdrop-blur-sm hover:from-indigo-500/30 hover:to-purple-500/30 transition-all"
                aria-label="Next page"
              >
                <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Premium Subscription Section */}
        <section className="py-32 px-6 border-t border-neutral-800/10">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Left side - Content Card */}
              <div className="w-full md:w-1/2 scroll-animation">
                <div className="glimmer-card p-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/30 text-indigo-300 text-sm mb-6">
                    Premium Access
                  </div>
                  
                  <h2 className={`text-3xl font-medium mb-8 text-white ${playfair.className}`}>
                    Unlock the Universe of Premium News
                  </h2>

                  <div className="space-y-6 mb-8">
                    {/* Feature 1 */}
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/30 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-blue-500/40">
                        <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-blue-400 mb-2">Exclusive Coverage</h3>
                        <p className="text-neutral-300">Get early access to breaking news and exclusive stories from across the galaxy.</p>
                      </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-lg bg-yellow-500/30 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-yellow-500/40">
                        <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-yellow-400 mb-2">Ad-Free Experience</h3>
                        <p className="text-neutral-300">Enjoy uninterrupted news browsing with zero advertisements.</p>
                      </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-lg bg-green-500/30 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-green-500/40">
                        <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-green-400 mb-2">Premium Analysis</h3>
                        <p className="text-neutral-300">Deep dive reports and expert analysis from our intergalactic correspondents.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-white">$1.99</span>
                      <span className="text-neutral-400 ml-1">/month</span>
                    </div>
                    <Button 
                      size="lg"
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
                    >
                      Start Premium Access
                    </Button>
                    <p className="text-xs text-center text-neutral-400">Cancel anytime. No commitment required.</p>
                  </div>
                </div>
              </div>

              {/* Right side - Alien Illustration */}
              <div className="w-full md:w-1/2 scroll-animation scroll-delay-1">
                <div className="aspect-square relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] animate-pulse"></div>
                  <img
                    src="https://i.postimg.cc/wBvGFfDr/Alien-science-bro-1.png"
                    alt="Friendly alien scientist"
                    className="relative z-10 w-4/5 h-4/5 object-contain drop-shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-32 px-6 border-t border-neutral-800/10">
          <div className="max-w-[1200px] mx-auto">
            <div className="glimmer-card p-12 relative overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
              
              {/* Floating Planet Images */}
              <div className="absolute top-6 left-8">
                <img
                  src="https://i.postimg.cc/3wvq0LmQ/planet-svgrepo-com-1-1.png"
                  alt="Neptunesan"
                  className="w-20 h-20 object-contain drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                />
              </div>
              <div className="absolute top-4 right-24">
                <img
                  src="https://i.postimg.cc/7hmtrj80/planet-svgrepo-com-1.png"
                  alt="Saturnchan"
                  className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                />
              </div>
              <div className="absolute top-4 right-6">
                <img
                  src="https://i.postimg.cc/YCJn71Vn/planet-solar-system-svgrepo-com-1.png"
                  alt="Jupitersensei"
                  className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-2xl mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-medium mb-6 ${playfair.className}`}>
                  Get notified about cosmic discoveries
                </h2>
                <p className="text-neutral-300 mb-8">
                  Stay updated with the latest space news and stories delivered directly to your inbox
                </p>
                
                {/* Email Input */}
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-grow px-6 py-3 rounded-xl bg-black/30 border border-indigo-500/30 text-white placeholder-neutral-400 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                  <Button 
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8"
                  >
                    Subscribe
                  </Button>
                </div>
                
                {/* Social Proof */}
                <p className="mt-6 text-sm text-neutral-400">
                  Join 50,000+ space enthusiasts getting weekly updates
                </p>
            </div>

              {/* Decorative Elements */}
              <div className="absolute left-0 bottom-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
              <div className="absolute right-0 top-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-40 pb-12 px-6 border-t border-neutral-800/10">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              {/* Logo and Description Column */}
              <div className="flex flex-col items-start gap-6">
                <div className="flex items-center gap-2">
                  <img 
                    src="/nebula-logo.svg" 
                    alt="Nebula News Logo" 
                    className="w-8 h-8 object-contain"
                  />
                  <span className={`text-2xl font-medium text-white ${playfair.className}`}>
                    Nebula News
                  </span>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-neutral-400 max-w-xs">
                    Your premier source for space exploration, astronomy, and cosmic discoveries.
                  </p>
                  <div className="w-48 h-48 relative">
                    <img
                      src="https://i.postimg.cc/KjJ0vfxL/Astronaut-helmet-rafiki.png"
                      alt="Astronaut helmet illustration"
                      className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                    />
                  </div>
                </div>
              </div>

              {/* Pages Column */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-medium text-white mb-2">Pages</h3>
                <div className="flex flex-col gap-3">
                  <Link href="/" className="text-sm text-neutral-400 hover:text-white transition-colors">Home</Link>
                  <Link href="/social" className="text-sm text-neutral-400 hover:text-white transition-colors">Socials</Link>
                  <Link href="/worlds" className="text-sm text-neutral-400 hover:text-white transition-colors">Worlds</Link>
                  <Link href="/community" className="text-sm text-neutral-400 hover:text-white transition-colors">Community</Link>
                  <Link href="/news" className="text-sm text-neutral-400 hover:text-white transition-colors">News</Link>
                </div>
              </div>

              {/* Contact Column */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-medium text-white mb-2">Contact</h3>
                <div className="flex flex-col gap-3">
                  <a href="mailto:contact@nebulanews.com" className="text-sm text-neutral-400 hover:text-white transition-colors">contact@nebulanews.com</a>
                  <p className="text-sm text-neutral-400">123 Space Station</p>
                  <p className="text-sm text-neutral-400">Milky Way Galaxy</p>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="pt-8 border-t border-neutral-800/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-neutral-400">
                © 2024 Estella H LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <span className="sr-only">Discord</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6h0a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v0"/>
                <path d="M6 18v-7a3 3 0 0 1 3-3h7"/>
                <circle cx="8" cy="12" r="1"/>
                <circle cx="16" cy="12" r="1"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
              </div>
          </div>
        </div>
      </footer>
      </main>
    </div>
  )
}