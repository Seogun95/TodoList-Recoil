import { useRecoilValue } from 'recoil';
import { filteredTodoListState, todoStateAtom } from 'atom';
import { TodoTemplate } from './TodoTemplate';
import { Todo } from './Todo';

export function TodoList() {
  const todoText = useRecoilValue(todoStateAtom);
  const [toDos, doing, done] = useRecoilValue(filteredTodoListState);

  return (
    <>
      <h1>TODO LIST</h1>
      <hr />
      <div>
        <TodoTemplate />
      </div>
      <hr />
      <h2>진행 예정 목록</h2>
      <ul>{toDos.map(v => <Todo key={v.id} {...v} />).reverse()}</ul>
      <hr />
      <h2>진행 중</h2>
      <ul>{doing.map(v => <Todo key={v.id} {...v} />).reverse()}</ul>
      <hr />
      <h2>완료</h2>
      <ul>{done.map(v => <Todo key={v.id} {...v} />).reverse()}</ul>
      <hr />
    </>
  );
}
