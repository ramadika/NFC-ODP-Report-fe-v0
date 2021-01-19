// Dependencies
import React, { useState, useMemo, useContext } from 'react';
import { TableHeader, Pagination, Search } from 'components/FieldData-Page/Data-Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// Internals
import { NavLink } from 'react-router-dom'
import {DataContext} from 'components/Context'
import 'components/FieldData-Page/index.css'

export default function TableData() {
    const context = useContext(DataContext)

    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    // const [sorting, setSorting] = useState({ field: "", order: "" });

    const All = context.Allodp;
    const headers = context.headers;
    
    const ITEMS_PER_PAGE = 10;
    // var number = 0;

    
    const AllFieldData = useMemo(() => {
        let computedComments = All;

        if (search) {
            computedComments = computedComments.filter(
                comment =>
                    comment.ODP_ID.toLowerCase().includes(search.toLowerCase()) ||
                    comment.Kapasitas.toLowerCase().includes(search.toLowerCase())
            );
        }
        
        // //Sorting comments
        // if (sorting.field) {
        //     const reversed = sorting.order === "asc" ? 1 : -1;
        //     computedComments = computedComments.sort(
        //         (a, b) =>
        //             reversed * a[sorting.field].localeCompare(b[sorting.field])
        //     );
        // }

        setTotalItems(computedComments.length);
        //Current Page slice
        return computedComments.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [All, currentPage ,search]);

    return ( 
        <div className="fDataPage">
            <Container className="mt-5">
                <Row className="fDataTitle mb-3">
                    <h1>Field Data</h1>
                </Row>
                <Row>
                    <Col className="col-md-6">
                        <Pagination
                            total={totalItems}
                            itemsPerPage={ITEMS_PER_PAGE}
                            currentPage={currentPage}
                            onPageChange={page => setCurrentPage(page)}
                        />
                    </Col>
                    <Col className="col-md-6 d-flex flex-row-reverse">
                        <Search
                            onSearch={value => {
                                setSearch(value);
                                setCurrentPage(1);
                            }}
                        />
                    </Col>
                </Row>
                <Row className="fData">
                    <div className="table-responsive">
                        <table className="table table-borderless">
                            <TableHeader 
                                headers={headers}
                                // onSorting={(field, order) =>
                                //     setSorting({ field, order })
                                // }
                            />
                            <tbody>
                                {
                                    AllFieldData.map(prod => (
                                        <tr key={prod.ODP_ID}>
                                            {/* <th scope="row">{number += 1}</th> */}
                                            <th scope="row">{prod.ODP_ID}</th>
                                            <td>{prod.Kapasitas}</td>
                                            <td>{prod.Optical_Power}</td>
                                            <td><a target="_blank" rel="noopener noreferrer" href={prod.GIS_href}>{prod.Latitude} °, {prod.Longitude} °</a></td>
                                            <td>{prod.Tanggal_Instalasi}</td>
                                            <td><NavLink className="btn btn-outline-info" to={`/DetailPage/${prod.ODP_ID}`}>Detail</NavLink></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
