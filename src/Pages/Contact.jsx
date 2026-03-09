// src/Pages/Contact.jsx
function Contact() {
  return (
    <div className="min-h-screen p-10 bg-gray-900 text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Contactez-moi</h1>

      {/* Coordonnées */}
      <div className="flex flex-col gap-3 mb-6 text-center">
        <p>Email: 
          <a href="mailto:rokhayataba@gmail.com" className="underline text-blue-400 ml-1">
            rokhayataba@gmail.com
          </a>
        </p>
        <p>Snapchat: <span className="text-blue-400">yattabvby</span></p>
        <p>Instagram: <span className="text-pink-400">p.r.i.n.c.e.s.s.e3</span></p>
        <p>Téléphone: <span className="text-green-400">771312344</span></p>
      </div>

      {/* Formulaire de contact */}
      <form className="flex flex-col gap-4 w-full max-w-md">
        <input type="text" placeholder="Nom" className="p-2 rounded border border-gray-700 bg-gray-800 text-white" />
        <input type="email" placeholder="Email" className="p-2 rounded border border-gray-700 bg-gray-800 text-white" />
        <textarea placeholder="Message" className="p-2 rounded border border-gray-700 bg-gray-800 text-white"></textarea>
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;