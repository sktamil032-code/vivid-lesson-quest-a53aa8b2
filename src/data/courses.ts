export interface Lesson {
  id: number;
  title: string;
  description: string;
}

export interface Course {
  id: string;
  name: string;
  emoji: string;
  color: string;
  description: string;
  longDescription: string;
  lessons: Lesson[];
}

export const courses: Course[] = [
  {
    id: 'java',
    name: 'Java',
    emoji: '☕',
    color: 'primary',
    description: 'Master object-oriented programming with Java',
    longDescription: 'Java is a versatile, object-oriented programming language used for building enterprise applications, Android apps, and web services. Learn the fundamentals and advanced concepts.',
    lessons: [
      { id: 1, title: 'Lesson 1: Overview', description: 'Introduction to Java and its ecosystem' },
      { id: 2, title: 'Lesson 2: Syntax', description: 'Java syntax, data types, and control structures' },
      { id: 3, title: 'Lesson 3: Mini project', description: 'Build your first Java application' },
    ],
  },
  {
    id: 'cpp',
    name: 'C++',
    emoji: '🧠',
    color: 'accent',
    description: 'Learn powerful system programming with C++',
    longDescription: 'C++ is a high-performance language perfect for game development, system software, and applications requiring real-time processing. Dive into memory management and OOP.',
    lessons: [
      { id: 1, title: 'Lesson 1: Overview', description: 'C++ fundamentals and compilation' },
      { id: 2, title: 'Lesson 2: Syntax', description: 'Pointers, references, and memory management' },
      { id: 3, title: 'Lesson 3: Mini project', description: 'Create a simple game in C++' },
    ],
  },
  {
    id: 'c',
    name: 'C',
    emoji: '🔬',
    color: 'secondary',
    description: 'Understand the foundation of modern programming',
    longDescription: 'C is the mother of modern programming languages. Learn how computers work at a fundamental level through this powerful procedural language.',
    lessons: [
      { id: 1, title: 'Lesson 1: Overview', description: 'Introduction to C programming' },
      { id: 2, title: 'Lesson 2: Syntax', description: 'Functions, arrays, and pointers' },
      { id: 3, title: 'Lesson 3: Mini project', description: 'Build a CLI calculator' },
    ],
  },
  {
    id: 'python',
    name: 'Python',
    emoji: '🐍',
    color: 'success',
    description: 'Start coding with the most beginner-friendly language',
    longDescription: 'Python is perfect for beginners and professionals alike. Used in web development, data science, AI, and automation, Python makes programming accessible and fun.',
    lessons: [
      { id: 1, title: 'Lesson 1: Overview', description: 'Python basics and setup' },
      { id: 2, title: 'Lesson 2: Syntax', description: 'Variables, loops, and functions' },
      { id: 3, title: 'Lesson 3: Mini project', description: 'Create a web scraper' },
    ],
  },
];
