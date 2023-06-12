import React from 'react';
import { ITodoValues, TODO_CATEGORY } from './interface';
import { useSetRecoilState } from 'recoil';
import { todoStateAtom } from 'atom';

export function Todo({ todoText, category, id }: ITodoValues) {
  const { TODO, DOING, DONE, CANCEL } = TODO_CATEGORY;
  const setTodo = useSetRecoilState(todoStateAtom);

  const onAddTodoHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
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

  const onDeleteTodoHandler = () => {
    setTodo(prev => {
      return prev.filter(v => v.id !== id);
    });
  };

  return (
    <li>
      {todoText}
      {category === TODO && (
        <>
          <button name={DOING} onClick={onAddTodoHandler}>
            {DOING}
          </button>
          <button onClick={onDeleteTodoHandler}>삭제</button>
        </>
      )}
      {category !== TODO && category !== DONE && (
        <>
          <button name={TODO} onClick={onAddTodoHandler}>
            {TODO_CATEGORY.CANCEL}
          </button>
          <button name={DONE} onClick={onAddTodoHandler}>
            {DONE}
          </button>
          <button onClick={onDeleteTodoHandler}>삭제</button>
        </>
      )}
      {category === DONE && (
        <>
          <button name={TODO} onClick={onAddTodoHandler}>
            {CANCEL}
          </button>
          <button onClick={onDeleteTodoHandler}>삭제</button>
        </>
      )}
    </li>
  );
}
