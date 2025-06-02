import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate(); const navigation = {
    company: [
      { name: 'About', href: '#about', isExternal: false },
      { name: 'Projects', href: '#projects', isExternal: false },
      { name: 'Privacy Policy', href: '/privacy', isExternal: false },
      { name: 'Terms', href: '/terms', isExternal: false },
    ],
    social: [
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/difytek/',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        ),
      },
      {
        name: 'GitHub',
        href: 'https://github.com/difytek',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        ),
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/dify_tek?igsh=djJzZ3o1bTB3OXJ6&utm_source=ig_contact_invite',
        icon: (props) => (
          // SVG for Instagram icon
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-.88a.88.88 0 1 1 0 1.76.88.88 0 0 1 0-1.76z" />
          </svg>

        ),
      },
    ],
  }; const handleClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        if (location.pathname !== '/') {
          navigate('/');
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (!href.startsWith('http')) {
      navigate(href);
    }
  };

  return (<footer className="bg-space-black/50 border-t border-white/10 relative z-10">
    <div className="container mx-auto px-4 md:px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4">
          <a
            href="/"
            onClick={(e) => handleClick(e, '/')}
            className="flex items-center gap-3 group"
          >
            <img
              src="/Logo.png"
              alt="DifyTek Logo"
              className="h-12 w-auto filter brightness-200 group-hover:brightness-150 transition-all duration-300"
            />
            <h3 className="text-space-neon text-2xl font-bold group-hover:text-glow transition-all duration-300">
              DifyTek
            </h3>
          </a>
          <p className="text-space-text-secondary">
            Building tomorrow's technology today.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-space-text-primary font-semibold mb-4 cursor-pointer">Company</h3>
          <ul className="space-y-3">
            {navigation.company.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-space-text-secondary hover:text-space-neon transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-space-text-primary font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-space-text-secondary">
            <li>
              <a
                href="mailto:contact@difytek.com"
                className="hover:text-space-neon transition-colors duration-300"
              >
                difytek@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+1-555-123-4567"
                className="hover:text-space-neon transition-colors duration-300"
              >
                +91 9301579493
              </a>
            </li>
            <li>497001 BR Ambikapur<br />Surguja ,CG</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-space-text-primary font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-space-text-secondary hover:text-space-neon transition-colors duration-300"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-8 border-t border-white/10">
        <p className="text-center text-space-text-secondary text-sm">
          © {new Date().getFullYear()} DifyTek. All rights reserved. |{' '}
          <a
            href="/privacy"
            onClick={(e) => handleClick(e, '/privacy')}
            className="hover:text-space-neon cursor-pointer"
          >
            Privacy Policy
          </a> |{' '}
          <a
            href="/terms"
            onClick={(e) => handleClick(e, '/terms')}
            className="hover:text-space-neon cursor-pointer"
          >
            Terms & Conditions
          </a>
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
