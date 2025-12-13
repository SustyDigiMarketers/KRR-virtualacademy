export interface NavItem {
  label: string;
  path: string;
}

export interface Teacher {
  id: number;
  name: string;
  subject: string;
  experience: string;
  image: string;
  bio: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: any; // Lucide icon type
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface Facility {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
