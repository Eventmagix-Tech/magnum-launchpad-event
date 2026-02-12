import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type SessionType = "plenary" | "syis" | "society" | "scientific" | "workshop" | "social";

interface ProgramItem {
  time: string;
  title: string;
  description?: string;
  type: SessionType;
  hall?: string;
}

interface DaySchedule {
  date: string;
  dateLabel: string;
  halls: string[];
  items: ProgramItem[];
}

const sessionTypeColors: Record<SessionType, string> = {
  plenary: "bg-primary text-primary-foreground",
  syis: "bg-secondary text-secondary-foreground",
  society: "bg-primary/80 text-primary-foreground",
  scientific: "bg-accent text-accent-foreground",
  workshop: "bg-secondary/80 text-secondary-foreground",
  social: "bg-gradient-to-r from-primary/60 to-secondary/60 text-white",
};

const sessionTypeLabels: Record<SessionType, string> = {
  plenary: "Plenary",
  syis: "SYIS",
  society: "Society",
  scientific: "Scientific",
  workshop: "Workshop",
  social: "Social",
};

const programData: DaySchedule[] = [
  {
    date: "sunday",
    dateLabel: "Sunday, January 12, 2026",
    halls: ["Hall 1: Artificial Intelligence", "Hall 2: Imaging", "Hall 3: Invasive Treatments", "Hall 4: Junior Track", "Hall 5: Failing Hearts", "Hall 6: Care in Pediatric Cardiology", "Hall 7: Flash Talks Room", "Hall 8 / Belvedere Room: Oral Abstract Sessions"],
    items: [],
  },
  {
    date: "monday",
    dateLabel: "Monday, January 13, 2026",
    halls: ["Hall 1: Artificial Intelligence", "Hall 2: Imaging", "Hall 3: Invasive Treatments", "Hall 4: Junior Track", "Hall 5: Failing Hearts", "Hall 6: Care in Pediatric Cardiology", "Hall 7: Flash Talks Room", "Hall 8 / Belvedere Room: Oral Abstract Sessions"],
    items: [],
  },
  {
    date: "tuesday",
    dateLabel: "Tuesday, January 14, 2026",
    halls: ["Hall 1: Artificial Intelligence", "Hall 2: Imaging", "Hall 3: Invasive Treatments", "Hall 4: Junior Track", "Hall 5: Failing Hearts", "Hall 6: Care in Pediatric Cardiology", "Hall 7: Flash Talks Room", "Hall 8 / Belvedere Room: Oral Abstract Sessions"],
    items: [],
  },
];

const Program = () => {
  const [activeDay, setActiveDay] = useState(programData[0].date);
  const [activeHall, setActiveHall] = useState(programData[0].halls[0]);

  const currentDay = programData.find((d) => d.date === activeDay) ?? programData[0];

  const filteredItems = currentDay.items.filter(
    (item) => !item.hall || item.hall === activeHall
  );

  const handleDayChange = (day: string) => {
    setActiveDay(day);
    const newDay = programData.find((d) => d.date === day);
    if (newDay) setActiveHall(newDay.halls[0]);
  };

  return (
    <>
      <Helmet>
        <title>Program | Magnum Launch Event 2026</title>
        <meta
          name="description"
          content="View the full conference program for Magnum Launch Event 2026. Sessions, workshops, and networking across three days."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1 pt-16 md:pt-20">
          {/* Hero Banner */}
          <section className="bg-gradient-to-br from-primary via-primary/95 to-secondary py-12 md:py-16">
            <div className="section-container text-center">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                Conference Program
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Explore our three-day program of keynotes, workshops, and networking sessions.
              </p>
            </div>
          </section>

          {/* Legend */}
          <section className="py-8 bg-background border-b border-border">
            <div className="section-container">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-bold text-foreground text-sm">Legend:</span>
                {(Object.keys(sessionTypeColors) as SessionType[]).map((type) => (
                  <span
                    key={type}
                    className={cn("px-3 py-1 rounded text-sm font-medium", sessionTypeColors[type])}
                  >
                    {sessionTypeLabels[type]}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Tabbed Program */}
          <section className="py-12 md:py-16 bg-muted/30">
            <div className="section-container">
              <Tabs value={activeDay} onValueChange={handleDayChange}>
                <TabsList className="bg-transparent h-auto flex flex-wrap justify-center gap-3 mb-10">
                  {programData.map((day) => (
                    <TabsTrigger
                      key={day.date}
                      value={day.date}
                      className={cn(
                        "px-4 py-3 rounded-lg text-sm font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:bg-muted/50 data-[state=inactive]:text-primary data-[state=inactive]:hover:bg-accent/20"
                      )}
                    >
                      {day.dateLabel}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {programData.map((day) => (
                  <TabsContent key={day.date} value={day.date}>
                    {/* Hall Sub-Navigation */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                      {day.halls.map((hall) => (
                        <button
                          key={hall}
                          onClick={() => setActiveHall(hall)}
                          className={cn(
                            "px-4 py-2 rounded-lg text-sm font-medium border transition-all",
                            activeHall === hall
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-muted/50 text-primary border-accent/20 hover:bg-accent/20"
                          )}
                        >
                          {hall}
                        </button>
                      ))}
                    </div>

                    {/* Cards or Placeholder */}
                    <div className="max-w-4xl mx-auto">
                      {filteredItems.length > 0 ? (
                        <div className="space-y-4">
                          {filteredItems.map((item, idx) => (
                            <div
                              key={idx}
                              className={cn(
                                "rounded-xl p-5 shadow-md border border-accent/10 hover:shadow-lg transition-shadow",
                                sessionTypeColors[item.type]
                              )}
                            >
                              <div className="flex flex-col md:flex-row gap-3">
                                <span className="font-semibold whitespace-nowrap min-w-[160px]">
                                  {item.time}
                                </span>
                                <div className="flex-1">
                                  <p className="font-bold text-lg">{item.title}</p>
                                  {item.description && (
                                    <p className="opacity-90 text-sm mt-1">{item.description}</p>
                                  )}
                                  {item.hall && (
                                    <p className="text-xs opacity-75 mt-1">📍 {item.hall}</p>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="p-12 bg-muted/30 rounded-xl border border-accent/20 text-center">
                          <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                            {day.dateLabel} — {activeHall}
                          </h3>
                          <p className="text-muted-foreground italic">
                            To be announced soon...
                          </p>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>

              {/* Footer Note */}
              <p className="text-center text-muted-foreground text-sm mt-12">
                The detailed scientific program with all session information will be available closer to the conference date.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Program;
