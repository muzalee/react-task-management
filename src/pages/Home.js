import { useEffect } from "react";
import GuestLayout from "../layouts/GuestLayout";

function Home() {
  useEffect(() => {
    document.title = "React Task Management"
 }, []);

  return (
    <GuestLayout>
      <></>
    </GuestLayout>
  );
}

export default Home;
