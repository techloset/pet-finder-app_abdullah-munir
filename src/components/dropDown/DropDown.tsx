import { Link } from "react-router-dom";

const dropDown = () => {
  return (
    <>
      <div className=" bg-constPurple uppercase text-white px-2 py-3 md:h-[55px] text-sm ">
        <div className=" flex px-3 mx-4 flex-wrap items-center justify-center md:gap-0 lg:gap-[8%]">
          <Link className="p-2 mx-4 font-normal" to={"/"}>
            <h1>Adopt or get involved</h1>
          </Link>

          <Link className="p-2 mx-4 font-normal" to={"/"}>
            <h1>Dogs Pupies</h1>
          </Link>

          <Link className="p-2 mx-4 font-normal" to={"/"}>
            <h1>Cats Kittens</h1>
          </Link>

          <Link className="p-2 mx-4 font-normal" to={"/"}>
            <h1>Other types of pets</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default dropDown;
