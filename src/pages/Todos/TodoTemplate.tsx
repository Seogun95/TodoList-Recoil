import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ITodoValues } from './interface';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, todoStateAtom } from 'atom';
import { TODO_CATEGORY } from './interface';

export function TodoTemplate() {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    watch,
    formState: { errors },
  } = useForm<ITodoValues>({
    defaultValues: {
      category: TODO_CATEGORY.TODO,
    },
  });

  const setTodo = useSetRecoilState(todoStateAtom);

  const onTodoSubmit: SubmitHandler<ITodoValues> = ({ todoText, category }) => {
    if (watch('todoText') !== '') {
      const newTodo = {
        todoText,
        category: category,
        id: uuidv4(),
      };

      // Recoil 상태 업데이트
      setTodo(prev => [...prev, newTodo]);
      reset();
    }
  };

  useEffect(() => {
    setFocus('todoText');
  }, [setFocus]);

  return (
    <>
      <form onSubmit={handleSubmit(onTodoSubmit)}>
        <input
          {...register('category', {
            validate: value =>
              value.includes('취소')
                ? '사용할 수 없는 카테고리명 입니다.'
                : true,
          })}
          placeholder="커스텀 카테고리"
        />
        {errors?.category?.message}
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
