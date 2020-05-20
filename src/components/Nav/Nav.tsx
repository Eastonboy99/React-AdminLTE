import * as React from 'react'

export type NavProps = {
    children: React.ReactNode
}

const Nav: React.FunctionComponent<NavProps> = (props: NavProps) => {
    return (
        <ul className="navbar-nav">
            {props.children}
        </ul>
    )
}

export default Nav