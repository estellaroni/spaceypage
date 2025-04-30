'use client'

import { Playfair_Display, Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

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

export default function SocialPage() {
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
        {/* Community Section */}
        <section className="py-32 px-6">
          <div className="max-w-[1200px] mx-auto text-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
              <h2 className={`text-6xl mb-12 relative z-10 ${playfair.className}`}>Community</h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="relative">
                <div className="absolute -inset-10 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 rounded-[100px] blur-3xl"></div>
                <p className="text-2xl text-neutral-200 relative z-10">
                  Joining the Nebula News community is about more than just staying informed about space. 
                  It&rsquo;s an invitation to a vibrant network of stargazers, scientists, and space enthusiasts 
                  where you can share discoveries, discuss theories, and find your cosmic connection.
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 relative z-10">
                <div className="flex -space-x-2">
                  <Image 
                    src="https://i.pravatar.cc/48?img=1" 
                    alt="Community member" 
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full border-2 border-black"
                  />
                  <Image 
                    src="https://i.pravatar.cc/48?img=2" 
                    alt="Community member" 
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full border-2 border-black"
                  />
                  <Image 
                    src="https://i.pravatar.cc/48?img=3" 
                    alt="Community member" 
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full border-2 border-black"
                  />
                </div>
                <span className="text-sm text-neutral-200 whitespace-nowrap">
                  + 20,000 Space Enthusiasts, Scientists, and Explorers
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Community Section */}
        <section className="py-32 px-6 border-t border-neutral-800/10">
          <div className="max-w-[1200px] mx-auto">
            <h2 className={`text-5xl font-medium mb-16 ${playfair.className}`}>
              Explore Our Vibrant Community
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mentors Card */}
              <div className="glimmer-card overflow-hidden rounded-xl">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] animate-pulse z-10"></div>
                  <Image
                    src="https://i.pinimg.com/736x/1c/dd/1a/1cdd1ad86dcc814ab0e88007c1f8aa15.jpg"
                    alt="Cosmic Guides"
                    width={500}
                    height={375}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">COSMIC GUIDES</h3>
                  <p className="text-neutral-300 mb-8">
                    Our expert astronomers, astrophysicists, and space industry veterans form the 
                    backbone of our community. Learn from their decades of experience exploring 
                    the cosmos and advancing space technology.
                  </p>
                  <Button 
                    className="flex items-center gap-2 text-indigo-300 hover:text-white transition-colors"
                    variant="link"
                  >
                    LEARN MORE
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </div>
              </div>

              {/* Virtual Space Card */}
              <div className="glimmer-card overflow-hidden rounded-xl">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] animate-pulse z-10"></div>
                  <Image
                    src="https://i.pinimg.com/736x/78/d8/9c/78d89c724247245943cd1dda8100b37c.jpg"
                    alt="Virtual Observatory"
                    width={500}
                    height={375}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">VIRTUAL OBSERVATORY</h3>
                  <p className="text-neutral-300 mb-8">
                    Experience space exploration like never before in our virtual observatory. 
                    Join live streams of astronomical events, participate in virtual missions, 
                    and connect with fellow space enthusiasts.
                  </p>
                  <Button 
                    className="flex items-center gap-2 text-indigo-300 hover:text-white transition-colors"
                    variant="link"
                  >
                    EXPLORE
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </div>
              </div>

              {/* Alumni Card */}
              <div className="glimmer-card overflow-hidden rounded-xl">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] animate-pulse z-10"></div>
                  <Image
                    src="https://i.pinimg.com/736x/85/26/29/852629950857f7bbb0408528ad6b6ce4.jpg"
                    alt="Stellar Network"
                    width={500}
                    height={375}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">STELLAR NETWORK</h3>
                  <p className="text-neutral-300 mb-8">
                    Connect with a global network of space industry professionals, researchers, 
                    and enthusiasts. Read inspiring stories from those who've made significant 
                    contributions to space exploration.
                  </p>
                  <Button 
                    className="flex items-center gap-2 text-indigo-300 hover:text-white transition-colors"
                    variant="link"
                  >
                    LEARN MORE
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-32 px-6 border-t border-neutral-800/10">
          <div className="max-w-[1200px] mx-auto">
            <h2 className={`text-4xl font-medium mb-16 ${playfair.className}`}>
              Blog posts written by the community
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Blog Post 1 */}
              <div className="group cursor-pointer">
                <div className="glimmer-card overflow-hidden rounded-xl">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] animate-pulse z-10"></div>
                    <Image
                      src="https://i.pinimg.com/736x/f1/6b/3d/f16b3d3eb2625ff479445275446675d6.jpg"
                      alt="The Future of Space Travel"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="text-sm text-indigo-400 mb-2">Community</div>
                    <h3 className="text-xl font-bold text-white mb-2">The Future of Space Travel: Community Insights</h3>
                    <p className="text-neutral-300 text-sm line-clamp-2">
                      Our community members share their visions and predictions for the next decade of space exploration.
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-800/30">
                      <span className="text-sm text-neutral-400">Written by CosmicVoyager42</span>
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

              {/* Blog Post 2 */}
              <div className="group cursor-pointer">
                <div className="glimmer-card overflow-hidden rounded-xl">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] animate-pulse z-10"></div>
                    <Image
                      src="https://i.pinimg.com/736x/01/2a/00/012a0044115df43c762d7434b93e6b25.jpg"
                      alt="Alien Life Outside the Black Hole Discussion"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="text-sm text-indigo-400 mb-2">Community</div>
                    <h3 className="text-xl font-bold text-white mb-2">Discussing Potential Signs of Alien Life</h3>
                    <p className="text-neutral-300 text-sm line-clamp-2">
                      Expert community members analyze recent astronomical discoveries and their implications for life across the universe.
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-800/30">
                      <span className="text-sm text-neutral-400">Written by NebulaExplorer</span>
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

              {/* Blog Post 3 */}
              <div className="group cursor-pointer">
                <div className="glimmer-card overflow-hidden rounded-xl">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] animate-pulse z-10"></div>
                    <Image
                      src="https://i.pinimg.com/736x/08/50/85/08508502a426c9be2135a570d8334311.jpg"
                      alt="Space Technology and the Young Generation"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="text-sm text-indigo-400 mb-2">Community</div>
                    <h3 className="text-xl font-bold text-white mb-2">Latest Advances in Space Technology</h3>
                    <p className="text-neutral-300 text-sm line-clamp-2">
                      A deep dive into cutting-edge space technologies shaping our future exploration and generations.
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-800/30">
                      <span className="text-sm text-neutral-400">Written by StardustPioneer</span>
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

              {/* Blog Post 4 */}
              <div className="group cursor-pointer">
                <div className="glimmer-card overflow-hidden rounded-xl">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] animate-pulse z-10"></div>
                    <Image
                      src="https://i.pinimg.com/736x/5a/8b/47/5a8b472883c52504e0b42ef3dbc28446.jpg"
                      alt="Space Art"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="text-sm text-indigo-400 mb-2">Community</div>
                    <h3 className="text-xl font-bold text-white mb-2">Mental Health in Space: A Community Perspective</h3>
                    <p className="text-neutral-300 text-sm line-clamp-2">
                      Community members discuss the psychological aspects of long-term space missions.
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-800/30">
                      <span className="text-sm text-neutral-400">Written by GalacticMindscape</span>
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
      </main>

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