'use client'

import React from "react";
import { DynamicNestedObject } from "./types";
import { TableChip } from "./Components/TableChip/TableChip";


interface ITABLE_COMPONENT {
    [key: string]: React.ComponentType<DynamicNestedObject>
};

export const TABLE_COMPONENT: ITABLE_COMPONENT = {
    tableChip: TableChip
}