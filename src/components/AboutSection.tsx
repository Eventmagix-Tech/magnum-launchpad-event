const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-magnum-cream">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            About the Event
          </span>
          
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
            An Exclusive Experience
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
            The Magnum Launch Event brings together key stakeholders for an exclusive 
            multi-day experience, introducing Magnum's latest innovations and brand vision. 
            Join us as we celebrate creativity, craftsmanship, and the art of indulgence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-elegant p-8 transition-all duration-300 hover:shadow-elegant hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">Innovation</h3>
              <p className="text-muted-foreground">Discover groundbreaking products and visionary brand strategies.</p>
            </div>

            <div className="card-elegant p-8 transition-all duration-300 hover:shadow-elegant hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">Connection</h3>
              <p className="text-muted-foreground">Network with industry leaders and brand partners.</p>
            </div>

            <div className="card-elegant p-8 transition-all duration-300 hover:shadow-elegant hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">Experience</h3>
              <p className="text-muted-foreground">Immerse yourself in unforgettable brand moments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
