export interface Task {
  id?: string;
  title: string;
  status: 'open' | 'done';
}
