type MenuSubItem = {
    value: string,
    to?: string,
    icon?: React.ReactElement,
    LinkComponent?: React.ElementType,
    useExact?: boolean,
    active?: boolean
};

export default MenuSubItem