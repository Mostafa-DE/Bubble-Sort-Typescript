import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndx: number, rightIndx: number): boolean {
    return this.data[leftIndx] > this.data[rightIndx];
  }

  swap(leftIndx: number, rightIndx: number): void {
    const leftHand = this.data[leftIndx];
    this.data[leftHand] = this.data[rightIndx];
    this.data[rightIndx] = leftHand;
  }
}
