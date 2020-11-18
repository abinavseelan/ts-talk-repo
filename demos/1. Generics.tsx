export { };

interface Props {
    onClick: (e: React.SyntheticEvent) => void;
}

const Button = (props: Props) => {
    return (
        <button onClick= { props.onClick } />
    )
}

const DivAsButton = (props: Props) => {
    return (
        <div onClick= { props.onClick } />
    )
}

const AnchorAsButton = (props: Props) => {
    return (
        <a onClick= { props.onClick } />
    )
}

const Wrapper = () =>{
    return (
        <AnchorAsButton onClick={(e) => {
            
        }} />
    )
}