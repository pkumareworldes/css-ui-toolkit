import { TableCellProps, TableContainerOwnProps, TableContainerTypeMap, TableOwnProps } from "@mui/material"

export type ITableOrder = 'asc' | 'desc';


export interface ITable {
    tableHeaders: ITableHeader[]
    tableRowOptions: ITableRowOptions[]
    rows: DynamicNestedObject[]
    tableOptions: {
        containerProps: TableContainerOwnProps,
        tableProps: TableOwnProps
    }
    schemaName: string,
    sortOptions?: {
        orderBy: string | number | undefined,
        order: ITableOrder,
        sortHandler: (property: keyof DynamicNestedObject) => (event: React.MouseEvent<unknown>) => void
    }
}

export interface ITableHeader extends TableCellProps {
    disablePadding: boolean
    label: string
    dataKey: number | string,
    allowSort?: boolean,
    allowFilter?: boolean,
    type: string,
    align?: "left" | "center" | "right" | "justify" | "inherit" | undefined
}

export interface ITableRowOptions {
    dataKey: string
    component?: string
    componentOptions?: DynamicNestedObject
    align?: "left" | "center" | "right" | "justify" | "inherit" | undefined
}

export type DynamicNestedObject<T = any> = {
    [key: string]: T | DynamicNestedObject<T> | DynamicNestedObject<T>[];
};
