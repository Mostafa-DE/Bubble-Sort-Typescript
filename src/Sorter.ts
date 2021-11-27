interface Sortable {
  length: number;
  swap(leftIndx: number, rightIndx: number): void;
  compare(leftIndx: number, rightIndx: number): boolean;
}

export abstract class Sorter {
  abstract compare(leftIndx: number, rightIndx: number): boolean;
  abstract swap(leftIndx: number, rightIndx: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
