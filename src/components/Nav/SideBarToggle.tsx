import * as React from 'react'


export type SideBarToggleProps = {

}
// TODO: Add in react context 
const SideBarToggle: React.FunctionComponent<SideBarToggleProps> = (_: SideBarToggleProps) => {
    return (
        <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars"></i></a>
        </li>
    )
}

export default SideBarToggle