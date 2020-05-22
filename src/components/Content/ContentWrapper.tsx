import * as React from 'react'

export type ContentWrapperProps = {
    children?: React.ReactNode
}

const ContentWrapper: React.FunctionComponent<ContentWrapperProps> = (props: ContentWrapperProps) => {
    return(
        <div className="content-wrapper">
            {props.children}
        </div>
    )
}

export default ContentWrapper