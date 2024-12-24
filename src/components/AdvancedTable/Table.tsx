'use client'
import * as React from 'react';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ITable, ITableHeader } from './types';
import { TABLE_COMPONENT } from './tableComponents';
import { Box, Card, CardContent, Container, IconButton, TableFooter, TablePagination, TableSortLabel, TextField, Typography, useTheme } from '@mui/material';
import { FirstPage, KeyboardArrowLeft, KeyboardArrowRight, LastPage } from '@mui/icons-material';
import { TablePaginationActionsProps } from '@mui/material/TablePagination/TablePaginationActions';
import { visuallyHidden } from '@mui/utils';
import { getComparator } from './util';


function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPage /> : <FirstPage />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPage /> : <LastPage />}
            </IconButton>
        </Box>
    );
}


const Table = (props: ITable) => {
    const { tableHeaders, schemaName, tableRowOptions, rows = [], tableOptions, sortOptions } = props;
    const { containerProps, tableProps } = tableOptions;
    const { order, orderBy, sortHandler } = sortOptions || { order: 'asc' };

    const { sx } = containerProps;

    // Pagination 
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Rows to display
    const visibleRows = React.useMemo(
        () =>
            [...rows]
                .sort(getComparator(order, orderBy || ''))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
        [order, orderBy, page, rowsPerPage],
    );

    return (
        <Container style={{ background: 'white', padding: '8px' }} >
            <Card style={{ boxShadow: 'none', borderRadius: '8px', border: '1px solid grey', padding: '8px', marginBottom: '8px' }}>
                <CardContent >
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                    />
                </CardContent>
            </Card>
            <TableContainer sx={sx} component={Paper}>
                <MuiTable {...tableProps} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {
                                tableHeaders.map((headerCol: ITableHeader) => {
                                    if (headerCol.allowSort) {
                                        return <TableCell
                                            key={headerCol.label}
                                            align={headerCol.type === 'number' ? 'right' : 'left'}
                                            padding={headerCol.disablePadding ? 'none' : 'normal'}
                                            sortDirection={order}
                                        >
                                            <TableSortLabel
                                                active={orderBy === headerCol.id}
                                                direction={order}
                                                onClick={sortHandler!(headerCol.dataKey)}
                                            >
                                                {headerCol.label}
                                                {orderBy === headerCol.dataKey ? (
                                                    <Box component="span" sx={visuallyHidden}>
                                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                                    </Box>
                                                ) : null}
                                            </TableSortLabel>
                                        </TableCell>
                                    }
                                    return <TableCell align={headerCol.align} >{headerCol.label}</TableCell>
                                })
                            }
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {visibleRows.map((rowData) => (
                            <TableRow
                                key={rowData.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {
                                    tableRowOptions.map(rowOption => {
                                        if (rowOption.component && schemaName) {
                                            const CustomComponent = TABLE_COMPONENT[rowOption.component]
                                            const props = { ...{ options: rowOption.componentOptions }, ...{ data: rowData } }
                                            return <CustomComponent {...props} />
                                        }
                                        return <TableCell align={rowOption.align}>{rowData[rowOption.dataKey]}</TableCell>

                                    })
                                }
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                slotProps={{
                                    select: {
                                        inputProps: {
                                            'aria-label': 'rows per page',
                                        },
                                        native: true,
                                    },
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </MuiTable>
            </TableContainer>
        </Container>
    );
};

export default Table;


