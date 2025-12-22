import { useState } from "react";

const programData = {
  "12 January": [
    { start: "14:00", end: "14:15", title: "Opening Show", highlight: false },
    { start: "14:15", end: "14:25", title: "Mustafa Özben", highlight: false },
    { start: "14:25", end: "14:40", title: "Tolay Tanrıdağlı", highlight: false },
    { start: "14:40", end: "15:10", title: "Eser Lapanta", highlight: false },
    { start: "15:10", end: "15:55", title: "Nazlı Eda Kıralı", highlight: false },
    { start: "15:55", end: "16:15", title: "Break", highlight: true },
    { start: "16:15", end: "17:05", title: "Durukan & Özgür", highlight: false },
    { start: "17:05", end: "17:35", title: "HR Session", highlight: false },
    { start: "17:35", end: "17:55", title: "Break", highlight: true },
    { start: "17:55", end: "18:55", title: "İlker Ayrık & Algida", highlight: false },
    { start: "18:55", end: "21:50", title: "Free Time & Dinner", highlight: true },
    { start: "21:50", end: "23:50", title: "Party", highlight: false },
    { start: "23:50", end: "00:50", title: "DJ & Closing", highlight: false },
  ],
  "13 January": [
    { start: "09:00", end: "09:30", title: "Magnum", highlight: false },
    { start: "09:30", end: "10:00", title: "Cornetto", highlight: false },
    { start: "10:00", end: "10:20", title: "Break", highlight: true },
    { start: "10:20", end: "11:05", title: "Kids & Snacking", highlight: false },
    { start: "11:05", end: "11:35", title: "Carte D'Or", highlight: false },
    { start: "11:35", end: "12:50", title: "Lunch Break", highlight: true },
    { start: "12:50", end: "13:30", title: "Maraş Keyif", highlight: false },
    { start: "13:30", end: "14:00", title: "Food Service", highlight: false },
    { start: "14:00", end: "14:20", title: "Break", highlight: true },
    { start: "14:20", end: "14:50", title: "İrem Sayın", highlight: false },
    { start: "14:50", end: "15:35", title: "Awards Ceremony", highlight: false },
    { start: "15:35", end: "20:00", title: "Free Time", highlight: true },
    { start: "20:00", end: "21:30", title: "Long Service Awards", highlight: false },
    { start: "21:30", end: "22:45", title: "Special Memories", highlight: false },
    { start: "22:45", end: "00:45", title: "Gala - Kenan Doğulu", highlight: false },
    { start: "00:45", end: "03:45", title: "After Party - Ozan Doğulu", highlight: false },
  ],
};

const ProgramSection = () => {
  const [activeDay, setActiveDay] = useState<keyof typeof programData>("12 January");

  return (
    <section id="program" className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            Event Program
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Three Days of Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A carefully curated agenda featuring presentations, networking, and memorable experiences.
          </p>
        </div>

        {/* Day Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {Object.keys(programData).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day as keyof typeof programData)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeDay === day
                  ? "bg-primary text-primary-foreground shadow-elegant"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[60px] md:left-[80px] top-0 bottom-0 w-px bg-border" />

            <div className="space-y-4">
              {programData[activeDay].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 md:gap-6 p-4 rounded-lg transition-all duration-300 ${
                    item.highlight
                      ? "bg-accent/10"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <div className="text-sm md:text-base font-medium text-muted-foreground w-[80px] md:w-[100px] shrink-0 text-right">
                    {item.start}
                  </div>
                  <div
                    className={`w-3 h-3 rounded-full shrink-0 z-10 ${
                      item.highlight ? "bg-accent" : "bg-primary"
                    }`}
                  />
                  <div className="flex-1">
                    <p
                      className={`font-medium ${
                        item.highlight
                          ? "text-accent-foreground/70 italic"
                          : "text-foreground"
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground hidden md:block">
                    until {item.end}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
