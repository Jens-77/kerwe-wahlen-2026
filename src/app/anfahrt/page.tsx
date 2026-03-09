export default function Anfahrt() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-stone-900 mb-8">Anfahrt & Location</h1>
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-stone-200">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Hier steigt die Party:</h2>
        <p className="text-lg font-medium text-stone-700 mb-4 flex items-center gap-2">
           📍 Nibelungenstraße 33a, Wahlen
        </p>
        <p className="text-stone-600">
          Unser Festzelt ist leicht zu finden. Klicke auf den Button unten, um dir direkt die Route in Google Maps anzeigen zu lassen.
        </p>
        <a 
          href="https://www.google.com/maps/dir//Nibelungenstra%C3%9Fe+33a,+69483+Wald-Michelbach" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-6 inline-flex uppercase tracking-widest text-sm bg-red-600 text-white font-semibold py-4 px-8 rounded-full hover:bg-orange-500 transition-colors"
        >
          Google Maps öffnen
        </a>
      </div>
    </div>
  )
}
