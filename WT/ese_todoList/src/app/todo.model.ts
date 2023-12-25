export class ToDo {
  id!: number;
  text: string;
  status: 'pending' | 'inprogress' | 'done';

  constructor(text: string, status: 'pending' | 'inprogress' | 'done') {
    this.text = text;
    this.status = status;
  }
}
