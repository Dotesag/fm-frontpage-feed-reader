import { useMainContext } from "../../../../app/page";

export default function Login() {
  const { loginStatus, setLoginStatus } = useMainContext();
  return (
    <section
      className={`border h-full border-border-subtle duration-400 flex flex-col items-center py-20 overflow-hidden 
        ${loginStatus === "logging" ? "w-feed opacity-100" : "w-0 invisible opacity-0"}`}
    >
      <h2 className="text-2xl">Login</h2>
      <form className="flex flex-col">
        <input placeholder="name" />
        <input placeholder="email" />
        <input placeholder="password" />
      </form>
      <button
        onClick={() => {
          setLoginStatus("unregistered");
        }}
      >
        x
      </button>
    </section>
  );
}
