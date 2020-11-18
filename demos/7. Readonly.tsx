import { useRef } from "react";

export {};

type RefValue = {
    foo: string;
}

type Props = {
    data: RefValue;
}

const ChildComponent: React.FC<Props> = (props) => {
    props.data.foo = '100';

    return <span />;
}

const Wrapper = () => {
    const someStaticValue = useRef<RefValue>({
        foo: 'bar'
    })

    return (
        <ChildComponent data={someStaticValue.current} />
    );
}