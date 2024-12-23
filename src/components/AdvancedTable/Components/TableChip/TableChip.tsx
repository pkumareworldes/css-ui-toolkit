'use client'
import { DynamicNestedObject } from "@/components/Tables/types"
import { Chip, TableCell } from "@mui/material"

export interface ITableChip {
    data: DynamicNestedObject
    options: DynamicNestedObject
}

export const TableChip = (props: DynamicNestedObject | ITableChip) => {
    const { data, options } = props
    return <TableCell className="chip-table-container">
        <Chip label={data[options.dataKey]} />
    </TableCell>
}
