import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import { Paper } from '@mui/material';

export const CreateTable = ({data}) => {
    return (
        <TableContainer component={Paper}  sx={{ overflow:'scroll', maxHeight:440}}>
            <Table aria-label="Products table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>SKU</TableCell>
                        <TableCell align="center">NAME</TableCell>
                        <TableCell align="center">PRICE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(row => (
                        <TableRow
                            key={row.uid}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0
                                }
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.sku}
                            </TableCell>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.price_range.minimum_price.regular_price.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
