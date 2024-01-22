import Footer from "../components/Footer";
import Header from "../components/Header";

function GuestLayout({ children }) {
    return (
    <div className="flex h-screen flex-col justify-between">
        <Header />
      { children }
      <Footer />
    </div>
  );
}

export default GuestLayout;