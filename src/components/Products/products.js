import React, { useState, useEffect } from 'react';
import { TablePagination } from '@mui/material';
import { PRODUCT_LIST } from './products.gql';
import { useLazyQuery } from '@apollo/client';
import { CreateTable } from './createTable';

export default function ProductList() {
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [count, setCount] = useState(0);
    const [datas, setDatas] = useState([]);

    const [getProducts, { error }] = useLazyQuery(PRODUCT_LIST);
    if (error) {
        alert('Something went wrong see log for details!');
        console.log(error.message);
    }

    useEffect(async () => {
        const res = await getProducts({
            variables: {
                page: parseInt(page + 1),
                size: size
            }
        });
        // console.log(res.data.products.total_count);
        setDatas(res.data.products.items);
        setCount(res.data.products.total_count);
    }, [page, size]);
    return (
        <>
            <h1>Products</h1>
            <CreateTable data={datas} />
            <TablePagination
                component="div"
                count={count}
                rowsPerPage={size}
                page={page}
                onRowsPerPageChange={event => {
                    setSize(parseInt(event.target.value,10));
                    setPage(0);
                }}
                onPageChange={(event, newPage) => {
                    setPage(newPage);
                }}
            />
        </>
    );
}
