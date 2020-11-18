export {};

function convertToUpperCase<T extends any | any[]>(value: T): T extends (infer R)[] ? R[] : T extends infer R ? R : never {
    if (Array.isArray(value)) {
        return value.map((val) => {
            if (typeof val !== 'string') {
                throw new Error('You shall not pass!');
            }
            return val.toUpperCase();
        }) as any;
    };

    if (typeof value === 'string') {
        return value.toUpperCase() as any;
    }

    throw new Error('You shall not pass!');
}

const result1 = convertToUpperCase('Foo');
const result2 = convertToUpperCase(['Foo']);