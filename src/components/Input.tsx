import type { FC } from 'react';
import { TextField } from '@mui/material';
import { useAtom } from 'jotai';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { addAtom } from '@/atoms/atoms';

interface IFormInput {
  text: string;
}

const Input: FC = () => {
  const [, add] = useAtom(addAtom);
  const { control, handleSubmit, reset } = useForm<IFormInput>({
    defaultValues: {
      text: '',
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    add(data.text);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="text"
        control={control}
        rules={{ required: true, validate: (text) => !!text.trim() }}
        render={({ field }) => (
          <TextField {...field} size="small" sx={{ width: '100%' }} />
        )}
      />
    </form>
  );
};

export default Input;
