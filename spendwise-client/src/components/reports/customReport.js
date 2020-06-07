import React, { Component } from 'react';
import Back2Home from '../backToHome/backtoHome';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

class customReport extends Component {
    state = {
        page: 0,
        rowsPerPage: 10
    }

    columns = [
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
        {
            id: 'population',
            label: 'Population',
            minWidth: 170,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'size',
            label: 'Size\u00a0(km\u00b2)',
            minWidth: 170,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'density',
            label: 'Density',
            minWidth: 170,
            align: 'right',
            format: (value) => value.toFixed(2),
        },
    ]

    createData = (name, code, population, size) => {
        const density = population / size;
        return { name, code, population, size, density };
    }

    rows = [
        this.createData('India', 'IN', 1324171354, 3287263),
        this.createData('China', 'CN', 1403500365, 9596961),
        this.createData('Italy', 'IT', 60483973, 301340),
        this.createData('United States', 'US', 327167434, 9833520),
        this.createData('Canada', 'CA', 37602103, 9984670),
        this.createData('Australia', 'AU', 25475400, 7692024),
        this.createData('Germany', 'DE', 83019200, 357578),
        this.createData('Ireland', 'IE', 4857000, 70273),
        this.createData('Mexico', 'MX', 126577691, 1972550),
        this.createData('Japan', 'JP', 126317000, 377973),
        this.createData('France', 'FR', 67022000, 640679),
        this.createData('United Kingdom', 'GB', 67545757, 242495),
        this.createData('Russia', 'RU', 146793744, 17098246),
        this.createData('Nigeria', 'NG', 200962417, 923768),
        this.createData('Brazil', 'BR', 210147125, 8515767),
    ];

    useStyles = makeStyles({
        root: {
            width: '100%',
        },
        container: {
            maxHeight: 440,
        },
    });


    render() {
        // let classes = this.useStyles();
        return (
            <>
                <Back2Home />
                <div className="container">
                    <div className="row" >
                        <span style={{ paddingLeft: "500px", paddingBottom: '20px' }}> Income Vs Expense (From - To) Custom Report</span>
                        <Paper style={{ width: '100%' }}>
                            <TableContainer style={{ maxHeight: '440' }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {this.columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth }}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.rows.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map((row) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                    {this.columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                                            </TableCell>
                                                        );
                                                    })}
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={this.rows.length}
                                rowsPerPage={this.state.rowsPerPage}
                                page={this.state.page}
                            // onChangePage={handleChangePage}
                            // onChangeRowsPerPage={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </div>
                </div>
            </>
        );
    }
}

export default customReport;