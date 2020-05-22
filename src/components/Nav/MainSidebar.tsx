import * as React from 'react'


export type MainSidebarProps = {
    brandLogo?: boolean
    logoSrc?: string
    logoLink?: string
    children: React.ReactNode

}

const MainSidebar: React.FunctionComponent<MainSidebarProps> = (props: MainSidebarProps) => {

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href={props.logoLink} className="brand-link">
                <img src={props.logoSrc} alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                    style={{ opacity: .8 }} />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>

            <div className="sidebar">
                {props.children}
            </div>
        </aside>
    )
}

export default MainSidebar