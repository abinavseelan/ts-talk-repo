import { HTMLAttributes } from "react"

const Card = (props: Omit<HTMLAttributes<HTMLDivElement>, 'dangerouslySetInnerHTML'>) => {
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