import { DynamicNestedObject } from "./types";

// TODO: Correct types to TABLE_SCHEMA
export const TABLE_SCHEMA: DynamicNestedObject = {
    "my-custom-table": {
        name: "sample Table",
        tableOptions: {
            containerProps: {
                sx: {
                    maxHeight: 400,
                }
            },
            tableProps: { stickyHeader: true, size: 'medium' }
        },
        tableHeaders: [
            { dataKey: 'dessert', label: 'Dessert (100g serving)', type: 'string' },
            { dataKey: 'calories', label: "Calories", type: 'string' },
            { dataKey: 'fat', label: "Fat", type: 'string' },
            { dataKey: 'carbs', label: "Carbs", allowSort: true, allowFilter: true, type: 'string' },
            { dataKey: 'protein', label: "Protein", type: 'string' }],

        tableRowOptions: [{ dataKey: 'dessert' },
        { dataKey: 'calories' },
        { dataKey: 'fat' },
        { dataKey: 'carbs' },
        {
            dataKey: "protein",
            component: 'tableChip',
            componentOptions: {
                dataKey: 'protein',
                successLabel: "Active",
                failLabel: 'Inactive',
                color: {
                    success: 'green',
                    fail: 'red'
                }
            }
        }]
    }
}

