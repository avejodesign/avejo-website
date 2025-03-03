"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import ShuffleText from "../components/ShuffleText";
import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";

import InstagramSVG from "@/assets/contact-page/mdi_instagram.svg";
import { useRef, useState } from "react";
import ReactLenis from "lenis/react";

import emailjs from "@emailjs/browser";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<{ name: string, email: string, phone: string, business: string, website: string, budget: string, deadline: string }>({ name: "", email: "", phone: "", business: "", website: "", budget: "", deadline: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");

    emailjs.send("service_bmt5gmb", "template_1k6srcb", formData, "BdMC1QfhJ-HYXLcsg").then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text);
      setFormData({ name: "", email: "", phone: "", business: "", website: "", budget: "", deadline: "" });
    }, (err) => {
      console.log("Erro", err);
    })

  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        scrub: false,
      }
    })
    tl.from(".options-contact a", {
      opacity: 0,
      x: -200,
      ease: "power4.inOut",
      duration: 1,
      stagger: 0.2,
    }, 0).from(".form-contact", {
      opacity: 0,
      y: 200,
      ease: "power4.inOut",
      duration: 1,
    }, 0).from(".form-contact form > div", {
      opacity: 0,
      y: 200,
      ease: "power4.inOut",
      duration: 1,
      stagger: 0.1,
    }, 0)
  }, [containerRef]);

  return (
    <ReactLenis root>
      <Header />
      <div className="container mx-auto md:py-[180px] pb-10 pt-[140px]">
        <div className="lg:flex justify-between md:px-10">
          <div className="md:flex-1 w-full">
            <ShuffleText as="h1" duration="1" className="shuffle-text xl:text-5xl md:text-5xl text-4xl mb-4" stagger={0.02} >
              Vamos construir juntos?
            </ShuffleText>
            <ShuffleText as="p" duration="1" className="shuffle-text md:text-base text-sm pb-6 size-fit font-medium" stagger={0.002}>
              Seu projeto criado com expertise e experiência para oferecer o melhor do mercado!
            </ShuffleText>
            <ShuffleText as="h3" duration="1" className="shuffle-text md:text-xl text-lg md:pb-4 pb-2 size-fit font-medium" stagger={0.002}>
              Entre em contato
            </ShuffleText>
            <div className="flex flex-col items-start gap-4 options-contact mb-8">
              <a href="mailto:avejo.design@gmail.com">
                <span className="hover:opacity-80 font-medium border border-gray-300 rounded-full py-2 px-4 text-sm flex items-center">
                  <svg className="mr-2" width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.166992 1.49998C0.166992 1.19056 0.289908 0.893814 0.508701 0.675022C0.727493 0.456229 1.02424 0.333313 1.33366 0.333313H10.667C10.9764 0.333313 11.2732 0.456229 11.492 0.675022C11.7107 0.893814 11.8337 1.19056 11.8337 1.49998V8.49998C11.8337 8.8094 11.7107 9.10614 11.492 9.32494C11.2732 9.54373 10.9764 9.66665 10.667 9.66665H1.33366C1.02424 9.66665 0.727493 9.54373 0.508701 9.32494C0.289908 9.10614 0.166992 8.8094 0.166992 8.49998V1.49998ZM2.21974 1.49998L6.00033 4.80806L9.78091 1.49998H2.21974ZM10.667 2.27523L6.38474 6.02256C6.27837 6.11576 6.14176 6.16715 6.00033 6.16715C5.8589 6.16715 5.72228 6.11576 5.61591 6.02256L1.33366 2.27523V8.49998H10.667V2.27523Z" fill="black" />
                  </svg>avejo.design@gmail.com
                </span>
              </a>
              <a href="https://wa.me/5512991822358?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20conversar%20sobre%20um%20projeto%20com%20voc%C3%AAs!">
                <span className="hover:opacity-80 font-medium border border-gray-300 rounded-full py-2 px-4 text-sm flex items-center "><svg className="mr-2" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.91699 0.166687C8.21133 0.166594 8.49482 0.277757 8.71065 0.477894C8.92647 0.67803 9.05867 0.952346 9.08074 1.24585L9.08366 1.33335V10.6667C9.08375 10.961 8.97259 11.2445 8.77245 11.4603C8.57232 11.6762 8.298 11.8084 8.00449 11.8304L7.91699 11.8334H2.08366C1.78932 11.8334 1.50583 11.7223 1.29001 11.5221C1.07418 11.322 0.941984 11.0477 0.919909 10.7542L0.916992 10.6667V1.33335C0.916899 1.03902 1.02806 0.755523 1.2282 0.539701C1.42833 0.323878 1.70265 0.191679 1.99616 0.169604L2.08366 0.166687H7.91699ZM7.91699 1.33335H2.08366V10.6667H7.91699V1.33335ZM5.29199 8.33335C5.36026 8.33333 5.42637 8.35725 5.47881 8.40096C5.53125 8.44466 5.5667 8.50537 5.57899 8.57252L5.58366 8.62502V9.20835C5.58368 9.27662 5.55976 9.34273 5.51606 9.39517C5.47235 9.44761 5.41164 9.48307 5.34449 9.49535L5.29199 9.50002H4.70866C4.64039 9.50004 4.57428 9.47612 4.52184 9.43242C4.4694 9.38872 4.43395 9.328 4.42166 9.26085L4.41699 9.20835V8.62502C4.41697 8.55676 4.44089 8.49065 4.48459 8.4382C4.5283 8.38576 4.58901 8.35031 4.65616 8.33802L4.70866 8.33335H5.29199Z" fill="black" />
                </svg>+55 (12) 99182-2358
                </span>
              </a>
              <a href="https://www.instagram.com/avejodesign/">
                <span className="hover:opacity-80 font-medium border border-gray-300 rounded-full py-2 px-4 text-sm flex items-center ">
                  <InstagramSVG className="mr-2" /> @avejodesign
                </span>
              </a>
            </div>

          </div>
          <div className="md:flex-1">
            <div className="md:p-10 p-6 border rounded-[26px] lg:w-[540px] w-full mx-auto form-contact">
              <form
                onSubmit={handleSubmit}
              >
                <ShuffleText as="h2" duration="1" className="shuffle-text md:text-2xl text-xl pb-6 size-fit" stagger={0.002}>
                  Dar início ao projeto
                </ShuffleText>
                <div className="mb-6 flex flex-col">
                  <label htmlFor="name" className="md:text-base text-sm font-medium mb-2">Nome<span className="text-red-500 ">*</span></label>
                  <input placeholder="Inserir nome" type="text" id="name" name="name" required className="h-12 border rounded-full px-4" onChange={handleChange} value={formData.name} />
                </div>
                <div className="mb-6 flex flex-col">
                  <label htmlFor="email" className="md:text-base text-sm font-medium mb-2">E-mail corporativo<span className="text-red-500 ">*</span></label>
                  <input placeholder="Inserir seu melhor e-mail" type="email" id="email" name="email" required className="h-12 border rounded-full px-4" onChange={handleChange} value={formData.email} />
                </div>
                <div className="mb-6 flex flex-col">
                  <label htmlFor="phone" className="md:text-base text-sm font-medium mb-2">Telefone (Whatsapp)<span className="text-red-500 ">*</span></label>
                  <input placeholder="Inserir telefone" type="text" id="phone" name="phone" required className="h-12 border rounded-full px-4" onChange={handleChange} value={formData.phone} />
                </div>
                <div className="mb-6 flex flex-col">
                  <label htmlFor="business" className="md:text-base text-sm font-medium mb-2">Qual empresa você representa?<span className="text-red-500 ">*</span></label>
                  <input placeholder="Inserir nome da empresa" type="text" id="business" name="business" required className="h-12 border rounded-full px-4" onChange={handleChange} value={formData.business} />
                </div>
                <div className="mb-6 flex flex-col">
                  <label htmlFor="website" className="md:text-base text-sm font-medium mb-2">Tem website? se sim, insira a URL<span className="text-red-500 ">*</span></label>
                  <input placeholder="https://sitedaempresa.com" type="text" id="website" name="website" required className="h-12 border rounded-full px-4" onChange={handleChange} value={formData.website} />
                </div>
                <div className="mb-6 flex flex-col relative ">
                  <label htmlFor="select" className="md:text-base text-sm font-medium mb-2">Existe algum orçamento previsto para o projeto?<span className="text-red-500 ">*</span></label>
                  <select className="h-12 border rounded-full px-4" required id="budget" name="budget" value={formData.budget} onChange={handleChange}>
                    <option value="" disabled>Selecione um orçamento</option>
                    <option value="option1">R$ 1 mil - R$ 2 mil</option>
                    <option value="option2">R$ 2 mil - R$ 4 mil</option>
                    <option value="option3">R$ 4 mil - R$ 8 mil</option>
                    <option value="option3">R$ 8 mil - R$ 10 mil</option>
                    <option value="option3">Acima de R$ 10 mil</option>
                  </select>

                </div>
                <div className="mb-6 flex flex-col">
                  <label htmlFor="name" className="md:text-base text-sm font-medium mb-2">Existe algum prazo de entrega a ser realizado?<span className="text-red-500 ">*</span></label>
                  <input placeholder="Insira os dias ou meses" type="text" id="deadline" name="deadline" required className="h-12 border rounded-full px-4" onChange={handleChange} value={formData.deadline} />
                </div>
                <button type="submit" className="button-hero w-full bg-black text-white md:md:text-base text-sm text-sm py-3 px-6 rounded-full hover:opacity-60 transition">Entrar em contato</button>
                {status && <p>{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </ReactLenis>
  )
}
