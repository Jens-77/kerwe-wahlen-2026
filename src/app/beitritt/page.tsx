export default function Beitritt() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-stone-900 mb-4">Mitglied werden</h1>
      <p className="text-lg text-stone-600 mb-8">Wir freuen uns immer über neue Gesichter im Kerweverein. Werde Teil der Community!</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8 border hover:border-red-500 transition-all cursor-pointer group">
            <h3 className="text-xl font-bold text-stone-800 mb-4">Beitrittserklärung PDF</h3>
            <p className="text-stone-500 mb-6">Fürs klassische Ausdrucken und Unterschreiben per Hand.</p>
            <a href="https://kerwe-wahlen.de/wp-content/uploads/2018/06/Beitrittserkl%C3%A4rungKerweverein.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-900 text-white py-3 px-6 rounded-lg font-medium group-hover:bg-red-600 transition-colors">PDF herunterladen</a>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 border hover:border-orange-500 transition-all cursor-pointer group">
            <h3 className="text-xl font-bold text-stone-800 mb-4">Beitrittserklärung Word</h3>
            <p className="text-stone-500 mb-6">Zum digitalen Ausfüllen bequem am Rechner.</p>
            <a href="https://kerwe-wahlen.de/wp-content/uploads/2018/06/Beitrittserkl%C3%A4rungKerweverein.doc" target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-900 text-white py-3 px-6 rounded-lg font-medium group-hover:bg-orange-500 transition-colors">Word-Datei laden</a>
        </div>
      </div>
    </div>
  )
}
