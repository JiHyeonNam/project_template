import { makeAutoObservable } from 'mobx';

export class SubjectStore {
  private readonly _count: number;
  constructor() {
    this._count = 0;
    makeAutoObservable(this);
  }

  get count(): number {
    return this._count;
  }

  set count(count: number) {
    this.count = count;
  }
}
