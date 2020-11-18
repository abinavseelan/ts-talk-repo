export {};

function SuperMap(input, cb) {
    if (Array.isArray(input)) {
        return input.map(value => cb(value));
    };

    return Object.keys(input).reduce((agg, key) => {
        agg[key] = cb(input[key]);
        return agg;
    }, {});
}

const callbackFunction = (value) => {
    return value.length > 5;
}

const obj = {
    name: 'Abinav',
    age: '26'
};

const arr = ['Abinav', '26'];

const resultForObject = SuperMap(obj, callbackFunction);
const resultForArr = SuperMap(arr, callbackFunction);
