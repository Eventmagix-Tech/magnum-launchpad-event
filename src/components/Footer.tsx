import verusLogo from "@/assets/verus-logo.png";

const Footer = () => {
  return (
    <footer className="bg-footer py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-footer-foreground/60 text-sm">
            © 2026 Magnum Launch Event.
          </div>

          <a 
            href="https://verus.group/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-footer-foreground/60 text-sm hover:text-footer-foreground transition-colors"
          >
            <span>Powered by</span>
            <img
              src={verusLogo}
              alt="Verus Group Logo"
              className="h-8 object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
