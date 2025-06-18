import type { Metadata } from "next";
import "./globals.css";
// import Nav from "@/components/navbar/Nav";
// import Side from "@/components/sidebar/Side";
import { ReduxProvider } from "@/store/ReduxProvider";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "MADA - Todo List App",
  description: "Todo list app to create and save your todos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased p-4 dark:bg-black! bg-gray-400! h-screen`}>
        <ReduxProvider>
          <ClientLayout>{children}</ClientLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
