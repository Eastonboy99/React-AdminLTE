import * as React from 'react'


export type UserPanelProps = {
    name: string
    imgSrc: string
    children?: React.ReactNode

}

const UserPanel: React.FunctionComponent<UserPanelProps> = (props: UserPanelProps) => {

    return (
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src={props.imgSrc} className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="#" className="d-block">{props.name}</a>
        </div>
      </div>
    )
}

export default UserPanel