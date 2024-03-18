import { Link } from "react-router-dom";
export default function Orijin() {
  return (
    <>
      <div className=" px-6 lg:px-24 py-8 box-border">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-black font-monument text-black text-2xl lg:text-7xl">
            ORIJIN
          </h1>
          <Link
            to={"/"}
            className="bg-black text-cream rounded-full p-2 lg:p-4 flex items-center justify-center font-monument font-black text-lg lg:text-2xl"
          >
            BACK
          </Link>
        </div>
        <img
          src={"../../orijin.png"}
          alt="orijin"
          className="w-full border-[2px] border-khaki mt-5"
        />
        <div className=" mt-10 font-monument grid grid-cols-1 lg:grid-cols-2">
          {/* bagian kiri */}
          <div className="grid grid-cols-1 w-full pb-10 lg:pb-0 border-b-[2px] lg:border-b-0 lg:border-r-[2px] border-khaki">
            <h1 className="font-bold text-3xl uppercase">Description</h1>
            <span className="mt-3 font-roboto text-2xl text-black/50">
              This is a company profile that i made during my internship period
              in 2023. I was asked to make this website for a company that give
              service for interior design. My job during this project is to
              translate the design into code. I’m using Nextjs and tailwind css
              for this project.
            </span>

            <h1 className="font-black text-3xl uppercase mt-10">challenge</h1>
            <span className="mt-3 font-roboto text-2xl text-black/50">
              The challenge that i got during this project is in the styling
              session because there is a need to use absolute and relative
              positioning for this website and there is some overlapping image.
              I overcome this challenge by asking my mentor and also search the
              google how to do it and i can finish this project by using
              negative margin.
            </span>
          </div>
          {/* bagian kanan */}
          <div className="flex flex-col gap-6 w-full mt-10 lg:mt-0 lg:pl-4">
            <span className="font-bold font-monument text-3xl">
              Role :{" "}
              <span className=" font-normal text-2xl text-black/50">
                Front end Developer
              </span>
            </span>
            <span className="font-bold font-monument text-3xl">
              Year :{" "}
              <span className=" font-normal text-2xl text-black/50">2023</span>
            </span>
            <div className="flex flex-col gap-3">
              <span className="font-bold font-monument text-3xl">Tools : </span>
              <div className="flex flex-col gap-2">
                <span className=" font-normal text-2xl text-black/50 uppercase">
                  Next JS
                </span>
                <span className=" font-normal text-2xl text-black/50 uppercase">
                  Tailwind CSS
                </span>
              </div>
            </div>
            {/* visit website */}
            <a
              href="https://orijin.vercel.app/"
              target="_blank"
              className="bg-black text-cream w-1/4 rounded-full p-4 flex items-center  justify-center font-monument font-black text-2xl"
            >
              VISIT
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
