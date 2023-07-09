import { Form } from "./Form";
import { useDispatch } from "react-redux";
import { setUser } from "store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.id,
            tiken: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(() => alert("Invalid user!"));
  };
  return (
    <>
      <Form title="sign in" handleClick={handleLogin} />
    </>
  );
};
