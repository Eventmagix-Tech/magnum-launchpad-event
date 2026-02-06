import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramSection from "@/components/ProgramSection";
import LocationSection from "@/components/LocationSection";
import LatestNewsSection from "@/components/LatestNewsSection";
import MobileAppSection from "@/components/MobileAppSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Magnum Launch Event 2026 | 12–14 January, Istanbul</title>
        <meta
          name="description"
          content="Join us for the exclusive Magnum Launch Event 2026. Three days of innovation, brand experiences, and networking in Istanbul. 12–14 January 2026."
        />
        <meta
          name="keywords"
          content="Magnum, Launch Event, 2026, Istanbul, Ice Cream, TMICC, Brand Launch, Corporate Event"
        />
        <meta property="og:title" content="Magnum Launch Event 2026" />
        <meta
          property="og:description"
          content="Experience innovation. Celebrate excellence. Shape the future. Join us 12–14 January 2026."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://magnum-launch-2026.com" />
      </Helmet>

      <main className="min-h-screen">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProgramSection />
        <LocationSection />
        <LatestNewsSection />
        <MobileAppSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
