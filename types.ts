
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  published: boolean;
}

export interface SiteContent {
  heroTitle: string;
  heroSubtitle: string;
  aboutText: string;
  mission: string;
  vision: string;
}

export interface SiteSettings {
  siteName: string;
  contactEmail: string;
  phoneNumber: string;
  address: string;
  socials: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  darkMode: boolean;
  themePrimaryColor: string;
}

export interface AppState {
  services: Service[];
  products: Product[];
  blogPosts: BlogPost[];
  content: SiteContent;
  settings: SiteSettings;
}
