import { useMainContext } from "../../../app/page";

export default function Header() {
  const { setLoginStatus } = useMainContext();

  return (
    <header className="h-14 border border-border-subtle flex items-center justify-between px-9 gap-10">
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
      <button onClick={() => setLoginStatus("logging")}>Login</button>
    </header>
  );
}
