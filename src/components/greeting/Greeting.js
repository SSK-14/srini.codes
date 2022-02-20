import { Player } from "@lottiefiles/react-lottie-player";

export default function Greeting() {
  return (
    <div className="relative mx-10vw">
      <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl lg: mb-24 h-auto pt-24 lg:min-h-[40rem] lg:pb-12 lg:mb-64">
        <div className="col-span-full mb-12 lg:mb-0 flex items-center justify-center lg:col-span-9 lg:col-start-8 lg:-mt-24 lg:-mr-5vw lg:px-0">
          <img
            src={new URL("../../assets/images/figma.png", import.meta.url).href}
            className="h-auto w-full object-contain max-h-75vh"
          />
        </div>
        <div className="col-span-full pt-6 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-7">
          <div className="flex flex-auto flex-col text-white p-5">
            <div>
              <h1 className="leading-tight font-bold text-3xl md:text-5xl font-lora text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-red-300 to-yellow-200">
                {" I'm Srini "}
                <span className="inline-flex">
                  <Player
                    autoplay
                    loop
                    src="https://assets3.lottiefiles.com/packages/lf20_6niurjte.json"
                    style={{ height: "50px", width: "50px" }}
                  />
                </span>
              </h1>
              <p className="leading-tight text-3xl md:text-4xl pt-4 font-lora">
                Helping people build & ship high quality software 🚀
              </p>
            </div>
            <div className="inline-flex pt-9 items-center">
              <a href="https://github.com/SrinivasanTarget" className="pr-5">
                <Player
                  autoplay
                  loop
                  src="https://assets7.lottiefiles.com/packages/lf20_dK9q4K.json"
                  style={{ height: "50px", width: "50px" }}
                />
              </a>
              <a href="https://twitter.com/srinivasanskr" className="pr-5">
                <Player
                  autoplay
                  loop
                  src="https://assets4.lottiefiles.com/packages/lf20_hdy0htc2.json"
                  style={{ height: "50px", width: "50px" }}
                />
              </a>
              <a href="mailto:srinivasan.sekar1990@gmail.com" className="pr-5">
                <Player
                  autoplay
                  loop
                  src="https://assets7.lottiefiles.com/packages/lf20_tszzqucf.json"
                  style={{ height: "50px", width: "50px" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/srinivasan-sekar/"
                className="pr-5"
              >
                <Player
                  autoplay
                  loop
                  src="https://assets6.lottiefiles.com/private_files/lf30_nfrwwnhp.json"
                  style={{ height: "50px", width: "50px" }}
                />
              </a>
              <a href="#aboutme">
                <button
                  type="button"
                  className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-full btn-md"
                >
                  About Me
                </button>
              </a>
            </div>
          </div>
          <div className="mt-14 flex flex-col space-y-4">
            <div className="mr-auto gap-4 inline-flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
