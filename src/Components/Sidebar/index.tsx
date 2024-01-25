
import { IoIosCloseCircleOutline } from "react-icons/io";

const index = ({ state: { isSidebar, setIsSidebar } }: any) => {
  return (
    <>
      <div
        className={`${
          isSidebar ? "translate-x-0" : "translate-x-[100%]"
        } transition-all duration-500 fixed h-screen w-full md:w-1/3 bg-blue-400 right-0 top-0`}
      >
        <div className="py-4 mx-10 flex justify-between">
          <h1 className="font-semibold text-2xl text-white">My Card </h1>
          <IoIosCloseCircleOutline onClick={()=>{setIsSidebar(!isSidebar)}} className="text-4xl text-white" />
        </div>
      </div>
    </>
  );
};

export default index