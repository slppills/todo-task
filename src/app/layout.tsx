import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "./provider";

export const metadata: Metadata = {
  title: "todo-list",
  description: "오늘 나의 할 일을 관리하세요"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
