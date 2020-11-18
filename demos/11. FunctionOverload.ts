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
    return value > 50;
}

const ageMap = {
    rick: 73,
    morty: 14,
};

const ageArray = [73, 14];

const resultForObject = SuperMap(ageMap, callbackFunction);
const resultForArr = SuperMap(ageArray, callbackFunction);
