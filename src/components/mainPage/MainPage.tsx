import "../../App.css";
import { useEffect, useState } from "react";
import { getPetData } from "../../redux/slice/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import LikeIcon from "../../assets/images/s2/LikeIcon.svg";
import arrow from "../../assets/images/s2/Arrow.svg";
import BlogPet from "../petBlog/PetBlog";
import PetCard from "../petCard/PetCard";
import Card from "../mainPgCard/MainPageCard";

import Image1 from "../../assets/images/s3/P1.svg";
import Image2 from "../../assets/images/s3/P2.svg";
import Image3 from "../../assets/images/s3/P3.svg";
import DefaultImg from "../../assets/images/default/Default.svg";
import { Link } from "react-router-dom";
import { response } from "../../constants/Types";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const data = useAppSelector((state) => state.data.pet);

  useEffect(() => {
    dispatch(getPetData())
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);
  return (
    <div className="">
      {loading ? (
        <div className="flex justify-center items-center h-[500px]">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-purple-700 border-solid"></div>
        </div>
      ) : (
        <>
          <div className="flex justify-center items-center text-purple-700 font-bold gap-4 mx-7 sm:mx-0">
            <div>
              <p className="text-xl">Pets Available for Adoption Nearby</p>
            </div>
            <div>
              <img src={arrow} alt="ARROW" className="size-4" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center text-center">
            {data?.slice(12, 16)?.map((pet: response, i: number) => {
              return (
                <div
                  key={i}
                  className="w-auto mx-2 h-[301.2px] mb-4 cursor-pointer"
                >
                  <Link to={`/detail/${pet.id}`}>
                    <div className="w-[231.2px] h-[301.2px] mt-6 bg-opacity-0shadow hover:shadow-lg shadow rounded-b-lg">
                      <div className=" bg-zinc-200 rounded-tl-lg rounded-tr-lg">
                        <img
                          className="w-[231.2px] rounded-tl-lg rounded-tr-lg object-cover h-[231.20px]"
                          src={pet?.photos[0]?.full || DefaultImg}
                          alt={pet.age}
                        />
                      </div>
                      <div className=" top-[-10px] h-[70px]  bg-white  rounded-b-lg">
                        <div className="flex rounded-tl-3xl rounded-tr-3xl relative h-[9px]top-[-8px]"></div>
                        <div className="h-8 ">
                          <div className=" text-constPurple text-xl inline-flex">
                            {pet.name.slice(0, 10)}
                          </div>
                        </div>
                      </div>

                      <div className="size-14 p-2.5 top-[-293px] left-[85px] relative rounded-[22.50px] justify-center items-center inline-flex">
                        <div className="relative flex-col justify-start items-start flex">
                          <img src={LikeIcon} alt="" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
            <PetCard
              petCount="10137 more pets"
              availability="available on Petfinder"
            />
          </div>
          <div className="">
            <div className="mb-[79.59px] h-12 text-center text-neutral-600 text-[38px] uppercase leading-[45.60px]">
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
                <div
                  key={i}
                  className="w-auto mx-2 h-[301.2px] mb-4 cursor-pointer"
                >
                  <Link to={`/detail/${pet.id}`}>
                    <div className="w-[231.2px] h-[301.2px] mt-6 bg-opacity-0shadow hover:shadow-lg shadow rounded-b-lg">
                      <div className=" bg-zinc-200 rounded-tl-lg rounded-tr-lg">
                        <img
                          className="w-[231.2px] rounded-tl-lg rounded-tr-lg object-cover h-[231.20px]"
                          src={pet?.photos[0]?.full || DefaultImg}
                          alt={pet.age}
                        />
                      </div>
                      <div className=" top-[-10px] h-[70px]  bg-white  rounded-b-lg">
                        <div className="flex rounded-tl-3xl rounded-tr-3xl relative h-[9px]top-[-8px]"></div>
                        <div className="h-8 ">
                          <div className=" text-constPurple text-xl inline-flex">
                            {pet.name.slice(0, 10)}
                          </div>
                        </div>
                      </div>

                      <div className="size-14 p-2.5 top-[-293px] left-[85px] relative rounded-[22.50px] justify-center items-center inline-flex">
                        <div className="relative flex-col justify-start items-start flex">
                          <img src={LikeIcon} alt="" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}

            <PetCard
              petCount="10137 more pets"
              availability="available on Petfinder"
            />
          </div>
          <BlogPet />
        </>
      )}
    </div>
  );
};

export default MainPage;
