// MP Board (MPBSE) follows NCERT textbooks for Class 9–12.
// ✏️  To add chapters to a subject, fill its `chapters` array.
// To add notes for a chapter, create:
//   src/content/notes/<class-slug>/<subject-slug>/<chapter-slug>.md
// The chapter slug is made automatically from the chapter number: ch-1, ch-2, ...

export interface Subject {
  slug: string;
  name: string;
  hindi: string;
  icon: string;
  tone: string;
  chapters: string[];
}
export interface ClassInfo {
  slug: string;
  name: string;
  short: string;
  blurb: string;
  tone: string;
  subjects: Subject[];
}

const s = (slug: string, name: string, hindi: string, icon: string, tone: string, chapters: string[] = []): Subject =>
  ({ slug, name, hindi, icon, tone, chapters });

export const CLASSES: ClassInfo[] = [
  {
    slug: 'class-9',
    name: 'Class 9',
    short: '9',
    blurb: 'Build strong basics in Science, Maths and Social Science.',
    tone: 'tone-teal',
    subjects: [
      s('science', 'Science', 'विज्ञान', '🔬', 'tone-green', [
        'Matter in Our Surroundings',
        'Is Matter Around Us Pure?',
        'Atoms and Molecules',
        'Structure of the Atom',
        'The Fundamental Unit of Life',
        'Tissues',
        'Motion',
        'Force and Laws of Motion',
        'Gravitation',
        'Work and Energy',
        'Sound',
        'Improvement in Food Resources',
      ]),
      s('maths', 'Mathematics', 'गणित', '➗', 'tone-blue'),
      s('social-science', 'Social Science', 'सामाजिक विज्ञान', '🌏', 'tone-amber'),
      s('english', 'English', 'अंग्रेज़ी', '📘', 'tone-purple'),
      s('hindi', 'Hindi', 'हिंदी', 'अ', 'tone-red'),
    ],
  },
  {
    slug: 'class-10',
    name: 'Class 10',
    short: '10',
    blurb: 'Board exam year — chapter notes, important questions and practice.',
    tone: 'tone-blue',
    subjects: [
      s('science', 'Science', 'विज्ञान', '🔬', 'tone-green', [
        'Chemical Reactions and Equations',
        'Acids, Bases and Salts',
        'Metals and Non-metals',
        'Carbon and its Compounds',
        'Life Processes',
        'Control and Coordination',
        'How do Organisms Reproduce?',
        'Heredity',
        'Light – Reflection and Refraction',
        'The Human Eye and the Colourful World',
        'Electricity',
        'Magnetic Effects of Electric Current',
        'Our Environment',
      ]),
      s('maths', 'Mathematics', 'गणित', '➗', 'tone-blue', [
        'Real Numbers',
        'Polynomials',
        'Pair of Linear Equations in Two Variables',
        'Quadratic Equations',
        'Arithmetic Progressions',
        'Triangles',
        'Coordinate Geometry',
        'Introduction to Trigonometry',
        'Some Applications of Trigonometry',
        'Circles',
        'Areas Related to Circles',
        'Surface Areas and Volumes',
        'Statistics',
        'Probability',
      ]),
      s('social-science', 'Social Science', 'सामाजिक विज्ञान', '🌏', 'tone-amber'),
      s('english', 'English', 'अंग्रेज़ी', '📘', 'tone-purple'),
      s('hindi', 'Hindi', 'हिंदी', 'अ', 'tone-red'),
    ],
  },
  {
    slug: 'class-11',
    name: 'Class 11',
    short: '11',
    blurb: 'Start your stream right — Science, Commerce or Arts.',
    tone: 'tone-purple',
    subjects: [
      s('physics', 'Physics', 'भौतिक विज्ञान', '⚛️', 'tone-blue'),
      s('chemistry', 'Chemistry', 'रसायन विज्ञान', '🧪', 'tone-green'),
      s('maths', 'Mathematics', 'गणित', '➗', 'tone-purple'),
      s('biology', 'Biology', 'जीव विज्ञान', '🧬', 'tone-teal'),
      s('english', 'English', 'अंग्रेज़ी', '📘', 'tone-amber'),
    ],
  },
  {
    slug: 'class-12',
    name: 'Class 12',
    short: '12',
    blurb: 'Board + entrance prep — every chapter, every important topic.',
    tone: 'tone-amber',
    subjects: [
      s('physics', 'Physics', 'भौतिक विज्ञान', '⚛️', 'tone-blue', [
        'Electric Charges and Fields',
        'Electrostatic Potential and Capacitance',
        'Current Electricity',
        'Moving Charges and Magnetism',
        'Magnetism and Matter',
        'Electromagnetic Induction',
        'Alternating Current',
        'Electromagnetic Waves',
        'Ray Optics and Optical Instruments',
        'Wave Optics',
        'Dual Nature of Radiation and Matter',
        'Atoms',
        'Nuclei',
        'Semiconductor Electronics',
      ]),
      s('chemistry', 'Chemistry', 'रसायन विज्ञान', '🧪', 'tone-green', [
        'Solutions',
        'Electrochemistry',
        'Chemical Kinetics',
        'The d- and f-Block Elements',
        'Coordination Compounds',
        'Haloalkanes and Haloarenes',
        'Alcohols, Phenols and Ethers',
        'Aldehydes, Ketones and Carboxylic Acids',
        'Amines',
        'Biomolecules',
      ]),
      s('maths', 'Mathematics', 'गणित', '➗', 'tone-purple', [
        'Relations and Functions',
        'Inverse Trigonometric Functions',
        'Matrices',
        'Determinants',
        'Continuity and Differentiability',
        'Application of Derivatives',
        'Integrals',
        'Application of Integrals',
        'Differential Equations',
        'Vector Algebra',
        'Three Dimensional Geometry',
        'Linear Programming',
        'Probability',
      ]),
      s('biology', 'Biology', 'जीव विज्ञान', '🧬', 'tone-teal', [
        'Sexual Reproduction in Flowering Plants',
        'Human Reproduction',
        'Reproductive Health',
        'Principles of Inheritance and Variation',
        'Molecular Basis of Inheritance',
        'Evolution',
        'Human Health and Disease',
        'Microbes in Human Welfare',
        'Biotechnology: Principles and Processes',
        'Biotechnology and its Applications',
        'Organisms and Populations',
        'Ecosystem',
        'Biodiversity and Conservation',
      ]),
      s('english', 'English', 'अंग्रेज़ी', '📘', 'tone-amber'),
    ],
  },
];

export const chapterSlug = (i: number) => `ch-${i + 1}`;
export const getClass = (slug: string) => CLASSES.find((c) => c.slug === slug);
