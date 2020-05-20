import * as React from 'react'


export type NavLinkProps = {

}

const NavLink: React.FunctionComponent<NavLinkProps> = (_: NavLinkProps) => {
    return (
        <li className="nav-item d-none d-sm-inline-block">
            <a href="index3.html" className="nav-link">Home</a>
        </li>
    )
}

export default NavLink