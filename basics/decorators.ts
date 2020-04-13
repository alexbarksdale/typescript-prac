@classDecorator
class Boat {
    @testDecorator
    color: string = 'red';

    @testDecorator
    get formattedColor(): string {
        return `This boat's color is ${this.color}`;
    }

    @logError('Boat went down')
    pilot(@paramDecorator speed: string): void {
        if (speed === 'fast') {
            console.log('Swish');
        } else {
            console.log('Not moving');
        }
    }
}

function classDecorator(constructor: typeof Boat) {
    console.log(constructor);
}

function paramDecorator(target: any, key: string, index: number) {
    console.log(key, index);
}

function testDecorator(target: any, key: string) {
    console.log(key);
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

new Boat().color;
