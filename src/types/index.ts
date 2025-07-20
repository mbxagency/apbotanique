// Tipos principais do projeto Botanique

// Tipos de propriedade
export interface Property {
  id: string;
  type: string;
  area: string;
  bedrooms: number;
  suites: number;
  parking: number;
  price: string;
  address: Address;
  features: string[];
  images: PropertyImage[];
}

export interface Address {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface PropertyImage {
  id: string;
  src: string;
  alt: string;
  category: ImageCategory;
  width: number;
  height: number;
}

export type ImageCategory =
  | 'fachada'
  | 'sala'
  | 'suite'
  | 'cozinha'
  | 'quartos'
  | 'sacada'
  | 'academia'
  | 'areas-comuns'
  | 'infraestrutura';

// Tipos de contato
export interface Contact {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredContact: 'email' | 'phone' | 'whatsapp';
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  company: string;
}

// Tipos de componentes
export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  title: string;
  description: string;
  image?: string;
  className?: string;
  children?: React.ReactNode;
}

// Tipos de animação
export interface AnimationProps {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
  children: React.ReactNode;
}

// Tipos de formulário
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

// Tipos de configuração
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  property: Property;
  contact: ContactInfo;
  social: {
    instagram: string;
    facebook: string;
    whatsapp: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  images: {
    hero: string;
    og: string;
    favicon: string;
  };
}

// Tipos de utilitários
export type ClassNameValue = string | number | boolean | null | undefined;
export type ClassNameArray = ClassNameValue[];
export type ClassNameObject = Record<string, ClassNameValue>;
export type ClassNameInput = ClassNameValue | ClassNameArray | ClassNameObject;

// Tipos de API
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Tipos de SEO
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
}

// Tipos de navegação
export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavigationItem[];
}

export interface NavigationProps {
  items: NavigationItem[];
  className?: string;
}
