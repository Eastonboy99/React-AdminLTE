import * as React from 'react'


export type SidebarMenuProps = {
    children?: React.ReactNode

}

const SidebarMenu: React.FunctionComponent<SidebarMenuProps> = (props: SidebarMenuProps) => {

    return (
        <div className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordiion="false">
                {props.children}
            </ul>
        </div>
    )
}

export default SidebarMenu