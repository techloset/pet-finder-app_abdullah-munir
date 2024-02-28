import SearchIcon from "../../assets/images/heroSection/SearchIcon.svg";
import iconShelter from "../../assets/images/heroSection/Home.svg";
import iconCat from "../../assets/images/heroSection/Cat.svg";
import iconDog from "../../assets/images/heroSection/Dog.svg";
import iconPaw from "../../assets/images/heroSection/Foot.svg";
import HeroCard from "../heroCard/HeroCard";
export default function HeroSection() {
  return (
    <>
      <div className="h-[410px] shadow bg-center bg-cover " style={{backgroundImage:` url("../src/assets/images/heroSection/HeroBg.png")`}}>
        <form className="flex pt-5 justify-center">
          <div className="w-full max-w-[808px]">
            <div className=" relative h-[60px] grid grid-cols-7 sm:mb-[90px] rounded-lg border-2 bg-white">
              <div className="col-span-3">
                <input
                  type="search"
                  id="default-search"
                  className="w-full h-[55px] p-4 ps-4 text-zinc-500 hover:border-purple-700  hover:border-b-4 text-base font-normal border rounded-lg"
                  placeholder="Search Terrier, Kitten, etc."
                  required
                />
              </div>
              <div className=" col-span-3">
                <input
                  type="search"
                  id="default-search-zip"
                  className="w-full h-[55px] p-4 ps-4 text-zinc-500 text-base font-normal hover:border-purple-700 hover:border-b-4 border rounded-lg"
                  placeholder="Enter City,State or ZIP"
                  required
                />
              </div>
              <div className="bg-white hover:border-purple-700 hover:border-b-4 border rounded-lg text-center">
                <button
                  type="submit"
                  className="text-white absolute end-2 bottom-2.5 focus:ring-4 focus:outline-none font-medium hover:border-purple-700 hover:border-b-4 border rounded-lg"
                >
                  <img
                    src={SearchIcon}
                    className="h-[40px] w-[40px]"
                    alt="SearchIcon"
                  />
                </button>
              </div>
            </div>
          </div>
        </form>

        <br />
        <div className="flex flex-col items-center mt-10 sm:mt-3">
          <div className="w-auto sm:h-[54px] text-center text-white text-[41.84px] font-bold sm:leading-[54px]">
            Find your new best friend
          </div>
          <div className="w-auto max-w-[638.34px] tracking-wide h-8 text-center text-white text-base font-bold  leading-loose">
            Browse pets from our network of over 11,500 shelters and rescues.
          </div>
        </div>
      </div>
      <div className="bg-purple-700 w-full p-1"></div>
      <div className="h-[278.6px] flex flex-wrap justify-center sm:top-[-110px] xsm:mb-[510px] mb-[110px] sm:mb-0 relative">
        <div>
          <HeroCard src={iconDog} title="Dog" text="DogImg" />
        </div>
        <div>
          <HeroCard src={iconCat} title="Cats" text="CatImg" />
        </div>
        <div className="hidden md:inline-flex">
          <HeroCard
            src={iconPaw}
            title="Other Animals"
            text="OtherAnimalsImg"
          />
        </div>
        <div className="hidden md:inline-flex">
          <HeroCard
            src={iconShelter}
            title="Shelters Rescues"
            text="Shelters Rescues"
          />
        </div>
      </div>
    </>
  );
}
