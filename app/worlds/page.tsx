'use client'

import { Playfair_Display, Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useState } from 'react'

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

export default function WorldsPage() {
  const [selectedPlanet, setSelectedPlanet] = useState(3) // Moon is at index 3

  const planets = [
    { name: 'Mercury', src: 'https://i.postimg.cc/mg3Lr1Kj/mercury.png', flightTime: '130 days', distance: '77.3 million km', since: 'Since 1974' },
    { name: 'Venus', src: 'https://i.postimg.cc/8kFrzw4b/venus.png', flightTime: '100 days', distance: '38.2 million km', since: 'Since 1962' },
    { name: 'Earth', src: 'https://i.postimg.cc/Vs30rMHP/earth.png', flightTime: '0', distance: '0 km', since: 'Our Home' },
    { name: 'Moon', src: 'https://i.postimg.cc/8PMJh5qJ/moon.png', flightTime: '3 days', distance: '384,400 km', since: 'Since 1969' },
    { name: 'Mars', src: 'https://i.postimg.cc/0yv6Zvst/mars.png', flightTime: '7 months', distance: '225 million km', since: 'Since 1965' },
    { name: 'Jupiter', src: 'https://i.postimg.cc/3xZkcqr3/jupiter.png', flightTime: '6 years', distance: '628.7 million km', since: 'Since 1973' },
    { name: 'Saturn', src: 'https://i.postimg.cc/yNYD4TWc/saturn.png', flightTime: '7 years', distance: '1.2 billion km', since: 'Since 1979' },
    { name: 'Neptune', src: 'https://i.postimg.cc/cHv664RJ/neptune.png', flightTime: '12 years', distance: '4.3 billion km', since: 'Since 1989' },
    { name: 'Uranus', src: 'https://i.postimg.cc/26gyWRG7/uranus.webp', flightTime: '8.5 years', distance: '2.9 billion km', since: 'Since 1986' },
    { name: 'Pluto', src: 'https://i.postimg.cc/xjbc28jx/pluto.png', flightTime: '9.5 years', distance: '5.9 billion km', since: 'Since 2015' },
  ]

  return (
    <div className={`min-h-screen text-foreground ${inter.className}`}>
      {/* Navigation */}
      <header className="flex items-center justify-between py-4 px-6 border-b border-neutral-800/50 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Image 
            src="/nebula-logo.svg" 
            alt="Nebula News Logo" 
            width={32}
            height={32}
            className="object-contain"
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

      <main>
        {/* Planet Carousel Section */}
        <section className="pt-24 pb-20 px-6">
          <div className="max-w-[1400px] mx-auto text-center">
            <h1 className={`text-7xl mb-6 ${playfair.className}`}>Worlds</h1>
            <p className="text-2xl text-neutral-400 mb-32">Select and view a planet's current news</p>
            
            <div className="relative mb-32 mt-16">
              {/* Carousel Navigation */}
              <button 
                onClick={() => setSelectedPlanet((prev) => (prev === 0 ? planets.length - 1 : prev - 1))}
                className="absolute -left-20 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                onClick={() => setSelectedPlanet((prev) => (prev === planets.length - 1 ? 0 : prev + 1))}
                className="absolute -right-20 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Planets Display */}
              <div className="flex items-center justify-center gap-12 overflow-hidden py-12">
                {planets.map((planet, index) => {
                  const position = index - selectedPlanet
                  const scale = position === 0 ? 1 : 0.6
                  const opacity = Math.abs(position) <= 2 ? 1 - Math.abs(position) * 0.3 : 0
                  const translateX = position * 180

                  return (
                    <div
                      key={planet.name}
                      className="transition-all duration-300 cursor-pointer absolute left-1/2"
                      style={{
                        transform: `translateX(-50%) translateX(${translateX}%) scale(${scale})`,
                        opacity,
                        zIndex: position === 0 ? 10 : 5,
                      }}
                      onClick={() => {
                        setSelectedPlanet(index);
                        document.getElementById('planet-news')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <div className={`relative ${planet.name === 'Saturn' || planet.name === 'Jupiter' ? 'w-96 h-96' : 'w-80 h-80'}`}>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl animate-pulse"></div>
                        <Image
                          src={planet.src}
                          alt={planet.name}
                          width={384}
                          height={384}
                          className={`w-full h-full object-contain ${planet.name === 'Saturn' ? 'scale-125' : planet.name === 'Jupiter' ? 'scale-110' : 'p-8'} rounded-full relative z-10`}
                        />
                        <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
                      </div>
                      <p className="mt-12 text-center text-2xl font-medium">{planet.name}</p>
                    </div>
                  )
                })}
              </div>

              {/* Planet Info */}
              <div className="mt-48 w-full max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-32 text-base text-neutral-400">
                  <div className="text-center">
                    <p className="mb-6">Flight time</p>
                    <p className="text-white text-xl">{planets[selectedPlanet].flightTime}</p>
                  </div>
                  <div className="text-center">
                    <p className="mb-6">Distance from Earth</p>
                    <p className="text-white text-xl">{planets[selectedPlanet].distance}</p>
                  </div>
                  <div className="text-center">
                    <p className="mb-6">First exploration</p>
                    <p className="text-white text-xl">{planets[selectedPlanet].since}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section id="planet-news" className="py-16 px-6 border-t border-neutral-800/10 scroll-mt-8">
          <div className="max-w-[1200px] mx-auto">
            <h2 className={`text-4xl font-medium mb-12 ${playfair.className}`}>
              Latest news from {planets[selectedPlanet].name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Article Card 1 */}
              <div className="group cursor-pointer">
                <div className="glimmer-card overflow-hidden rounded-xl">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] animate-pulse z-10"></div>
                    <Image
                      src="https://i.pinimg.com/736x/a5/0b/f8/a50bf8d75283fd5a99927b900a2cdba4.jpg"
                      alt="Article thumbnail"
                      width={800}
                      height={500}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="text-sm text-indigo-400">Latest Discovery</div>
                    <h3 className="text-lg font-bold text-white">New Findings on {planets[selectedPlanet].name}&apos;s Atmosphere</h3>
                    <p className="text-neutral-300 text-sm line-clamp-2">
                      Recent observations reveal fascinating details about the composition and behavior of {planets[selectedPlanet].name}&apos;s atmosphere.
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-neutral-800/30">
                      <span className="text-sm text-neutral-400">Written by CosmicExplorer</span>
                      <Button 
                        size="sm"
                        className="text-indigo-400 hover:text-white transition-colors"
                        variant="link"
                      >
                        Read More →
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Card 2 */}
              <div className="group cursor-pointer">
                <div className="glimmer-card overflow-hidden rounded-xl">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] animate-pulse z-10"></div>
                    <Image
                      src="https://i.pinimg.com/736x/ad/29/f0/ad29f0251f4dcd9ec369e5b462c18d87.jpg"
                      alt="Article thumbnail"
                      width={800}
                      height={500}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="text-sm text-indigo-400">Exploration</div>
                    <h3 className="text-lg font-bold text-white">Planning the Next Mission to {planets[selectedPlanet].name}</h3>
                    <p className="text-neutral-300 text-sm line-clamp-2">
                      Space agencies worldwide collaborate on ambitious plans for future exploration missions.
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-neutral-800/30">
                      <span className="text-sm text-neutral-400">Written by MissionPlanner</span>
                      <Button 
                        size="sm"
                        className="text-indigo-400 hover:text-white transition-colors"
                        variant="link"
                      >
                        Read More →
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Card 3 */}
              <div className="group cursor-pointer">
                <div className="glimmer-card overflow-hidden rounded-xl">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] animate-pulse z-10"></div>
                    <img
                      src="https://i.pinimg.com/736x/1c/c8/ef/1cc8efba1c0a18819bb57e6e0fa1b6b6.jpg"
                      alt="Article thumbnail"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="text-sm text-indigo-400">Research</div>
                    <h3 className="text-lg font-bold text-white">Scientific Breakthroughs on {planets[selectedPlanet].name}</h3>
                    <p className="text-neutral-300 text-sm line-clamp-2">
                      Latest research unveils groundbreaking discoveries about {planets[selectedPlanet].name}&apos;s unique characteristics.
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-neutral-800/30">
                      <span className="text-sm text-neutral-400">Written by SpaceResearcher</span>
                      <Button 
                        size="sm"
                        className="text-indigo-400 hover:text-white transition-colors"
                        variant="link"
                      >
                        Read More →
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="pt-40 pb-12 px-6 border-t border-neutral-800/10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo and Description Column */}
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-2">
                <Image 
                  src="/nebula-logo.svg" 
                  alt="Nebula News Logo" 
                  width={32}
                  height={32}
                  className="object-contain"
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
                  <Image
                    src="https://i.postimg.cc/KjJ0vfxL/Astronaut-helmet-rafiki.png"
                    alt="Astronaut helmet illustration"
                    width={192}
                    height={192}
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

      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

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
      `}</style>
    </div>
  )
} 