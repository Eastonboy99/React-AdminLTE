import * as React from 'react'

export type ContentFooterProps = {
    copyright?: React.ReactNode
    children?: React.ReactNode
}

const ContentFooter: React.FunctionComponent<ContentFooterProps> = (props: ContentFooterProps) => {
    return(
        <footer className="main-footer">
        <div className="float-right d-none d-sm-inline">
          {props.children}
        </div>
        {props.copyright}
      </footer>
    )
}

export default ContentFooter