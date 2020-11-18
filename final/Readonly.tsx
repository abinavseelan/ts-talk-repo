import { useRef } from "react";

export { };

type MemoValue = {
    foo: string;
}

type Props = {
    data: MemoValue;
}

const ChildComponent: React.FC<Props> = (props) => {
    props.data.foo = '100';

    return <span />;
}

const Wrapper = () => {
    const someStaticValue = useRef<MemoValue>({
        foo: 'bar'
    })

    return (
        <ChildComponent data={someStaticValue.current} />
    );
}