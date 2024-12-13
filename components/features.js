import {
    AtSymbolIcon,
    LightningBoltIcon,
    LockClosedIcon,
    ViewGridAddIcon,
    StarIcon,
    ShoppingBagIcon,
    AcademicCapIcon,
    ClipboardCheckIcon,
    BookOpenIcon,
  } from "@heroicons/react/solid";
  import FeaturesCard from "../components/featurescard";
  
  const Features = () => {
    let iconSymbol = <AtSymbolIcon className="w-20 text-white bg-[#56BBD0] p-4 rounded-full" />;
    let iconLight = <LightningBoltIcon className="w-20 text-white bg-[#FBCE82] p-4 rounded-full" />;
    let iconLock = <LockClosedIcon className="w-20 text-white bg-[#91AFE3] p-4 rounded-full" />;
    let iconView = <ViewGridAddIcon className="w-20 text-white bg-[#90A7BB] p-4 rounded-full" />;
    let iconStar = <StarIcon className="w-20 text-white bg-[#BFA1F8] p-4 rounded-full" />;
    let iconShop = <ShoppingBagIcon className="w-20 text-white bg-[#81DC9A] p-4 rounded-full" />;
    let iconAcademics = <AcademicCapIcon className="w-20 text-white bg-[#6C63FF] p-4 rounded-full" />;
    let iconMockTests = <ClipboardCheckIcon className="w-20 text-white bg-[#F95738] p-4 rounded-full" />;
    let iconStudyMaterial = <BookOpenIcon className="w-20 text-white bg-[#FFC75F] p-4 rounded-full" />;
  
    return (
      <div id="solutions" className="pt-[10px] xl:w-[1250px]  mx-auto py-[100px] ">
        <p className="text-center text-[#00A99D] text-lg font-medium">Ideal solutions for you</p>
        <h2 className="text-center mt-3 text-[#0F2137] text-2xl font-extrabold font-Arvo">Go beyond ultimate features</h2>
        <div className="flex flex-wrap justify-center my-16">
     
          <FeaturesCard
            icon={iconView}
            title="Multiple Options"
            decrption="Access a wide range of preparation tools, from test series to study plans."
          />
          <FeaturesCard
            icon={iconStar}
            title="Custom Support"
            decrption="Get personalized guidance to address your unique preparation needs."
          />
          <FeaturesCard
            icon={iconShop}
            title="Integrated Resources"
            decrption="Benefit from integrated resources including study materials and expert lectures."
          />
          {/* Civil Services Features */}
          <FeaturesCard
            icon={iconAcademics}
            title="Expert Mentorship"
            decrption="Guidance from experienced mentors to help you excel in civil services exams."
          />
          <FeaturesCard
            icon={iconMockTests}
            title="Mock Test Series"
            decrption="Comprehensive mock tests to prepare you for real exam conditions."
          />
          <FeaturesCard
            icon={iconStudyMaterial}
            title="Exclusive Study Material"
            decrption="Curated content and resources tailored for civil services preparation."
          />
        </div>
      </div>
    );
  };
  
  export default Features;
  