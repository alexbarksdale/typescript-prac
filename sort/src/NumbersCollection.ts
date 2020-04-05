export class NumbersCollection {
    constructor(public data: number[]) {}

    get length(): number {
        return this.data.length;
    }

    compare(leftIdx: number, rightIdx: number): boolean {
        return this.data[leftIdx] > this.data[rightIdx];
    }

    swap(leftIdx: number, rightIdx: number): void {
        const { data } = this;
        [data[leftIdx], data[rightIdx]] = [data[rightIdx], data[leftIdx]];
    }
}
