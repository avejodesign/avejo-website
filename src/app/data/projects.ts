import type { StaticImageData } from "next/image";
import Project01 from "@/assets/projects-images/awam-agency-project.png";
import Project02 from "@/assets/projects-images/vertex-pure-matter.png";
import Project03 from "@/assets/projects-images/mytech.png";
import Project04 from "@/assets/projects-images/bankook.png";
import type { Language } from "@/app/i18n/translations";

type MediaImage = {
  type: "image";
  src: StaticImageData;
  alt: string;
};

type MediaVideo = {
  type: "video";
  src: string;
  title: string;
};

export type ProjectMedia = MediaImage | MediaVideo;

type ProjectLocaleContent = {
  title: string;
  subtitle: string;
  description: string;
  client: string;
  whatWeDid: string[];
};

export type ProjectItem = {
  slug: string;
  externalUrl: string;
  cover: StaticImageData;
  tags: string[];
  media: ProjectMedia[];
  locale: Record<Language, ProjectLocaleContent>;
};

export const projects: ProjectItem[] = [
  {
    slug: "awam-agency",
    externalUrl: "https://awam.agency",
    cover: Project01,
    tags: ["GSAP", "UX/UI Design", "Webflow", "Code Edition"],
    media: [
      { type: "image", src: Project01, alt: "Awam homepage" },
      { type: "image", src: Project01, alt: "Awam sections and interactions" },
      { type: "video", src: "https://www.youtube.com/embed/Y6ORj8q95xw", title: "Awam website showcase" },
    ],
    locale: {
      pt: {
        title: "awam - Agencia de Marketing Alema",
        subtitle: "Website institucional com foco em autoridade e performance.",
        description:
          "Projeto criado para fortalecer o posicionamento digital da awam com narrativa clara, visual premium e navegacao objetiva.",
        client: "awam Agency",
        whatWeDid: ["UX/UI Design", "Direcao visual", "Animacoes GSAP", "Implementacao Webflow"],
      },
      en: {
        title: "awam - German Marketing Agency",
        subtitle: "Institutional website focused on authority and performance.",
        description:
          "This project was designed to strengthen awam's digital positioning with clear storytelling, premium visuals, and a goal-oriented navigation flow.",
        client: "awam Agency",
        whatWeDid: ["UX/UI Design", "Visual direction", "GSAP animations", "Webflow implementation"],
      },
    },
  },
  {
    slug: "vertex-architecture",
    externalUrl: "https://vertex-website.netlify.app/",
    cover: Project02,
    tags: ["UX/UI Design", "Web", "Mobile", "Architecture", "GSAP"],
    media: [
      { type: "image", src: Project02, alt: "Vertex website layout" },
      { type: "image", src: Project02, alt: "Vertex brutalist details" },
      { type: "video", src: "https://www.youtube.com/embed/gf36qQ8QWfQ", title: "Vertex project walkthrough" },
    ],
    locale: {
      pt: {
        title: "VERTEX - Arquitetura Brutalista",
        subtitle: "Site conceitual para estudio de arquitetura contemporanea.",
        description:
          "O desafio foi traduzir a linguagem brutalista em uma experiencia digital funcional, mantendo impacto visual e boa leitura de conteudo.",
        client: "Vertex Studio",
        whatWeDid: ["Conceito criativo", "UX/UI Design", "Design responsivo", "Microinteracoes"],
      },
      en: {
        title: "VERTEX - Brutalism Architecture",
        subtitle: "Concept website for a contemporary architecture studio.",
        description:
          "The challenge was to translate a brutalist visual language into a functional digital experience while preserving strong visual impact and content clarity.",
        client: "Vertex Studio",
        whatWeDid: ["Creative concept", "UX/UI Design", "Responsive design", "Micro interactions"],
      },
    },
  },
  {
    slug: "mytech-platform",
    externalUrl: "https://mytech-platform.netlify.app/",
    cover: Project03,
    tags: ["GSAP", "UX/UI Design", "Web", "Mobile"],
    media: [
      { type: "image", src: Project03, alt: "MyTech landing experience" },
      { type: "image", src: Project03, alt: "MyTech exchange interface" },
      { type: "video", src: "https://www.youtube.com/embed/ulprqHHWlng", title: "MyTech product preview" },
    ],
    locale: {
      pt: {
        title: "MYTECH - Plataforma de Exchange Blockchain",
        subtitle: "Landing page para produto cripto com foco em conversao.",
        description:
          "A estrutura foi organizada para explicar o produto de forma simples, destacar seguranca e facilitar o caminho do usuario ate a acao principal.",
        client: "MyTech",
        whatWeDid: ["Arquitetura de informacao", "UX Writing", "UX/UI Design", "Front-end animado"],
      },
      en: {
        title: "MYTECH - Blockchain Platform Exchange",
        subtitle: "Crypto product landing page focused on conversion.",
        description:
          "The structure was built to explain the product in a simple way, highlight trust and security, and guide users clearly toward the main conversion action.",
        client: "MyTech",
        whatWeDid: ["Information architecture", "UX writing", "UX/UI Design", "Animated front-end"],
      },
    },
  },
  {
    slug: "bankook-landing",
    externalUrl: "https://dribbble.com/shots/25702861-Bankook-Landing-page-para-banco-digital",
    cover: Project04,
    tags: ["UX/UI Design", "Web", "Landing Page", "Bank"],
    media: [
      { type: "image", src: Project04, alt: "Bankook landing page" },
      { type: "image", src: Project04, alt: "Bankook hero and product blocks" },
      { type: "video", src: "https://www.youtube.com/embed/7QbW9n4z9qQ", title: "Bankook design presentation" },
    ],
    locale: {
      pt: {
        title: "Bankook - Landing Page para Banco Digital",
        subtitle: "Pagina comercial para produto financeiro digital.",
        description:
          "Criamos uma experiencia clara e confiavel para comunicar beneficios do produto, reforcar credibilidade e aumentar interesse por abertura de conta.",
        client: "Bankook",
        whatWeDid: ["Pesquisa de referencias", "Design de interface", "Copy de conversao", "Prototipo de navegacao"],
      },
      en: {
        title: "Bankook - Landing Page for Digital Bank",
        subtitle: "Commercial page for a digital financial product.",
        description:
          "We designed a clear and trustworthy experience to communicate product benefits, reinforce credibility, and increase account opening intent.",
        client: "Bankook",
        whatWeDid: ["Reference research", "Interface design", "Conversion copy", "Navigation prototype"],
      },
    },
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
