import { Roboto_Condensed } from "next/font/google";
import "./ui/globals.css";
import Header from "./ui/navbar";
import { AppWrapper } from "./context";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Murga Marvel",
  description: "Technical Test for Inditex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
        <AppWrapper>
          <Header />
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
