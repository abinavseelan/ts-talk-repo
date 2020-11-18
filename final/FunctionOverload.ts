export {};

type Input = Record<string, any> | Array<any>;
type CallbackFunction = (value: any) => any;

function SuperMap<T extends CallbackFunction>(input: Array<any>, cb: T): Array<ReturnType<T>>;
function SuperMap<T extends CallbackFunction>(input: Record<string, any>, cb: T): Record<string, ReturnType<T>>;
function SuperMap(input: Input, cb: CallbackFunction) {
    if (Array.isArray(input)) {
        return input.map(value => cb(value));
    };

    return Object.keys(input).reduce((agg, key) => {
        agg[key] = cb(input[key]);
        return agg;
    }, {} as Record<string, ReturnType<CallbackFunction>>);
}

const callbackFunction = (value: string): boolean => {
    return value.length > 5;
}

const obj = {
    name: 'Abinav',
    age: '26'
};

const arr = ['Abinav', '26'];

const resultForObject = SuperMap(obj, callbackFunction);
const resultForArr = SuperMap(arr, callbackFunction);

