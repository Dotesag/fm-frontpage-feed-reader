import Image from "next/image";
import { useMainContext } from "../../../../app/page";
import { useTheme } from "next-themes";

export default function Login() {
  const { theme } = useTheme();
  const { loginStatus, setLoginStatus } = useMainContext();
  return (
    <section
      className={`border-l relative bg-bg-secondary h-full border-border duration-400 flex gap-10 flex-col items-center py-28 overflow-hidden 
        ${loginStatus === "logging" ? "w-180 opacity-100" : "w-0 invisible opacity-0"}`}
    >
      <h2 className="text-2xl">Register</h2>
      <form className="flex flex-col gap-5">
        <input className="loginInput" placeholder="Name" />
        <input className="loginInput" placeholder="Email" />
        <input className="loginInput" placeholder="Password" type="password" />
        <input
          className="loginInput"
          placeholder="Repeat password"
          type="password"
        />
        <button className="bg-bg-tertiary py-2 my-4 rounded-md">Next</button>
      </form>
      <button
        onClick={() => {
          setLoginStatus("unregistered");
        }}
      >
        <Image
          src={
            theme === "light"
              ? "/images/light/icon-cross.svg"
              : "/images/dark/icon-cross.svg"
          }
          alt=""
          width={512}
          height={512}
          draggable={false}
          className="w-10 h-10 absolute left-5 top-5"
        />
      </button>
    </section>
  );
}
