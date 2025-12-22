const LocationSection = () => {
  return (
    <section id="location" className="py-24 bg-magnum-cream">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            Location
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Where & When
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden shadow-elegant aspect-[4/3]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.8877!2d31.0569!3d36.8597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39a1f3a7b8b8d%3A0x8e6d4e9f1c8b8b8d!2sRegnum%20Carya%20Golf%20%26%20Spa%20Resort!5e0!3m2!1sen!2str!4v1703256000000!5m2!1sen!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Regnum Carya Golf & Spa Resort Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Location details */}
          <div className="space-y-8">
            <div className="card-elegant p-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Venue</h3>
                  <p className="text-muted-foreground">
                    Regnum Carya Golf & Spa Resort<br />
                    Belek, Antalya, Türkiye
                  </p>
                  <a 
                    href="https://www.regnumhotels.com/tr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline mt-2 text-sm font-medium"
                  >
                    Visit Hotel Website
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="card-elegant p-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Dates</h3>
                  <p className="text-muted-foreground">
                    12–14 January 2026<br />
                    Three full days of programming
                  </p>
                </div>
              </div>
            </div>

            <div className="card-elegant p-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">World-Class Venue</h3>
                  <p className="text-muted-foreground">
                    Home of G20 Summit 2015<br />
                    5-star luxury resort experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
