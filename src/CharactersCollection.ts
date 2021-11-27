import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndx: number, rightIndx: number): boolean {
    return (
      this.data[leftIndx].toLowerCase() > this.data[rightIndx].toLowerCase()
    );
  }

  swap(leftIndx: number, rightIndx: number): void {
    const characters = this.data.split("");

    const leftHand = characters[leftIndx];
    characters[leftIndx] = characters[rightIndx];
    characters[rightIndx] = leftHand;

    this.data = characters.join("");
  }
}
