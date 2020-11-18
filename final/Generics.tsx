export { };

interface Props<T> {
    onClick: (e: React.SyntheticEvent<T>) => void;
}

const Button = (props: Props<HTMLButtonElement>) => {
    return (
        <button onClick={props.onClick} />
    )
}

const DivAsButton = (props: Props<HTMLDivElement>) => {
    return (
        <div onClick={props.onClick} />
    )
}

const AnchorAsButton = (props: Props<HTMLAnchorElement>) => {
    return (
        <a onClick={props.onClick} />
    )
}

const Wrapper = () => {
    return (
        <AnchorAsButton onClick={(e) => {

        }} />
    )
}