import * as React from 'react'


export type NavLinkProps = {
    title: string
    href: string
}

//TODO: Use React Router for links
const NavLink: React.FunctionComponent<NavLinkProps> = (props: NavLinkProps) => {
    return (
        <li className="nav-item d-none d-sm-inline-block">
            <a href={props.href} className="nav-link">{props.title}</a>
        </li>
    )
}

export default NavLink