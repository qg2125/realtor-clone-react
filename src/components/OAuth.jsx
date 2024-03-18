import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router";

function OAuth() {
  const navigate = useNavigate();
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //check if the user is already in the database
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with google!");
    }
  }
  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className=" flex items-center justify-center w-full bg-red-700 text-white px-7 py-2 uppercase text-xs font-medium rounded shadow-md hover:bg-red-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-red-900"
    >
      <FcGoogle className="text-sm bg-white rounded-full mr-2" />
      Continue with Google
    </button>
  );
}

export default OAuth;
