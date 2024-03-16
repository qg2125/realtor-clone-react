import { FcGoogle } from "react-icons/fc";
function OAuth() {
  return (
    <button className=" flex items-center justify-center w-full bg-red-700 text-white px-7 py-2 uppercase text-xs font-medium rounded shadow-md hover:bg-red-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-red-900">
      <FcGoogle className="text-sm bg-white rounded-full mr-2" />
      Continue with Google
    </button>
  );
}

export default OAuth;
