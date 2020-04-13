class Boat {
    color: string = 'red';

    get formattedColor(): string {
        return `This boat's color is ${this.color}`;
    }

    @logError
    pilot(): void {
        throw new Error();
        console.log('Swish');
    }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
        try {
            method();
        } catch (err) {
            console.log('Oop');
        }
    };
}

new Boat().pilot();
