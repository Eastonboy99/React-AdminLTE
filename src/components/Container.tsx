import * as React from 'react'

export type ContainerProps = {
    fixedLayout?: boolean
    fixedNavbar?: boolean
    fixedFooter?: boolean
    miniSidebar?: boolean
    boxedLayout?: boolean
    collapsedLayout?: boolean
    topNavigation?: boolean
    topWithSidebarNavigation?: boolean
    children?: React.ReactNode
}

const Container: React.FunctionComponent<ContainerProps> = (props: ContainerProps) => {
    let layoutClassName = ""
    if (props.fixedLayout)
        layoutClassName += "layout-fixed"
    if (props.fixedNavbar)
        layoutClassName += "layout-navbar-fixed"
    if (props.fixedFooter)
        layoutClassName += "layout-footer-fixed"
    if (props.miniSidebar)
        layoutClassName += "sidebar-mini"
    if (props.boxedLayout)
        layoutClassName += "layout-boxed"
    if (props.topNavigation)
        layoutClassName += "layout-top-nav"
    if (props.topWithSidebarNavigation)
        layoutClassName += "layout-top-nav sidebar-collapse"
    return (
        <div className={`hold-transition ${layoutClassName}`}>
            <div className="wrapper">
                {props.children}
            </div>
        </div>
    )

}

export default Container