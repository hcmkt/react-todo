import { atom } from 'jotai';
import { filters, initialTodos } from '@/constants/constants';
import type { Todo, Filter } from '@/types/types';

export const todosAtom = atom<Todo[]>(initialTodos);
export const filterAtom = atom<Filter>('all');

export const filteredAtom = atom((get) => {
  const filter = get(filterAtom);
  const todos = get(todosAtom);

  return todos.filter(filters[filter]);
});

export const countsAtom = atom((get) => {
  const todos = get(todosAtom);

  return Object.entries(filters).reduce(
    (counts, [filter, callback]) => ({
      ...counts,
      [filter]: todos.filter(callback).length,
    }),
    {} as Record<string, number>
  );
});

export const addAtom = atom(null, (get, set, text: string) => {
  set(todosAtom, [
    ...get(todosAtom),
    {
      id: new Date().getTime(),
      text: text,
      completed: false,
    },
  ]);
});

export const toggleCheckAtom = atom(null, (get, set, id: number) => {
  set(
    todosAtom,
    get(todosAtom).map((todo) =>
      todo.id === id ? { ...todo, ...{ completed: !todo.completed } } : todo
    )
  );
});

export const deleteAtom = atom(null, (get, set, id: number) => {
  set(
    todosAtom,
    get(todosAtom).filter((todo) => todo.id !== id)
  );
});
