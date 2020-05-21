import * as React from 'react'
import { MenuItem } from '../../types'
import { MenuSubItem } from '../../types'


export type SidebarMenuProps = {
    children?: React.ReactNode
    menu: Array<MenuItem>

}



const SidebarMenu: React.FunctionComponent<SidebarMenuProps> = (props: SidebarMenuProps) => {


    return (
        <div className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordiion="false">
                {props.menu.map((menuItem, index) => {
                    { console.log("Testing") }

                    return (<li key={`menu-${index}`} className={`nav-item ${(menuItem.subItems) ? "has-treeview" : ""} ${menuItem.active ? "menu-open" : ""}`}>
                        <a href={(menuItem.to) ? menuItem.to : "#"} className={`nav-link ${(menuItem.active) ? "active" : ""}`}>
                            {(menuItem.icon) ? React.cloneElement(menuItem.icon, {
                                key: index,
                                className: "nav-icon"
                            }) : ""}
                            <p>
                                {menuItem.value}
                                <i className="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        {(!menuItem.subItems) ? "" :
                            <ul className="nav nav-treeview">
                                {menuItem.subItems.map((subMenuItem: MenuSubItem, subMenuIndex: number) => (
                                    <li key={`submenu-${subMenuIndex}`} className="nav-item">
                                        <a href={(subMenuItem.to) ? subMenuItem.to : "#"} className="nav-link">
                                            {(subMenuItem.icon) ? React.cloneElement(subMenuItem.icon, {
                                                key: subMenuIndex,
                                                className: "nav-icon"
                                            }) : ""}
                                            <p>{subMenuItem.value}</p>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        }
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SidebarMenu