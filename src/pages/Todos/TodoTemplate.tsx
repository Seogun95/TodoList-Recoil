import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ITodoValues } from './interface';
import { useSetRecoilState } from 'recoil';
import { todoStateAtom } from 'atom';
import { TODO_CATEGORY } from 'utils';

export function TodoTemplate() {
  const { register, handleSubmit, reset, setFocus, watch } =
    useForm<ITodoValues>();

  const setTodo = useSetRecoilState(todoStateAtom);

  const onTodoSubmit: SubmitHandler<ITodoValues> = ({ todoText }) => {
    if (watch('todoText') !== '') {
      setTodo(prev => [
        { todoText, category: TODO_CATEGORY.TODO, id: Date.now() },
        ...prev,
      ]);
      reset();
    }
  };

  useEffect(() => {
    setFocus('todoText');
  });

  return (
    <>
      <form onSubmit={handleSubmit(onTodoSubmit)}>
        <input
          {...register('todoText', {
            required: '할일을 입력해주세요.',
            minLength: 1,
          })}
          placeholder="할일을 입력해주세요"
        />
        <button>제출</button>
      </form>
    </>
  );
}
