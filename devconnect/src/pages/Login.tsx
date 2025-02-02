import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useUserStore } from "../store";

function Login() {
  const setUser = useUserStore((state) => state.setUser);

  const loginWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser({ name: result.user.displayName || "" });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button onClick={loginWithGoogle} className="bg-blue-500 text-white p-3 rounded">
        Login with Google
      </button>
    </div>
  );
}

export default Login;
