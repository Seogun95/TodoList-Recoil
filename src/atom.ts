import { atom, selector } from 'recoil';
import { ITodoValues, TODO_CATEGORY } from 'pages/Todos';
import { recoilPersist } from 'recoil-persist';

const { persistAtom: darkPersist } = recoilPersist({
  key: 'themeLocal',
  storage: localStorage,
});

export const isDarkAtom = atom<boolean>({
  key: 'isDark',
  default: true,
  effects_UNSTABLE: [darkPersist],
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

const { persistAtom: todoPersist } = recoilPersist({
  key: 'todoLocal', // 로컬스토리지에서 사용할 키 이름
  storage: localStorage, // 사용할 스토리지 타입
});

export const todoStateAtom = atom<ITodoValues[]>({
  key: 'todos',
  default: [],
  effects_UNSTABLE: [todoPersist],
});

export const categoryListState = atom<string[]>({
  key: 'categoryList',
  default: Object.values(TODO_CATEGORY),
});

export const categoryState = atom({
  key: 'categoryTitle',
  default: TODO_CATEGORY.TODO,
});

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const toDos = get(todoStateAtom);
    const getCategory = get(categoryState);
    return toDos.filter(v => v.category === getCategory);
  },
});
