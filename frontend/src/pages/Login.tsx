import { useState } from "react";

type Props = {
  onLogin: (user: {
    name: string;
    email: string;
  }) => void;
};

export default function Login({ onLogin }: Props) {

  const [email, setEmail] = useState("");

  const handleLogin = () => {

    if (!email) return;

    onLogin({
      name: email.split("@")[0],
      email: email,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">

      <div className="bg-white p-14 rounded-3xl shadow-xl w-[540px]">

        <h1 className="text-5xl font-bold text-[#98002E] mb-4">
          KNAV NAO Portal
        </h1>

        <p className="text-gray-500 text-2xl mb-10">
          Sign in to continue
        </p>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-xl px-5 py-4 mb-8 text-xl"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-[#98002E] text-white py-4 rounded-xl text-2xl font-semibold"
        >
          Login
        </button>

      </div>

    </div>
  );
}