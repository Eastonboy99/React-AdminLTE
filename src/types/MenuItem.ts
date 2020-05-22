import MenuSubItem from "./MenuSubItem";

type MenuItem = {
    value: string,
    to?: string,
    icon?: React.ReactElement,
    active?: boolean,
    LinkComponent?: React.ElementType,
    subItems?: Array<MenuSubItem>,
    useExact?: boolean,
}

export default MenuItem