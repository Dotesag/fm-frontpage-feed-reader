import { useTheme } from "next-themes";
import { flushSync } from "react-dom";

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        document.startViewTransition(() =>
          flushSync(() =>
            setTheme(resolvedTheme === "light" ? "dark" : "light"),
          ),
        )
      }
    >
      Theme
    </button>
  );
}
