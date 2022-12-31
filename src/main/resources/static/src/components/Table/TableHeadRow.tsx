import React from 'react';

interface TableHeadRowProps {
    hasActions: boolean
}

const TableHeadRow = ({ hasActions }: TableHeadRowProps) => {
    return (
        <tr className="border-top table-cell-padding-y-2">
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            {
                hasActions && <>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </>
            }
        </tr>
    );
};

export default TableHeadRow;
