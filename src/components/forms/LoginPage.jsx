import React, { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (username, password) => {
    console.log(username, password);
  };

  return (
    <div class="w-full ml-12 my-8 max-w-xs">
      <h1>Shareholder Login</h1>
      <form>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            class="py-1 px-2 border-l-gray-500 border-b-gray-500 border-t-gray-100 border-r-gray-100 border-2 active:border-l-gray-100 active:border-b-gray-100 active:border-t-gray-500 active:border-r-gray-500"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={({ target: { value } }) => setUsername(value)}
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="py-1 px-2 border-l-gray-500 border-b-gray-500 border-t-gray-100 border-r-gray-100 border-2 active:border-l-gray-100 active:border-b-gray-100 active:border-t-gray-500 active:border-r-gray-500"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="py-1 px-2 bg-gray-200 border-l-gray-500 border-b-gray-500 border-t-gray-100 border-r-gray-100 border-2 hover:bg-gray-300 active:bg-gray-400 active:border-l-gray-100 active:border-b-gray-100 active:border-t-gray-500 active:border-r-gray-500"
            type="button"
            onClick={() => handleSubmit(username, password)}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
