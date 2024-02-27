import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPetDetails } from "../../redux/slice/detailSlice";
import { fetchOrganizationData } from "../../redux/slice/organizationSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import PetCard from "../../components/petCard/PetCard";
import OrgCard from "../../components/detailOrgCard/DetailOrgCard";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import AlertImg from "../../assets/images/detailPg/IconAlert.svg";
import FaviconIcon from "../../assets/images/detailPg/FavIcon.svg";
import DefaultImg from "../../assets/images/default/Default.svg";
import ShelterIcon from "../../assets/images/detailPg/ShelterIcon.svg";
import LocationIcon from "../../assets/images/detailPg/LocationIcon.svg";
import PhoneIcon from "../../assets/images/detailPg/PhoneIcon.svg";
import LikeIcon from "../../assets/images/s2/LikeIcon.svg";
import { resp } from "../../constants/Types";
import DetailSponsorCard from "../../components/detailSponsorCard/DetailSponsorCard";

const Detail: FC = () => {
  const [loading, setLoading] = useState(true);
  const [orgLoading, setOrgLoading] = useState(true);
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const petDetail = useAppSelector((state) => state.petData.petDetail);
  const orgData = useAppSelector((state) => state.orgData.organizationData);

  const organization_id = petDetail?.organization_id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getPetDetails(`${id}`)).finally(() => setLoading(false));
        if (petDetail) {
          await dispatch(fetchOrganizationData(`${organization_id}`)).finally(
            () => setOrgLoading(false)
          );
        }
      } catch (error) {
        console.log("Error fetching Animal Data:", error);
      } finally {
        setLoading(false), setOrgLoading(false);
      }
    };
    fetchData();
  }, [dispatch, id, organization_id]);

  return (
    <div className="">
      {loading ? (
        <div className="flex justify-center items-center h-[500px]">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-purple-700 border-solid"></div>
        </div>
      ) : (
        <>
          {petDetail && (
            <>
              <div className=" ">
                <div className="h-[500px] sm:h-[880px]">
                  <div className="h-[40%] sm:h-4/6  flex justify-center bg-black">
                    <img
                      src={petDetail.photos[0]?.full || DefaultImg}
                      alt="petDetail?.name"
                      className="h-full bg-white"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:mx-auto lg:grid-cols-10 gap-8 w-full max-w-5xl mx-auto px-4 md:px-0 relative bottom-72  sm:bottom-56 md:bottom-68 lg:bottom-72 justify-evenly">
                  <div className="col-span-full lg:col-span-6 bg-white p-8 rounded-xl shadow-lg mb-8  md:mb-0 ">
                    <div className="">
                      <div className="flex text-lg sm:text-4xl font-normal px-7 py-6 justify-center">
                        {petDetail?.name}
                      </div>
                      <div className="flex text-base px-7 py-2 justify-center sm:justify-center sm:inline-flex">
                        <Link to="" className="underline text-blue-700">
                          {petDetail.breeds.primary ||
                            petDetail.breeds.secondary}
                        </Link>
                        <div className="px-1">.</div>
                        <div className="">
                          {petDetail.contact.address.city},
                          {petDetail.contact.address.country}
                        </div>
                      </div>
                    </div>

                    <hr className=" mx-7" />
                    <div className="m-7">
                      <div className="flex text-base justify-center  sm:inline-flex">
                        <div className="">{petDetail.gender}</div>
                        <div className="px-2">.</div>
                        <div className="">{petDetail.age}</div>
                        <div className="px-2">.</div>
                        <div className="">{petDetail.size}</div>
                      </div>
                    </div>
                    <hr className=" mx-7" />
                    <div className="flex text-base gap-4 mt-3 h-[35px] sm:hidden md:hidden lg:hidden">
                      <div className="hover:border-b-2 border-indigo-500  flex justify-center w-16">
                        About
                      </div>
                      <div className="hover:border-b-2 border-indigo-500 ">
                        {petDetail.organization_id}
                      </div>
                      <div className="hover:border-b-2 border-indigo-500 ">
                        {petDetail.size}
                      </div>
                    </div>
                    <div className="mt-10">
                      <div className="text-3xl px-7 py-5">About</div>
                      <div className="px-7">
                        {petDetail.description.slice(0, 100)}
                      </div>
                    </div>
                    <hr className="w-[90%] mx-auto mt-8 hidden sm:hidden  md:flex" />
                    <div className="mt-8">
                      <div className="inline-flex sm:mt-16 md:mt-0">
                        <div className=" ">
                          <img
                            src={AlertImg}
                            alt="alert icon"
                            className="size-6"
                          />
                        </div>
                        <div className="w-full">
                          Petfinder recommends that you should always take
                          reasonable security steps before making online
                          payments.
                        </div>
                      </div>
                    </div>
                  </div>
                  <DetailSponsorCard name={petDetail.name} src={FaviconIcon} />

                  <div className="max-w-[270px] md:max-w-[393px] border-2 col-span-full lg:col-start-7 lg:col-span-4 bg-white p-8 rounded-2xl shadow-lg md:mb-0 relative lg:bottom-20 lg:top-[-80px] top-8 sm:top-8 md:top-16 pb-0 mx-auto">
                    <img
                      src={ShelterIcon}
                      alt=""
                      className="flex border  justify-center items-center relative bottom-20 size-[150px] rounded-full mx-auto"
                    />

                    <div className=" relative bottom-16">
                      <div className="text-3xl text-center">
                        {petDetail.organization_id} Animals In Need
                      </div>
                      <div className="text-center">
                        {petDetail.contact.address.city},
                        {petDetail.contact.address.country}
                      </div>
                      <div className="mt-12 flex items-center pb-4 border-b-[1px] border-slate-400">
                        <div className="relative left-[-10px]">
                          <img src={LocationIcon} alt="Location" />
                        </div>
                        <div className="">
                          <div className="flex gap-3">Location Address</div>
                          <div className="">
                            {petDetail.contact.address.city},
                            {petDetail.contact.address.country}
                          </div>
                        </div>
                      </div>
                      <div className="mt-8 flex items-center pb-5 border-b-[1px] border-slate-400">
                        <div className="relative left-[-10px]">
                          <img src={PhoneIcon} alt="PhoneIcon" />
                        </div>
                        <div className="">
                          <div className="flex gap-3">
                            {petDetail.contact.phone || petDetail.contact.email}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center rounded-3xl h-[45PX] text-center mt-10 border-2 border-black hover:bg-black font-bold hover:text-white hover:border-2 hover:border-white hover:shadow-xl">
                        <button type="button">MORE ABOUT US</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[350px]  justify-center text-white bg-purple-700  hidden md:hidden lg:flex">
                <div className="mx-[60px] my-auto">
                  <div className="flex mx-10 items-center gap-5  ">
                    <div className="size-[103px] flex items-center">
                      <img
                        src={petDetail.photos[0]?.small || DefaultImg}
                        alt="dog Image"
                        className="rounded-full border-4 border-white size-[103px]"
                      />
                    </div>
                    <div className="">
                      <div className="text-3xl ">
                        Ask About {petDetail.name}
                      </div>
                      <div className="mt-2 mb-2">
                        {petDetail.breeds.primary || petDetail.breeds.secondary}
                      </div>
                      <div className="flex text-base justify-center  sm:inline-flex">
                        <div className="">{petDetail.gender}</div>
                        <div className="px-2">.</div>
                        <div className="">{petDetail.age}</div>
                        <div className="px-2">.</div>
                        <div className="">{petDetail.size}</div>
                      </div>
                    </div>
                  </div>
                  <hr className="w-full mx-10  mt-5 mb-5 border-[1px] border-slate-300" />
                  <div className=" mx-10 ">
                    <div className="my-2">
                      Please note that {petDetail.organization_id} In Need is
                      not able to answer inquiries via email through Petfinder
                      at this time.
                    </div>
                    <div className="flex gap-8 my-2">
                      <div className="">
                        You may call them with your inquiry at:
                      </div>
                      <div className="">{petDetail.contact.phone}</div>
                    </div>
                    <div className="flex gap-10 my-2">
                      <div className="">
                        You may also find more information about the
                        organization on their homepage:
                        <div className="">{petDetail.url}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-customPrime w-full text-center -mt-8 py-7  text-white">
                <div className="text-4xl md:text-7xl my-7">
                  {petDetail.breeds.primary || petDetail.breeds.secondary}
                </div>
                <p className="underline">View Pet Adoption Stories</p>
                <div className="flex flex-wrap justify-center text-center">
                  {orgLoading ? (
                    <div className="flex justify-center items-center h-[500px]">
                      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-purple-700 border-solid"></div>
                    </div>
                  ) : (
                    <>
                      {orgData?.slice(2, 5).map((pet: resp, i: number) => {
                        return (
                          <OrgCard
                            key={i}
                            id={pet.id}
                            src={pet?.photos?.[0]?.full}
                            name={pet.name.slice(0, 20)}
                            disc={pet.description}
                          />
                        );
                      })}
                    </>
                  )}
                </div>
              </div>
            </>
          )}
          <div className="mt-16">
            <h1 className="text-2xl md:text-4xl text-center text-purple-700">
              More dogs from {petDetail && <>{petDetail.organization_id}</>}{" "}
              Animals In Need
            </h1>
            <div className="flex flex-nowrap justify-center items-center">
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  500: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1280: {
                    slidesPerView: 4,
                  },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper flex items-center"
              >
                {orgData?.map((pet: resp, i: number) => {
                  return (
                    <SwiperSlide key={pet.id}>
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
                            <div className=" top-[-10px] h-[70px]  bg-white  rounded-b-lg">
                              <div className="flex rounded-tl-3xl rounded-tr-3xl relative h-[9px]top-[-8px]"></div>
                              <div className="h-8">
                                <div className=" text-violet-800 text-xl inline-flex mx-[70px]">
                                  {pet.name.slice(0, 10)}
                                </div>
                              </div>
                            </div>

                            <div className="w-[45px] h-[45px] p-2.5 top-[-293px] left-[160px] relative rounded-[22.50px] justify-center items-center inline-flex">
                              <div className="w-[25px] h-[25px] relative flex-col justify-start items-start flex">
                                <img src={LikeIcon} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
                <PetCard />
              </Swiper>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;

// #410078
