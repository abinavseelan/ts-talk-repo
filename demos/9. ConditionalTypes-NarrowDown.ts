export {};

function isString(input: any) {
    return typeof input === 'string';
}

const covertToLowerCase = (value: number | string) => {
    if (isString(value)) {
        return value.toLowerCase();
    }

    return value.toString();
}