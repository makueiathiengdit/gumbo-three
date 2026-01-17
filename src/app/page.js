import HeroSection from "./components/hero-section";
import QuickStats from "./components/quick-stats";
import AdmissionsTimeline from "./components/admission";
import CallToAction from "./components/cta";
import Events from "./components/events";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <QuickStats />
      <AdmissionsTimeline />
      <CallToAction />
      <Events />
    </div>
  );
}
