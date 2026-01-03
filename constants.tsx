
import { AppState } from './types';

export const INITIAL_STATE: AppState = {
  settings: {
    siteName: "Sugeos Tech Systems",
    contactEmail: "sugeostechsystems@gmail.com",
    phoneNumber: "9052773024",
    address: "Guntur, Andhra Pradesh, India",
    socials: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    },
    darkMode: true,
    themePrimaryColor: "#0ea5e9"
  },
  content: {
    heroTitle: "Engineering the Future of Digital Experience",
    heroSubtitle: "We build high-performance software solutions for visionaries and enterprises. From concept to deployment, we are your strategic technology partner.",
    aboutText: "Sugeos Tech Systems started with a simple goal: to make world-class software accessible to businesses of all sizes. Today, we are a team of passionate engineers and designers.",
    mission: "To empower businesses through innovative technology solutions that drive growth and efficiency.",
    vision: "To become the global standard for excellence in software craftsmanship and digital transformation."
  },
  services: [
    {
      id: "1",
      title: "Custom Web Applications",
      description: "Scalable, secure, and modern web platforms built with React and Node.js.",
      icon: "Globe"
    },
    {
      id: "2",
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android devices.",
      icon: "Smartphone"
    },
    {
      id: "3",
      title: "Cloud Architecture",
      description: "Advanced AWS/Azure infrastructure design with a focus on reliability.",
      icon: "Cloud"
    },
    {
      id: "4",
      title: "AI & Machine Learning",
      description: "Integrating intelligent algorithms to automate and enhance business processes.",
      icon: "Cpu"
    }
  ],
  products: [
    {
      id: "p1",
      name: "Sugeos ERP",
      description: "A comprehensive enterprise resource planning system for manufacturing.",
      price: "$299/mo",
      image: "https://picsum.photos/seed/erp/800/600",
      features: ["Inventory Tracking", "HR Management", "Automated Billing"]
    },
    {
      id: "p2",
      name: "Flux Commerce",
      description: "Headless e-commerce engine designed for massive scale and speed.",
      price: "$149/mo",
      image: "https://picsum.photos/seed/commerce/800/600",
      features: ["Global CDN", "Multi-currency Support", "1-click Checkout"]
    }
  ],
  blogPosts: [
    {
      id: "b1",
      title: "The Rise of Edge Computing in 2024",
      slug: "rise-of-edge-computing",
      excerpt: "Why decentralizing your data processing is the key to faster user experiences.",
      content: "<p>Edge computing is transforming how data is processed...</p>",
      image: "https://picsum.photos/seed/edge/1200/800",
      date: "2024-05-20",
      author: "Jane Doe",
      category: "Technology",
      tags: ["Cloud", "Latency", "WebDev"],
      published: true
    },
    {
      id: "b2",
      title: "Building Scalable Microservices",
      slug: "scalable-microservices",
      excerpt: "Best practices for architecting distributed systems that last.",
      content: "<p>Microservices offer flexibility but come with complexity...</p>",
      image: "https://picsum.photos/seed/micro/1200/800",
      date: "2024-05-15",
      author: "John Smith",
      category: "Architecture",
      tags: ["DevOps", "Microservices", "Scalability"],
      published: true
    }
  ]
};
