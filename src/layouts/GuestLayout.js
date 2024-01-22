import Header from "../components/Header";

function GuestLayout({ children }) {
    return (
    <>
      <Header />
      { children }
    </>
  );
}

export default GuestLayout;