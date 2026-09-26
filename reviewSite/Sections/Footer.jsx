function Footer() {
  return (
    <footer className="bg-[#020617] text-white px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">African Business Directory</h2>

          <p className="mt-3 text-gray-400">
            Discover African businesses, build visibility, and build trust.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold mb-4">Explore</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Find Businesses</li>
            <li>Categories</li>
            <li>Reviews</li>
          </ul>
        </div>

        {/* For Businesses */}
        <div>
          <h3 className="font-semibold mb-4">For Businesses</h3>

          <ul className="space-y-2 text-gray-400">
            <li>List Your Business</li>
            <li>Manage Your Business</li>
            <li>Business Dashboard</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>

          <ul className="space-y-2 text-gray-400">
            <li>About Us</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-400">
        <p>© 2026 African Business Directory. All rights reserved.</p>

        <div className="flex gap-6">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
