import type { FC } from 'react';
import { Stack } from '@mui/material';
import { useAtom } from 'jotai';
import TodoItem from './TodoItem';
import { filteredAtom } from '@/atoms/atoms';

const TodoList: FC = () => {
  const [todos] = useAtom(filteredAtom);

  return (
    <Stack>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Stack>
  );
};

export default TodoList;
