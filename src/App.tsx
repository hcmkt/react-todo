import type { FC } from 'react';
import { Box, Container, Stack } from '@mui/material';
import Filter from './components/Filter';
import Input from './components/Input';
import TodoList from './components/TodoList';

const App: FC = () => {
  return (
    <Box mt="16px">
      <Container maxWidth="sm">
        <Stack gap="8px">
          <Filter />
          <Input />
          <TodoList />
        </Stack>
      </Container>
    </Box>
  );
};

export default App;
