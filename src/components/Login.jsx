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
    <div class="p-5">
      <button
        class="py-1 px-2 bg-gray-200 border-l-gray-500 border-b-gray-500 border-t-gray-100 border-r-gray-100 border-2 hover:bg-gray-300 active:bg-gray-400 active:border-l-gray-100 active:border-b-gray-100 active:border-t-gray-500 active:border-r-gray-500"
        onClick={() => {
          signInWithEmailAndPassword();
        }}
      >
        Shareholder Login
      </button>
    </div>
  );
};

export default Login;
