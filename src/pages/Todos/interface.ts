export enum TODO_CATEGORY {
  TODO = '진행 예정',
  DOING = '진행',
  DONE = '완료',
  CANCEL = '취소',
}

export interface ITodoValues {
  todoText: string;
  category: TODO_CATEGORY;
  id: string;
}
