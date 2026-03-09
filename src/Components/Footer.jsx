function Footer() {
  return (
    <footer className="bg-black text-white p-6 mt-10">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">

        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Rokhayata Bâ Tous droits réservés.
        </p>

        <div className="flex gap-4">

          <a
            href="https://Gmail.com/"
            className="hover:text-gray-400"
          >
            Email
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Twitter
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;