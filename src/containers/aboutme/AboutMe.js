export default function AboutMe() {
  return (
    <div className="border-t border-gray-200 pb-16 pt-48 dark:border-gray-600">
      <div className="relative mx-10vw" id="aboutme">
        <div className="relative mx-auto grid max-w-7xl grid-cols-4 grid-rows-max-content gap-x-4 md:grid-cols-8 xl:grid-cols-12 xl:gap-x-6">
          <div className="col-span-full md:col-span-3 xl:row-span-2 text-white pl-3">
            <div>
              <div className="text-2xl md:text-2xl font-sign">
                Srinivasan Sekar
              </div>
              <p className="max-w-md text-2xl mt-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200">
                Thoughtworker
              </p>
              <p className="max-w-md text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200">
                Open Source Contributor
              </p>
              <p className="max-w-md text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200">
                Conference Speaker
              </p>
              <p className="max-w-md text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200">
                Blogger
              </p>
              <p className="max-w-md text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200">
                Mentor
              </p>
            </div>
          </div>
          <div className="col-span-4 col-start-9 row-span-2 row-start-1 mt-0 hidden xl:block">
            <img
              className="rounded-full shadow-2xl float-right scale-50 text-right"
              src={
                new URL(
                  `../../assets/images/SrinivasanSekar.jpg`,
                  import.meta.url
                ).href
              }
              alt="srinivasan sekar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
