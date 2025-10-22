import "../assets/css/Home.css";

import Slider from "../components/Slider"; 
import CommunityNotice from "../components/CommunityNotice";
import FeatureSection from '../components/FeatureSection';
import CardSection from "../components/CardSection";
import WorkSection from "../components/WorkSection";
import LatestNewsSection from "../components/LatestNewsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer"; 

export default function Home() {
  return (
    <div className="home-container pb-0">
      <Slider />
      <CommunityNotice />
      <FeatureSection />
      <CardSection />
      <WorkSection />
      <LatestNewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
