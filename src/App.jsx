import Card from "./components/Card";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <div className=" px-6 lg:px-24 pt-8 box-border">
        {/* Hero section */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div className="w-full grid-cols-1 ">
            <span className="font-black text-2xl lg:text-7xl font-monument flex items-center gap-2">
              Hey
              <img
                alt="smiley face"
                src="../Smile.svg"
                className="w-auto h-[32px] md:h-auto"
              ></img>{" "}
            </span>
            <span className="font-black text-2xl  lg:text-7xl font-monument flex mt-5">
              I'M NICHO
            </span>
            <div className="h-[2px] w-full bg-khaki my-7"></div>
            <div className="flex flex-col items-start md:items-center md:flex-row gap-5 font-monument font-black text-2xl lg:text-5xl">
              <img
                src="../Brutalist.svg"
                alt="brutalist"
                className="w-auto h-[32px] md:h-auto"
              ></img>
              <span>WEB DEVELOPER</span>
            </div>
            <div className="h-[2px] w-full bg-khaki my-7"></div>
            <span className="font-monument font-black text-2xl md:text-4xl">
              SKILLS
            </span>
            <div className=" mt-6 grid-cols-5 grid items-center gap-6">
              <img
                src="../skills/next-js.svg"
                className="w-auto h-[32px] md:h-auto"
              ></img>
              <img
                src="../skills/Javasript.svg"
                className="w-auto h-[32px] md:h-auto"
              ></img>
              <img
                src="../skills/html.svg"
                className="w-auto h-[32px] md:h-auto"
              ></img>
              <img
                src="../skills/tailwindcss.svg"
                className="w-auto h-[32px] md:h-auto"
              ></img>
              <img
                src="../skills/react.svg"
                className="w-auto h-[32px] md:h-auto"
              ></img>
              <img
                src="../skills/CSS.svg"
                className="w-auto h-[32px] md:h-auto"
              ></img>
            </div>
          </div>
          <img
            alt="my foto"
            src="../myphoto.png"
            className=" border-khaki border-[2px]"
          ></img>
        </div>
        {/* hero section end */}

        {/* Portfolio */}
        <div className="w-full mt-16 lg:mt-32 py-10 lg:py-20 border-t-[2px] border-khaki">
          <h1 className="font-black font-monument text-black text-2xl lg:text-7xl mb-20">
            Project
          </h1>
          {/* project card */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
            <Link to={"/orijin"}>
              <Card
                src={"../orijin.png"}
                alt={"orijin"}
                name={"orijin"}
                desc="Company Profile"
              />
            </Link>

            <Link to={"/colony"}>
              <Card
                src={"../colony.png"}
                alt={"colony"}
                name={"colony"}
                desc="Company Profile"
              />
            </Link>

            <Link to={"/dashboard"}>
              <Card
                src={"../dashboard.png"}
                alt={"dashboard"}
                name={"dashboard"}
                desc="dashboard"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
