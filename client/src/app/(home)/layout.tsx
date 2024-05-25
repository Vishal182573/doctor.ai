import MainHeader from "../../../components/shared/Header";
import Footer from "../../../components/shared/Footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader/>
      <main>{children}</main>
      <Footer
        name="Vishal Sharma"
        email="sharmavs9205@gmail.com"
        phone="+91 7303876390"
      />
    </>
  );
}
