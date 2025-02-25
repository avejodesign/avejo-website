import { Header } from "@/app/sections/Header";
import { Hero } from "@/app/sections/Hero";
import { About } from "@/app/sections/About";
import { Clients } from "@/app/sections/Clients";
import { Works } from "@/app/sections/Works";
import { MyServices } from "@/app/sections/MyServices";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
      <Header />
      <Hero />
      <About />
      <Clients />
      <Works />
      <MyServices />
      <Contact />
      <Footer />
    </ReactLenis>
  );
}
