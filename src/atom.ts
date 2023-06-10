import { atom, selector } from 'recoil';
import { ITodoValues } from 'pages/Todos';
import { TODO_CATEGORY } from 'utils';

export const isDarkAtom = atom<boolean>({
  key: 'isDark',
  default: localStorage.getItem('darkMode') !== 'false',
});

interface ISignUp {
  email: string;
  id: string;
  nickname: string;
  phone: string;
  password?: string;
  password2?: string;
}
export const signUpStateAtom = atom<ISignUp[]>({
  key: 'signup',
  default: [],
});

export const todoStateAtom = atom<ITodoValues[]>({
  key: 'todos',
  default: [],
});

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const toDos = get(todoStateAtom);
    const categoryList = Object.values(TODO_CATEGORY);
    const filteredTodoList = [...categoryList].map(categoryText =>
      toDos.filter(todo => todo.category === categoryText)
    );
    return filteredTodoList;
  },
});

/*
export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const toDos = get(todoStateAtom);
    return [
      toDos.filter(toDo => toDo.category === '진행 예정'),
      toDos.filter(toDo => toDo.category === '진행'),
      toDos.filter(toDo => toDo.category === '완료'),
    ];
  },
}); */
