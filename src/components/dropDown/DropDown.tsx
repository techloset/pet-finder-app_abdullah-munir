import { Link } from "react-router-dom";


const dropDown = () => {
  return (
    <>
      <div className=" bg-purple-700 uppercase text-white px-2 py-2.5 md:h-[55px] text-sm ">
        <div className=" flex px-3 mx-4 flex-wrap items-center justify-evenly">
          <Link className="p-2 mx-4 " to={"/"}>
            <h1>Adopt or get involved</h1>
          </Link>

          <Link className="p-2 mx-4 " to={"/"}>
           <h1>Dogs Pupies</h1>
          </Link>

          <Link className="p-2 mx-4 " to={"/"}>
           <h1>Cats Kittens</h1>
          </Link>

          <Link className="p-2 mx-4 " to={"/"}>
            <h1>Other types of pets</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default dropDown;
