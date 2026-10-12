export interface Question {
  section: string;
  q: string;
  options: string[];
  answer: number; // index of the correct option (0 = A)
  solution?: string;
}
export interface MockTest {
  id: string;
  title: string;
  exam: string;
  description: string;
  durationMinutes: number;
  marksPerQuestion: number;
  negativeMarks: number;
  questions: Question[];
}

const files = import.meta.glob<Omit<MockTest, 'id'>>('./tests/*.json', { eager: true, import: 'default' });

export const TESTS: MockTest[] = Object.entries(files)
  .map(([path, data]) => ({ id: path.split('/').pop()!.replace('.json', ''), ...data }))
  .sort((a, b) => a.title.localeCompare(b.title));

export const getTest = (id: string) => TESTS.find((t) => t.id === id);
