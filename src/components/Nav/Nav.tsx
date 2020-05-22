import * as React from 'react'

export type NavPosition = "left" | "center" | "right"

export type NavProps = {
    children: React.ReactNode
    position: NavPosition
}

const Nav: React.FunctionComponent<NavProps> = (props: NavProps) => {
    let className = (props.position == "right")? "ml-auto" : ""
    return (
        <ul className={`navbar-nav ${className}`}>
            {props.children}
        </ul>
    )
}

export default Nav