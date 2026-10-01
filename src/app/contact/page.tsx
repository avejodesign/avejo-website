"use client";

import ReactLenis from "lenis/react";
import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";
import { ContactForm } from "../sections/Contact/ContactForm";

export default function Contact() {
  return (
    <ReactLenis root>
      <Header />
      <div className="container mx-auto md:py-[180px] pb-10 pt-[140px]">
        <ContactForm />
      </div>
      <Footer />
    </ReactLenis>
  );
}
