import "../../App.css";
import { useEffect } from "react";
import { getPetData } from "../../redux/slice/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import likeIcon from "../../assets/images/S2/likeIcon.svg";
import arrow from "../../assets/images/S2/Arrow.svg";
import BlogPet from "../petBlog/PetBlog";
import PetCard from "../petCard/PetCard";
import Card from "../mainPgCard/MainPageCard";

import Image1 from "../../assets/images/S3/P1.svg";
import Image2 from "../../assets/images/S3/P2.svg";
import Image3 from "../../assets/images/S3/P3.svg";
import DefaultImg from "../../assets/images/Defalt/Defalt.svg";
import { Link } from "react-router-dom";

type Photos = {
  small: string;
  medium: string;
  large: string;
  full: string;
};

interface response {
  name: string;
  photos: Photos[] | [];
  age: string;
  id: number;
}

const MainPage = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data.pet);

  useEffect(() => {
    dispatch(getPetData());
  }, [dispatch]);


  return (
    <>
      <div className="grid grid-cols-12 text-purple-700 font-bold">
        <div className="col-start-5 col-span-4">
          <p className="text-xl">PETS AVAILABLE FOR ADOPTION NEARBY</p>
        </div>
        <div>
          <img src={arrow} alt="ARROW" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center text-center">
        {data?.slice(12, 16)?.map((pet: response, i: number) => {
          return (
            <Link to={`/detail/${pet.id}`}>
              <div
                key={i}
                className="w-auto mx-2 h-[301.2px] mb-4 cursor-pointer "
              >
                <div className="w-[231.2px] h-[301.2px] mt-6 bg-opacity-0 rounded-lg shadow hover:shadow-lg">
                  <div className=" bg-zinc-200 rounded-tl-lg rounded-tr-lg">
                    <img
                      className="w-[231.2px] rounded-tl-lg rounded-tr-lg object-cover h-[231.20px]"
                      src={pet?.photos?.[0]?.full || DefaultImg}
                      alt={pet.age}
                    />
                  </div>
                  <div className=" top-[-10px] h-[70px] ">
                    <div className="flex rounded-tl-3xl rounded-tr-3xl relative h-[9px] bg-white top-[-8px]"></div>
                    <div className="h-8 ">
                      <div className=" text-violet-800 text-xl inline-flex">
                        {pet.name.slice(0, 10)}
                      </div>
                    </div>
                  </div>

                  <div className="w-[45px] h-[45px] p-2.5 top-[-293px] left-[85px] relative bg-white bg-opacity-75 rounded-[22.50px] justify-center items-center inline-flex">
                    <div className="w-[25px] h-[25px] relative flex-col justify-start items-start flex">
                      <img src={likeIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
        <PetCard />
      </div>
      <div className="flex flex-wrap justify-center text-center ">
        <div className="w-auto mb-[79.59px] h-12 text-center text-neutral-600 text-[38px] uppercase leading-[45.60px]">
          Planning to adopt a pet?
        </div>

        <div className="flex flex-wrap justify-center mb-[92px] ">
          <Card
            src={Image1}
            title="Checklist for new adopters"
            disc="Make the adoption transition as smooth as possible."
          />
          <Card
            src={Image2}
            title="COVID-19 Resources"
            disc="Learn how shelters/rescue groups are adapting. Find out how you
                can help dogs and cats."
          />
          <Card
            src={Image3}
            title="Pet Adoption FAQs"
            disc="Get answer to all the you questions you haven't thought of for
            your adoption."
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center text-center mb-[50px]">
        {data?.slice(7, 11)?.map((pet: response, i: number) => {
          return (
            <Link to={`/detail/${pet.id}`}>
              <div
                key={i}
                className="w-auto mx-2 h-[301.2px] mb-4 cursor-pointer"
              >
                <div className="w-[231.2px] h-[301.2px] mt-6 bg-opacity-0 rounded-lg shadow hover:shadow-lg">
                  <div className=" bg-zinc-200 rounded-tl-lg rounded-tr-lg">
                    <img
                      className="w-[231.2px] rounded-tl-lg rounded-tr-lg object-cover h-[231.20px]"
                      src={pet?.photos[0]?.full || DefaultImg}
                      alt={pet.age}
                    />
                  </div>
                  <div className=" top-[-10px] h-[70px] ">
                    <div className="flex rounded-tl-3xl rounded-tr-3xl relative h-[9px] bg-white top-[-8px]"></div>
                    <div className="h-8 ">
                      <div className=" text-violet-800 text-xl inline-flex">
                        {pet.name.slice(0, 10)}
                      </div>
                    </div>
                  </div>

                  <div className="w-[45px] h-[45px] p-2.5 top-[-293px] left-[85px] relative bg-white bg-opacity-75 rounded-[22.50px] justify-center items-center inline-flex">
                    <div className="w-[25px] h-[25px] relative flex-col justify-start items-start flex">
                      <img src={likeIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}

        <PetCard />
      </div>
      <BlogPet />
    </>
  );
};

export default MainPage;
