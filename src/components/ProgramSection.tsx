import { useEffect, useState } from "react";
import { supabase, type EventSchedule } from "@/lib/supabase";
import { Skeleton } from "@/components/ui/skeleton";

const ProgramSection = () => {
  const [events, setEvents] = useState<EventSchedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeDay, setActiveDay] = useState<string>("");

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const { data, error } = await supabase
          .from("event_schedule")
          .select("*")
          .order("time_range", { ascending: true });

        if (error) throw error;

        const rows = data ?? [];
        setEvents(rows);

        // Set first date as default active tab
        if (rows.length > 0) {
          const uniqueDates = [...new Set(rows.map((r) => r.event_date))];
          setActiveDay(uniqueDates[0]);
        }
      } catch (err: any) {
        console.error("Error fetching event schedule:", err);
        setError(err.message ?? "Failed to load schedule.");
      } finally {
        setLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  const uniqueDates = [...new Set(events.map((e) => e.event_date))];
  const filteredEvents = events.filter((e) => e.event_date === activeDay);

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

        {error && (
          <p className="text-center text-destructive mb-8">{error}</p>
        )}

        {loading ? (
          <div className="max-w-3xl mx-auto space-y-4">
            {/* Tab skeletons */}
            <div className="flex justify-center gap-4 mb-12">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-12 w-32 rounded-full" />
              ))}
            </div>
            {/* Row skeletons */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center gap-4 md:gap-6 p-4">
                <Skeleton className="h-5 w-[80px] md:w-[100px]" />
                <Skeleton className="h-3 w-3 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : events.length === 0 && !error ? (
          <p className="text-center text-muted-foreground">
            No schedule available yet. Check back soon!
          </p>
        ) : (
          <>
            {/* Day Tabs */}
            <div className="flex justify-center gap-4 mb-12">
              {uniqueDates.map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
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
                  {filteredEvents.map((item) => (
                    <div
                      key={item.id}
                      className={`flex items-center gap-4 md:gap-6 p-4 rounded-lg transition-all duration-300 ${
                        item.is_break
                          ? "bg-accent/10"
                          : "hover:bg-muted/50"
                      }`}
                    >
                      <div className="text-sm md:text-base font-medium text-muted-foreground w-[80px] md:w-[100px] shrink-0 text-right">
                        {item.time_range}
                      </div>
                      <div
                        className={`w-3 h-3 rounded-full shrink-0 z-10 ${
                          item.is_break ? "bg-accent" : "bg-primary"
                        }`}
                      />
                      <div className="flex-1">
                        <p
                          className={`font-medium ${
                            item.is_break
                              ? "text-accent-foreground/70 italic"
                              : "text-foreground"
                          }`}
                        >
                          {item.title}
                        </p>
                        {item.speaker && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.speaker}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProgramSection;
