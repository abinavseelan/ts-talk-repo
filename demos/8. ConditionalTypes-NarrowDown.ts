export {};

function isString(input: any) {
    return typeof input === 'string';
}

const Wrapper = (props: { value: number | string }) => {
    if (isString(props.value)) {
        props.value.toLowerCase();
    } else {
        props.value.toString();
    }
}