import Footer from "../components/Footer";
import Header from "../components/Header";

function GuestLayout({ children }) {
    return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  );
}

export default GuestLayout;