
import type { NavLink, Fact, Quote, TimelineEvent, Document, MediaAsset, LiveUpdate, FaqItem } from './types';

export const navLinks: NavLink[] = [
  { href: '#overview', label: 'Overview' },
  { href: '#quick-facts', label: 'Quick Facts' },
  { href: '#quotes', label: 'Quotes' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#documents', label: 'Documents' },
  { href: '#media', label: 'Media' },
  { href: '#contact', label: 'Contact' },
  { href: '#faq', label: 'FAQ' },
];

export const quickFacts: Fact[] = [
  { title: "What’s happening", content: "An urgent court application seeking injunctive relief regarding a City Hall flag-raising scheduled for September 2025." },
  { title: "Who is filing", content: "Tafsik Organization, a Jewish civil-rights group headquartered in Toronto." },
  { title: "What we’re asking the court", content: "To pause or prevent the event from proceeding until City policy is properly applied." },
  { title: "Why it matters", content: "Municipal rules must be applied consistently. Clear process prevents escalation and protects the public." },
  { title: "Where & when", content: "Toronto City Hall • Planned event: September 15 • Filing submitted: September 5 • Hearing: TBD." },
  { title: "Spokespeople", content: "Amir Epstein (Executive Director) • Legal counsel • Media line: +1 123 456 7890." },
];

export const quotes: Quote[] = [
  { text: "This isn’t about silencing anyone. It’s about City Hall following its own rules so every group is treated fairly and the public stays safe.", author: "Amir Epstein", title: "Executive Director, Tafsik" },
  { text: "The legal test for injunctive relief is clear. We believe the facts and timing meet that test, and the remedy is both narrow and responsible.", author: "Jane Doe", title: "Counsel to Tafsik" },
];

export const timelineEvents: TimelineEvent[] = [
  { title: "Request submitted", date: "August 20, 2025" },
  { title: "City approval issued", date: "August 28, 2025" },
  { title: "Tafsik notice of concern", date: "September 2, 2025" },
  { title: "Injunction filed", date: "September 5, 2025" },
  { title: "Hearing window", date: "September 8-12" },
  { title: "Planned event", date: "September 15, 2025" },
  { title: "Next steps", date: "Updates ongoing" },
];

export const documents: Document[] = [
  { title: "Press Release (PDF, 1.2 MB)", fileName: "Tafsik-Press-Release-Injunction-City-Hall.pdf", href: "/Tafsik-Press-Release-Injunction-City-Hall.pdf" },
  { title: "Notice of Application (PDF)", fileName: "Tafsik-Application-2025-09-05.pdf", href: "/Tafsik-Application-2025-09-05.pdf" },
  { title: "City Policy Excerpts (PDF)", fileName: "City-Protocol-Excerpts-Referenced.pdf", href: "/City-Protocol-Excerpts-Referenced.pdf" },
  { title: "One-page Fact Sheet (PDF)", fileName: "Injunction-Fast-Facts.pdf", href: "/Injunction-Fast-Facts.pdf" },
];

export const mediaAssets: MediaAsset[] = [
    { title: "Headshots — Amir Epstein", description: "JPG & PNG, 3000x3000", imgSrc: "https://picsum.photos/seed/amir/500/500", href: "/media/amir-epstein-headshots.zip" },
    { title: "Counsel headshot", description: "JPG & PNG, 3000x3000", imgSrc: "https://picsum.photos/seed/counsel/500/500", href: "/media/counsel-headshots.zip" },
    { title: "City Hall exterior", description: "JPG, 4000x2667", imgSrc: "https://picsum.photos/seed/cityhallasset/500/500", href: "/media/city-hall-exterior.jpg" },
    { title: "B-roll & Logo Pack", description: "MP4 & SVG/PNG", imgSrc: "https://picsum.photos/seed/broll/500/500", href: "/media/b-roll-logos.zip" },
];

export const liveUpdates: LiveUpdate[] = [
  { time: "14:30 ET", text: "Notice of Application has been formally filed with the Ontario Superior Court of Justice." },
  { time: "14:35 ET", text: "Press release has been distributed to national and local media outlets." },
  { time: "15:00 ET", text: "Our legal team is preparing for the initial case conference." },
  { time: "16:15 ET", text: "A date for the hearing is expected to be set within the next 48 hours." },
];

export const faqItems: FaqItem[] = [
    { question: "Are you opposing a particular community?", answer: "No. This is about consistent application of municipal policy and public safety planning—applied equally to all." },
    { question: "What remedy are you seeking?", answer: "A narrowly tailored pause that allows the City to follow its own process before any event proceeds." },
    { question: "Isn’t this a free-expression issue?", answer: "The application focuses on process and safety, not the suppression of speech or lawful assembly." },
    { question: "What happens if the injunction is denied?", answer: "We’ll respect the court’s decision and continue to engage the City on process and safety measures." },
    { question: "Where can we read the filings?", answer: "See Documents & Statements above; newly stamped documents will be added as they become available." },
];
