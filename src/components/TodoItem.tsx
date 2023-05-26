import type { FC } from 'react';
import { Clear } from '@mui/icons-material';
import { Box, IconButton, Checkbox, FormControlLabel } from '@mui/material';
import { useAtom } from 'jotai';
import { toggleCheckAtom, deleteAtom } from '@/atoms/atoms';
import type { Todo } from '@/types/types';

type props = {
  todo: Todo;
};

const TodoItem: FC<props> = ({ todo }) => {
  const [, toggleCheck] = useAtom(toggleCheckAtom);
  const [, _delete] = useAtom(deleteAtom);

  return (
    <Box display="flex">
      <FormControlLabel
        control={
          <Checkbox
            checked={todo.completed}
            onClick={() => toggleCheck(todo.id)}
          />
        }
        label={todo.text}
        sx={{ flex: 1, textDecoration: todo.completed ? 'line-through' : '' }}
      />
      <IconButton onClick={() => _delete(todo.id)}>
        <Clear />
      </IconButton>
    </Box>
  );
};

export default TodoItem;
