import React from 'react';
import { ITodoValues } from './interface';
import { useSetRecoilState } from 'recoil';
import { todoStateAtom } from 'atom';
import { TODO_CATEGORY } from 'utils';

export function Todo({ todoText, category, id }: ITodoValues) {
  const setTodo = useSetRecoilState(todoStateAtom);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name: buttonName },
    } = e;

    setTodo(prev =>
      prev.map(oldTodo => {
        return oldTodo.id === id
          ? { ...oldTodo, category: buttonName as ITodoValues['category'] }
          : oldTodo;
      })
    );
  };

  return (
    <li>
      {todoText}
      {category === TODO_CATEGORY.TODO && (
        <>
          <button name={TODO_CATEGORY.DOING} onClick={onClick}>
            {TODO_CATEGORY.DOING}
          </button>
          <button name={TODO_CATEGORY.DONE} onClick={onClick}>
            {TODO_CATEGORY.DONE}
          </button>
        </>
      )}
      {category === TODO_CATEGORY.DOING && (
        <>
          <button name={TODO_CATEGORY.TODO} onClick={onClick}>
            {TODO_CATEGORY.CANCEL}
          </button>
          <button name={TODO_CATEGORY.DONE} onClick={onClick}>
            {TODO_CATEGORY.DONE}
          </button>
        </>
      )}
      {category === TODO_CATEGORY.DONE && (
        <>
          <button name={TODO_CATEGORY.TODO} onClick={onClick}>
            {TODO_CATEGORY.CANCEL}
          </button>
        </>
      )}
    </li>
  );
}
