class Boat {
    color: string = 'red';

    get formattedColor(): string {
        return `This boat's color is ${this.color}`;
    }

    @logError('Boat went down')
    pilot(): void {
        throw new Error();
    }
}

// Known as Decorator Factory
function logError(errorMsg: string) {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value;

        desc.value = function () {
            try {
                method();
            } catch (err) {
                console.log(errorMsg);
            }
        };
    };
}

new Boat().pilot();
