import { Link } from "react-router-dom";
export default function Colony() {
  return (
    <>
      <div className=" px-6 lg:px-24 py-8 box-border">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-black font-monument text-black text-2xl lg:text-7xl">
            COLONY
          </h1>
          <Link
            to={"/"}
            className="bg-black text-cream rounded-full p-2 lg:p-4 flex items-center justify-center font-monument font-black text-lg lg:text-2xl"
          >
            BACK
          </Link>
        </div>
        <img
          src={"../../colony.png"}
          alt="colony"
          className="w-full border-[2px] border-khaki mt-5"
        />
        <div className=" mt-10 font-monument grid grid-cols-1 lg:grid-cols-2">
          {/* bagian kiri */}
          <div className="grid grid-cols-1 w-full pb-10 lg:pb-0 border-b-[2px] lg:border-b-0 lg:border-r-[2px] border-khaki">
            <h1 className="font-bold text-3xl uppercase">Description</h1>
            <span className="mt-3 font-roboto text-2xl text-black/50">
              This is the first project that i get during my internship program.
              I was trusted to make a company profile website for colony, a
              digital product that are going to be make. I have to design and
              code this web. This website i code also responsive so it can be
              accessed from any platform.
            </span>

            <h1 className="font-black text-3xl uppercase mt-10">challenge</h1>
            <span className="mt-3 font-roboto text-2xl text-black/50">
              When i make this website the challenge that i found is learning
              the new tools like nextjs and also tailwind css. because this is
              the first time that i use a framework and a library to make a
              website. I can overcome this challenge by reading the
              documentation and asking my mentor so i finally can finish this
              project
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
              href="https://colony-omega.vercel.app/"
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
