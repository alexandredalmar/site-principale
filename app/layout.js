import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Site Principal",
  description: "Description site principale",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body lang='fr' className='bg-black'>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
