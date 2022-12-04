// import icons
import { FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";

// import images
import AboutImg from "../src/assets/img/about.png";
import Feature1Img from "../src/assets/img/features/feature1.png";
import Feature2Img from "../src/assets/img/features/feature2.png";
import Feature3Img from "../src/assets/img/features/feature3.png";
import Feature4Img from "../src/assets/img/features/feature4.png";
import Avatar1Img from "../src/assets/img/testimonials/avatar1.png";
import Avatar2Img from "../src/assets/img/testimonials/avatar2.png";
import Avatar3Img from "../src/assets/img/testimonials/avatar3.png";
import LogoV2 from "../src/assets/img/logo-v2.png";
import HeroImage from "../src/assets/img/hero-img.png";
import Feature1BgImg from "../src/assets/img/features/feature1_bg.png";
import Feature2BgImg from "../src/assets/img/features/feature2_bg.png";
import Feature3BgImg from "../src/assets/img/features/feature3_bg.png";
import Feature4BgImg from "../src/assets/img/features/feature4_bg.png";

export const navigationData = [
  {
    name: "Deliver",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Features",
    href: "#",
  },
  {
    name: "Signup",
    href: "#",
  },
];

export const heroData = {
  title: `TITIP YUK!`,
  subtitle:
    "Titip produk apapun dari Amerika, Inggris, China, Hong Kong & Singapura.",
  btnText: "Get Started",
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: "About Us",
  subtitle:
    "Bebas beli apapun untuk dikirim ke Alamat kamu sendiri dari US, UK, China & Singapore.",
};

export const featuresData = {
  title: "Kategori Barang",
  subtitle:
    "Mobile phone holder,  Car phone charger,  Motorcycle safety products,  Sports pockets accessories,  Other body and accessories,  Battery tester,  Driving recorder,  Motorcycle walking system parts,  Car air pump,  Headlights headlights,  Motorcycle parts,  Motorcycle supplies and accessories,  Motorcycle instrument,  Car display,  Car mirror,  Other manual screwdriver,  Paper crafts,  Motorcycle headlights headlights,  Plastic helmet,  Jack,  Car keychain,  Car storage bag storage box,  Car tissue boxset,  Motorcycle control system parts,  Wiper,  Other car small appliances,  Welcome pedal foot pedal,  Car key case,  Large field of view rearview auxiliary mirror,  Car key,  Tester,  Hardness Tester,  Car inflatable bed,  Cruise ship accessories,  Jacks for cars, dan banyak lagi.",
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: "Pembayaran",
      description: "Pay with a Visa or PayPal card and without much ado",
      linkText: "Learn more",
      delay: "400",
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: "Barang Pilihan",
      description: "We offer sale of products through the Internet..",
      linkText: "Learn more",
      delay: "700",
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: "Request Barang",
      description:
        "Print out service gives you convenience if someday you need print data, just edit it all and just print it",
      linkText: "Learn more",
      delay: "1000",
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: "Pengiriman",
      description: "In our app you can see the delay time of your order...",
      linkText: "Learn more",
      delay: "1300",
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: "Serena",
    web: "rena.com",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    delay: "300",
  },
  {
    image: Avatar2Img,
    name: "Natalia",
    web: "nataliya.com",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    delay: "600",
  },
  {
    image: Avatar3Img,
    name: "Vebin",
    web: "vebin.com",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    delay: "900",
  },
];

export const ctaData = {
  title: "Contact Us From Here",
  subtitle: "Yuk titipin aja ke kita!",
  btnText1: "Email",
  btnText2: "Whatsapp",
};

export const footerData = {
  logo: LogoV2,
  address:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  email: "info@titip.project",
  phone: "1-232-7788 (Main)",
  list1: [
    {
      name: "Profile",
      href: "#",
    },
    {
      name: "Support",
      href: "#",
    },
    {
      name: "Singn Up",
      href: "#",
    },
    {
      name: "News",
      href: "#",
    },
  ],
  list2: [
    {
      name: "Guide",
      href: "#",
    },
    {
      name: "Reports",
      href: "#",
    },
    {
      name: "Q & A",
      href: "#",
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: "#",
    },
    {
      icon: <FaInstagram />,
      href: "#",
    },
    {
      icon: <FaGithub />,
      href: "#",
    },
  ],
};

export const copyrightData = {
  text: "©Titip Yuk, 2022.",
  icon: <BsChatDotsFill />,
};
