import * as React from 'react'

export type MainHeaderProps = {
    children?: React.ReactNode

}

const MainHeader: React.FunctionComponent<MainHeaderProps> = (props: MainHeaderProps) => {

    return (
        <nav className={"main-header navbar navbar-expand navbar-white navbar-light"}>
            {props.children}
        </nav>
    )
}

export default MainHeader