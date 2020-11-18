export {};

function extract(obj, propertyNames) {
    return propertyNames.map((key) => obj[key]);
}

const officeLocation = {
    company: 'Flipkart',
    startDate: 'April, 2018',
    willWeReturn: 'who knows?',
};

const getWorkDetails = extract(officeLocation, ['company', 'startDate']);

/**
 * 1. How do we ensure that the propertyNames are correct?
 * 2. How do we ensure that the return type is correct?
 */