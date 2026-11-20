import { useMainContext } from "../../../app/page";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

export default function Header() {
  const { setLoginStatus } = useMainContext();

  return (
    <header className="shrink-0 h-14 border-b border-border flex items-center justify-between px-9 gap-10">
      <div className="flex gap-7">
        <div>
          <h1 className="text-lg font-bold">Frontpage</h1>
        </div>
        <div className="flex gap-4 font-semibold">
          <button>Feed</button>
          <button>Digest</button>
          <button>Discover</button>
        </div>
      </div>
      <div className="flex gap-4">
        <ThemeSwitcher />
        <button
          onClick={() =>
            setLoginStatus((prev) =>
              prev === "logging" ? "unregistered" : "logging",
            )
          }
        >
          Login
        </button>
      </div>
    </header>
  );
}
