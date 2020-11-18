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
            id='card1'
            className='card'
            dangerouslySetInnerHTML={{
                __html: '<p>This is unsafe</p>'
            }}
        />
    )
}