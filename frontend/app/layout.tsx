import "./globals.css";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex h-dvh flex-col bg-bg-primary text-text-primary">
        <ThemeProvider enableSystem attribute="class" defaultTheme="system">{children}</ThemeProvider>
      </body>
    </html>
  );
}
