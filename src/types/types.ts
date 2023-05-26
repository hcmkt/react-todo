import { filters } from '@/constants/constants';

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type Filter = keyof typeof filters;
