const MobileAppSection = () => {
  return (
    <section id="app" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary-foreground/70 font-medium tracking-wider uppercase text-sm mb-4 block">
            Stay Connected
          </span>
          
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            TMICC Events App
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            TMICC Events is the official mobile application used during Magnum events 
            for agenda tracking, real-time updates, and interactive engagement. 
            Download now to make the most of your experience.
          </p>

          <div className="flex items-center justify-center mb-12">
            {/* Google Play Button */}
            <a
              href="https://play.google.com/store/apps/details?id=us.ver.magnumevents"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-foreground text-background px-6 py-4 rounded-xl hover:bg-foreground/90 transition-all duration-300 hover:scale-105 hover:shadow-elegant min-w-[200px]"
              aria-label="Get it on Google Play"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.83.52-1.28 1.23-.88l14.09 8.2c.71.41.71 1.36 0 1.77l-14.09 8.2c-.71.4-1.23-.05-1.23-.88zM16.45 12L5 4.5v15l11.45-7.5z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-70">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-primary-foreground/60 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Real-time updates
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Interactive agenda
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Networking features
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
