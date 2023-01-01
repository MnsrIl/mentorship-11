import React from 'react';
import {TableRowData} from "./index";
import {getPlainAuthorityInfo} from "../../utils";

interface TableRowProps {
    data: TableRowData,
    hasActions: boolean;
    onDelete?: () => void;
    onUpdate?: () => void;
}

const TableRow = ({data, hasActions, onDelete, onUpdate}: TableRowProps) => {
    return (
        <tr>
            <td>{data.id}</td>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.age}</td>
            <td>{data.email}</td>
            <td>{getPlainAuthorityInfo(...data.authorities)}</td>
            {hasActions && <>
                <td>
                    <button onClick={onUpdate} type="button" className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#editModalCenter">
                        Edit
                    </button>
                </td>
                <td>
                    <button onClick={onDelete} type="button" className="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteModalCenter">
                        Delete
                    </button>
                </td>
            </>
            }
        </tr>
    );
};

export default TableRow;
