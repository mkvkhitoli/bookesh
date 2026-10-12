// ✏️  Edit this file to change site-wide details (name, links, teacher info).
export const SITE = {
  name: 'Bookesh',
  domain: 'bookesh.in',
  url: 'https://bookesh.in',
  tagline: 'Free study help for MP Board & competitive exams',
  description:
    'Free notes, chapter-wise practice and timed CBT mock tests for MP Board (Class 9–12) and competitive exams like MP Police, MP SI, Patwari, MPPSC and more.',

  // About the teacher — shown on the About page and footer.
  teacher: {
    name: 'Bookesh Team', // ← replace with your name
    role: 'Teacher & Founder',
    bio: 'I am a teacher who has spent years helping students prepare for MP Board and competitive exams. Bookesh puts the notes, practice questions and mock tests I use in class online — free for every student.',
  },

  // Leave a link empty ('') to hide that button.
  social: {
    telegram: '',
    whatsapp: '',
    youtube: '',
    instagram: '',
  },

  email: '', // e.g. 'contact@bookesh.in'
};

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'MP Board', href: '/mp-board/' },
  { label: 'Competitive Exams', href: '/exams/' },
  { label: 'Mock Tests', href: '/mock-tests/' },
  { label: 'About', href: '/about/' },
];
