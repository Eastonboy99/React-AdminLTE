import * as React from 'react'

export type ContentHeaderProps = {
    name: string
    children?: React.ReactNode
}

const ContentHeader: React.FunctionComponent<ContentHeaderProps> = (props: ContentHeaderProps) => {
    return(
        <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">{props.name}</h1>
            </div>
            {/* TODO: Implement Breadcrums */}
            {/* <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Starter Page</li>
              </ol>
            </div> */} 
          </div>
        </div>
      </div>
    )
}

export default ContentHeader