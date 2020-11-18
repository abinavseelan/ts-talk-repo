export {};

function convertToUpperCase(value){
    if (Array.isArray(value)) {
        return value.map((val) => {
            if (typeof val !== 'string') {
                throw new Error('You shall not pass!');
            }
            return val.toUpperCase();
        });
    };

    if (typeof value === 'string') {
        return value.toUpperCase();
    }

    throw new Error('You shall not pass!');
}

const result1 = convertToUpperCase('Foo');
const result2 = convertToUpperCase(['Foo']);