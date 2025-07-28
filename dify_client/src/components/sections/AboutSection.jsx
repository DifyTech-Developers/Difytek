export default function AboutSection() {
  return (
    <div className="bg-[var(--color-space-black)] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 pt-15">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-space-neon)] mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-space-text-secondary text-lg max-w-2xl mx-auto">
            Stay updated with our latest innovations, tech insights, and behind-the-scenes moments.
          </p>
        </div>

        {/* Instagram Embed Section */}
        <div className="bg-[var(--color-space-black)]/90 rounded-lg border border-[var(--color-space-neon)]/20 backdrop-blur-sm p-6 lg:p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Call to Action */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[var(--color-space-neon)] mb-3">
                  @dify_tek
                </h3>
                <p className="text-space-text-secondary leading-relaxed">
                  Get an exclusive look at our innovative tech solutions, development processes, and success stories!
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--color-space-neon)] rounded-full"></div>
                  <span className="text-space-text-secondary">Latest tech innovations & solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--color-space-neon)] rounded-full"></div>
                  <span className="text-space-text-secondary">Development insights & tips</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--color-space-neon)] rounded-full"></div>
                  <span className="text-space-text-secondary">Client success stories</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--color-space-neon)] rounded-full"></div>
                  <span className="text-space-text-secondary">Team & culture highlights</span>
                </div>
              </div>

              <a
                href="https://www.instagram.com/dify_tek?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[var(--color-space-neon)]/10 text-[var(--color-space-neon)] border border-[var(--color-space-neon)] font-semibold rounded-lg hover:bg-[var(--color-space-neon)]/20 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Follow @dify_tek
              </a>
            </div>

            {/* Right Side - Instagram Embed */}
            <div className="relative">
              <div className="bg-[var(--color-space-black)]/80 rounded-lg overflow-hidden border border-[var(--color-space-neon)]/20">
                <iframe
                  src="https://www.instagram.com/dify_tek/embed"
                  width="100%"
                  height="500"
                  className="border-none"
                  allowtransparency="true"
                  allow="encrypted-media"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statistics */}

      </div>
    </div>
  )
}
