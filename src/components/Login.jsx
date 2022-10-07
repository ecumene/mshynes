import { signIn } from "@astro-auth/client";

const signInWithEmailAndPassword = () => {
  signIn({
    provider: "credential",
    login: {
      email: "me@mitchellhynes.com",
      password: "password",
    },
  });
};

const Login = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("test");
          signInWithEmailAndPassword();
        }}
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
