import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 font-sans selection:bg-orange-300 selection:text-stone-900">
      
      {/* Hero Section with Image & Gradient Overlay */}
      <header className="relative py-24 md:py-32 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          {/* Fallback image from Unsplash for Party/Festival vibe */}
          <img 
            src="https://images.unsplash.com/photo-1533174000228-4a1dd4f4339e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Festival Background" 
            className="w-full h-full object-cover opacity-40 blur-[2px]"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-red-600/90 via-orange-500/80 to-yellow-500/90 mix-blend-multiply"></div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto transform transition-all duration-700 hover:scale-105">
          <div className="inline-block mb-4 px-6 py-2 rounded-full border-2 border-white/30 backdrop-blur-sm bg-white/10 text-white font-semibold tracking-wider text-sm uppercase">
            Das Highlight des Jahres
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6 drop-shadow-xl">
            Wählemer Kerwe <span className="text-yellow-300">2026</span>
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-white/95 drop-shadow-md">
            04. September – 07. September
          </p>
        </div>
        
        {/* Wavy bottom divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.98,130.12,203.25,115.15,243.61,106.77,283.46,84.91,321.39,56.44Z" className="fill-stone-100"></path>
          </svg>
        </div>
      </header>
      
      <main className="max-w-5xl mx-auto px-4 py-16 -mt-10 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Freitag */}
          <section className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-stone-100">
            <div className="h-2 w-full bg-gradient-to-r from-red-600 to-red-400"></div>
            <div className="p-8">
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 mb-6 flex items-center gap-3">
                <span className="text-red-500 text-4xl group-hover:rotate-12 transition-transform">🍻</span> Freitag, 05.09.
              </h2>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-red-100 group-hover:border-red-300 transition-colors">
                  <div className="absolute w-3 h-3 bg-red-500 rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                  <span className="block font-extrabold text-red-500 mb-1">16:00 Uhr</span>
                  <span className="text-stone-700 font-medium">Ausschellen der Kerwe durch die Kerwejugend</span>
                </div>
                <div className="relative pl-6 border-l-2 border-red-100 group-hover:border-red-300 transition-colors">
                  <div className="absolute w-3 h-3 bg-red-500 rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                  <span className="block font-extrabold text-red-500 mb-1">20:30 Uhr</span>
                  <span className="text-stone-700 font-medium">Fassbieranstich & 360-Grad-Aperol-Bar<br/>Schlagerhits & Partybeats: <a href="http://www.rico-bravo.de" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 underline decoration-red-200 underline-offset-4 font-bold">Rico Bravo & Band</a> meets <a href="https://www.instagram.com/deejayminimi/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 underline decoration-red-200 underline-offset-4 font-bold">DJ Minimi</a></span>
                </div>
              </div>
            </div>
          </section>

          {/* Samstag */}
          <section className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-stone-100">
            <div className="h-2 w-full bg-gradient-to-r from-orange-500 to-amber-400"></div>
            <div className="p-8">
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400 mb-6 flex items-center gap-3">
                <span className="text-orange-500 text-4xl group-hover:rotate-12 transition-transform">🎪</span> Samstag, 06.09.
              </h2>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-orange-100 group-hover:border-orange-300 transition-colors">
                  <div className="absolute w-3 h-3 bg-orange-500 rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                  <span className="block font-extrabold text-orange-500 mb-1">ab 13:00 Uhr</span>
                  <span className="text-stone-700 font-medium">Zeltbetrieb & Flohmarkt im Kerwezelt (bis 16:00)</span>
                </div>
                <div className="relative pl-6 border-l-2 border-orange-100 group-hover:border-orange-300 transition-colors">
                  <div className="absolute w-3 h-3 bg-orange-500 rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                  <span className="block font-extrabold text-orange-500 mb-1">15:00 Uhr</span>
                  <span className="text-stone-700 font-medium">Große Kinderolympiade</span>
                </div>
                <div className="relative pl-6 border-l-2 border-orange-100 group-hover:border-orange-300 transition-colors">
                  <div className="absolute w-3 h-3 bg-orange-500 rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                  <span className="block font-extrabold text-orange-500 mb-1">21:00 Uhr</span>
                  <span className="text-stone-700 font-medium">Party pur!</span>
                </div>
              </div>
            </div>
          </section>

          {/* Sonntag */}
          <section className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-stone-100">
            <div className="h-2 w-full bg-gradient-to-r from-yellow-400 to-yellow-300"></div>
            <div className="p-8">
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400 mb-6 flex items-center gap-3">
                <span className="text-yellow-500 text-4xl group-hover:rotate-12 transition-transform">🎷</span> Sonntag, 07.09.
              </h2>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-yellow-100 group-hover:border-yellow-300 transition-colors">
                  <div className="absolute w-3 h-3 bg-yellow-400 rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                  <span className="block font-extrabold text-yellow-500 mb-1">11:00 Uhr</span>
                  <span className="text-stone-700 font-medium">Kerwegottesdienst mit der Blaskapelle Schönmattenwag und MGV Wallonia im Festzelt, anschließend Mittagessen</span>
                </div>
                <div className="relative pl-6 border-l-2 border-yellow-100 group-hover:border-yellow-300 transition-colors">
                  <div className="absolute w-3 h-3 bg-yellow-400 rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                  <span className="block font-extrabold text-yellow-500 mb-1">16:00 Uhr</span>
                  <span className="text-stone-700 font-medium">Kerweredd und Unterhaltung mit <a href="http://www.die-singles.org" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 underline decoration-yellow-200 underline-offset-4 font-bold">„Die Singles“</a></span>
                </div>
                <div className="relative pl-6 border-l-2 border-yellow-100 group-hover:border-yellow-300 transition-colors">
                  <div className="absolute w-3 h-3 bg-yellow-400 rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                  <span className="block font-extrabold text-yellow-500 mb-1">Im Anschluss</span>
                  <span className="text-stone-700 font-medium">Bunter Abend der Kerwejugend und der Ortsvereine mit Gewinnspiel und Krönung des neuen Kerwepaars</span>
                </div>
              </div>
            </div>
          </section>

          {/* Montag */}
          <section className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-stone-100">
            <div className="h-2 w-full bg-gradient-to-r from-orange-600 to-red-600"></div>
            <div className="p-8">
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-6 flex items-center gap-3">
                <span className="text-red-500 text-4xl group-hover:rotate-12 transition-transform">🦆</span> Montag, 08.09.
              </h2>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-orange-100 group-hover:border-orange-300 transition-colors">
                  <div className="absolute w-3 h-3 bg-orange-600 rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                  <span className="block font-extrabold text-orange-600 mb-1">10:00 Uhr</span>
                  <span className="text-stone-700 font-medium">Freibier-Frühschoppen mit Frühstück, Mittagessen, Gaudispielen und Entenrennen auf der Ulfenbach.<br/>Stimmungsmusik mit <a href="http://www.die-singles.org" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-red-600 underline decoration-orange-200 underline-offset-4 font-bold">„Die Singles“</a></span>
                </div>
                <div className="relative pl-6 border-l-2 border-orange-100 group-hover:border-orange-300 transition-colors">
                  <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                  <span className="block font-extrabold text-red-600 mb-1">18:00 Uhr</span>
                  <span className="text-stone-700 font-medium">Verabschiedung der Kerwe durch den Kerweparrer</span>
                </div>
              </div>
            </div>
          </section>
          
        </div>
      </main>
    </div>
  );
}
