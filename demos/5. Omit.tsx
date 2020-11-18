import { HTMLAttributes } from "react"

const Card = (props) => {
    return (
        <div
            {...props}
        />
    )
}

const Wrapper = () => {
    return (
        <Card 
            dangerouslySetInnerHTML={{
                __html: '<p>This is unsafe</p>'
            }}
        />
    )
}