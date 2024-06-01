import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kachem Young Initiative",
  description: "Kachem Young Initiative is a non-profit NGO founded in 2017 to administer community resilience towards solving problems of poverty among grassroots people, devaluation of education especially girl child education, female discrimination, and exclusion of persons with disabilities in Ebonyi State.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
