// ✏️  Competitive exams shown on the site. Add or edit freely.
// `tests` lists mock-test ids (file names in src/data/tests/ without .json).

export interface Exam {
  slug: string;
  name: string;
  full: string;
  icon: string;
  tone: string;
  about: string;
  subjects: string[];
  tests: string[];
}

export const EXAMS: Exam[] = [
  {
    slug: 'mp-si',
    name: 'MP SI / Subedar',
    full: 'MP Police Sub-Inspector & Subedar (ESB)',
    icon: '🛡️',
    tone: 'tone-blue',
    about: 'Recruitment exam conducted by the MP Employee Selection Board (ESB) for Sub-Inspector, Subedar and related posts.',
    subjects: ['Hindi', 'English', 'General Knowledge & MP GK', 'History, Geography & Civics', 'Reasoning', 'Computer', 'Physics, Chemistry & Biology'],
    tests: ['mp-gk-practice-1'],
  },
  {
    slug: 'mp-police-constable',
    name: 'MP Police Constable',
    full: 'MP Police Constable Recruitment (ESB)',
    icon: '👮',
    tone: 'tone-teal',
    about: 'Constable recruitment conducted by the MP ESB. Covers GK, reasoning, science and simple arithmetic.',
    subjects: ['General Knowledge & Reasoning', 'Intelligence Test', 'Science & Simple Arithmetic'],
    tests: ['mp-gk-practice-1'],
  },
  {
    slug: 'mp-patwari',
    name: 'MP Patwari',
    full: 'MP Patwari / Group-4 Recruitment',
    icon: '📜',
    tone: 'tone-amber',
    about: 'Revenue department recruitment covering GK, Hindi, English, maths, reasoning and computer.',
    subjects: ['General Knowledge', 'Hindi', 'English', 'Mathematics', 'Reasoning', 'Computer'],
    tests: ['mp-gk-practice-1'],
  },
  {
    slug: 'mppsc',
    name: 'MPPSC',
    full: 'MP Public Service Commission — State Service Exam',
    icon: '🏛️',
    tone: 'tone-purple',
    about: 'State civil services exam — Prelims, Mains and Interview. MP-specific GK carries real weight here.',
    subjects: ['History', 'Geography', 'Polity', 'Economy', 'Science & Tech', 'MP GK', 'Current Affairs'],
    tests: ['mp-gk-practice-1'],
  },
  {
    slug: 'mp-tet',
    name: 'MP TET',
    full: 'MP Teacher Eligibility Test (Varg 1, 2, 3)',
    icon: '🍎',
    tone: 'tone-green',
    about: 'Teacher eligibility test. Child development and pedagogy, languages and subject knowledge.',
    subjects: ['Child Development & Pedagogy', 'Hindi', 'English / Sanskrit', 'Mathematics', 'Environmental Studies'],
    tests: [],
  },
  {
    slug: 'ssc-railway',
    name: 'SSC & Railway',
    full: 'SSC GD, CGL, CHSL and Railway (NTPC, Group D)',
    icon: '🚆',
    tone: 'tone-red',
    about: 'Central government exams. Strong overlap with MP exams in reasoning, maths and general awareness.',
    subjects: ['General Intelligence & Reasoning', 'Quantitative Aptitude', 'English', 'General Awareness'],
    tests: [],
  },
];

export const getExam = (slug: string) => EXAMS.find((e) => e.slug === slug);
