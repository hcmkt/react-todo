import type { Todo } from '@/types/types';

export const filters = {
  all: () => true,
  completed: (todo: Todo) => todo.completed,
  incompleted: (todo: Todo) => !todo.completed,
} as const;

export const initialTodos: Todo[] = [
  {
    id: 1685085930860,
    text: 'Mauris ac malesuada velit',
    completed: false,
  },
  {
    id: 1685085985581,
    text: 'ullamcorper imperdiet sem',
    completed: false,
  },
  {
    id: 1685086009398,
    text: 'Suspendisse gravida nulla',
    completed: true,
  },
  {
    id: 1685086034169,
    text: 'eleifend sed vel diam',
    completed: false,
  },
  {
    id: 1685086057591,
    text: 'sed pellentesque magna vehicula',
    completed: true,
  },
];
