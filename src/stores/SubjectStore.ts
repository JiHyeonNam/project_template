import { makeAutoObservable } from "mobx";

export class SubjectStore {
  private _count: number;
  constructor() {
    this._count = 0;
    makeAutoObservable(this);
  }

  get count() {
    return this._count;
  }

  set count(count: number) {
    this.count = count;
  }
}
