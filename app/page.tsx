import IntroSide from "./ui/home/IntroSection";
import ProfileSide from "./ui/home/ProfileSection";
import profileData from "../data/profileData.json"

export default function Home() {
  return (

        <div className="flex justify-center md:pl-20 pt-10 px-4">
          <div className={`flex flex-col pt-4 md:flex-row`}>
            <div className={`md:w-2/5 order-2 md:order-1`}>
              <IntroSide profile={profileData} />
            </div>
            <div className={`md:w-3/5 md:pl-40 order-1 md:order-2`}>
              <ProfileSide />
            </div>
          </div>
        </div>
);
}
