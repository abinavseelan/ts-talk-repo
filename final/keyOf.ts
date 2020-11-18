export {};

function extract<T>(obj: T, propertyNames: Array<keyof T>) {
    return propertyNames.map((key) => obj[key]);
}

const obj = {
    name: 'John Doe',
    age: 25,
    company: 'Flipkart',
    startDate: 'April, 2018',
};

const getWorkDetails = extract(obj, ['company', 'startDate']);
