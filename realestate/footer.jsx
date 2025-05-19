export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8 px-4 mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Listings</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><a href="/properties">Browse Properties</a></li>
              <li><a href="/favorites">Saved Listings</a></li>
              <li><a href="/schedule">Schedule Visit</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400">Twitter</a>
              <a href="#" className="hover:text-blue-600">Facebook</a>
              <a href="#" className="hover:text-pink-500">Instagram</a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400 mt-8">
          © {new Date().getFullYear()} HomeFinder. All rights reserved.
        </div>
      </footer>
    );
  }
