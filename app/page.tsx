import AnnouncementPage from "@/components/events";
import SkUniversityFooter from "@/components/fotter";
import Hero from "@/components/hero";
import AboutPage from "@/components/history";
import Joinmsku from "@/components/joinsku";
import Learning from "@/components/learning";
import Navbar from "@/components/Navbar";
import OnlinePortal from "@/components/onlinePortal";
import LeadershipSection from "@/components/team";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
       {/* <AboutPage/> */}
       <AnnouncementPage/>
       <LeadershipSection/>
       <Learning/>
       <OnlinePortal/>
       <Joinmsku/>
       <SkUniversityFooter/>
    </div>
 
  
  );
}
