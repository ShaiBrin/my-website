import IntroSide from "./ui/home/IntroSection";
import ProfileSide from "./ui/home/ProfileSection";
import profileData from "../data/profileData.json"
import AnimatedPage from "./ui/animation";
import ResponsiveStack from "./ui/home/TechStack";
export default function Home() {
  return (
    <AnimatedPage>
    <div className="flex md:pl-20 pt-10 px-4">
      <div className="flex-row md:flex-row">
        <div className={`flex flex-col  md:flex-row pb-10`}>
          <div className={`md:w-2/5 order-2 md:order-1`}>
            <IntroSide profile={profileData} />
          </div>
          <div className={`md:w-3/5 md:pl-40 order-1 md:order-2 sm:pb-10`}>
            <ProfileSide />
          </div>
        </div>
        <div>
          <ResponsiveStack/>
        </div>
      </div>
    </div>
    </AnimatedPage>
);
}
