import React from "react";
import { Navbar, Footer, Showcase, Cards } from "../components";

const Home = () => {
  return (
    <div className="flex flex-col">
      <header>
        <Navbar />
      </header>

      <main>
        <Showcase />
        <Cards />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
