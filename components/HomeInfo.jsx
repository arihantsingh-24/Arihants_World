import Link from "next/link";

const InfoBox = ({ text, link = "#", btnText }) => (
  <div
  className="info-box flex items-center min-w-100 bg-[#f5e1c0]/10 
  text-[#4A3F35] transform hover:scale-105 transition-all duration-300 
  rounded-lg shadow-lg backdrop-blur-md"
  >
    <p className="font-serif text-lg text-[#4A3F35] font-bold sm:text-xl text-center drop-shadow-md">
      {text}
    </p>

    <Link
      href={link}
      className="bg-[#8B5A2B] text-[#FFF8DC] px-5 py-2 flex items-center rounded-full 
        hover:bg-[#A67C52] transition-all duration-300 shadow-md"
    >
      {btnText}
    </Link>
  </div>
);

const renderContent = {
  1: (
    <div
      className="info-box flex flex-col items-center gap-5 p-4 bg-[#f5e1c0]/10 
     text-[#4A3F35] transform hover:scale-105 transition-all duration-300 
     rounded-lg shadow-lg backdrop-blur-md"
    >
      <p className="font-serif text-lg sm:text-xl font-semibold text-center text-[#4A3F35] drop-shadow-xl">
        Hi, I am <span className="text-[#8B5A2B]">Arihant</span> 👋
        <br />
        Loves building cool apps and always exploring new tech.
      </p>
    </div>
  ),
  2: (
    <InfoBox text={"Always learning"} link={"/about"} btnText={"learn more"} />
  ),
  3: (
    <InfoBox
      text={
        "Worked on multiple projects over the year.Curious about work done?"
      }
      link={"/projects"}
      btnText={"Projects"}
    />
  ),
  4: (
    <InfoBox
      text={
        "Need a project done or looking for a dev? I'm just few clicks away"
      }
      link={"/contact"}
      btnText={"Contact me"}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
