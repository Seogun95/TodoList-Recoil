import { v4 as uuidv4 } from 'uuid';
import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryState, filteredTodoListState, todoStateAtom } from 'atom';
import { TodoTemplate } from './TodoTemplate';
import { Todo } from './Todo';
import { TODO_CATEGORY } from './interface';

export function TodoList() {
  const toDos = useRecoilValue(filteredTodoListState);
  const todoCategoryArr = Object.values(TODO_CATEGORY);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value as TODO_CATEGORY);
  };

  const getAllTodo = useRecoilValue(todoStateAtom);
  let categories = getAllTodo.map(todo => todo.category);
  let allCategories = todoCategoryArr.concat(categories);
  let filteredCategories = Array.from(new Set(allCategories)).filter(
    v => !v.includes('취소')
  );

  return (
    <>
      <h1>TODO LIST</h1>
      <hr />
      <div>
        <select value={category} onInput={onInput}>
          {filteredCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <TodoTemplate />
        <h2>{category}</h2>
        {toDos.length > 0 ? (
          <ul>
            {toDos?.map(category => (
              <Todo key={uuidv4()} {...category} />
            ))}
          </ul>
        ) : (
          <span>목록이 존재하지 않습니다</span>
        )}
      </div>
      <hr />
    </>
  );
}
