
export interface NavLink {
  href: string;
  label: string;
}

export interface Fact {
  title: string;
  content: string;
}

export interface Quote {
  text: string;
  author: string;
  title: string;
}

export interface TimelineEvent {
  title: string;
  date: string;
}

export interface Document {
  title: string;
  fileName: string;
  href: string;
}

export interface MediaAsset {
  title: string;
  description: string;
  imgSrc: string;
  href: string;
}

export interface LiveUpdate {
  time: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
