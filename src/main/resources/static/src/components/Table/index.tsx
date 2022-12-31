import React from 'react';
import TableHeadRow from "./TableHeadRow";
import TableRow from "./TableRow";
import {UserDetails} from "../../types";
import DeleteModal from "../Modals/DeleteModal";
import EditModal from "../Modals/EditModal";

export type TableRowData = Omit<UserDetails, "password">;

interface TableProps {
    data: UserDetails[];
    hasActions: boolean;
}

const Table = ({data, hasActions}: TableProps) => {
    const [selectedDeleteUser, setSelectedDeleteUser] = React.useState<UserDetails | null>(null);
    const [selectedUpdateUser, setSelectedUpdateUser] = React.useState<UserDetails | null>(null);

    return (
        <>
            <DeleteModal data={selectedDeleteUser}/>
            <EditModal data={selectedUpdateUser} />
            <table className="table align-middle table-striped">
                <tbody>
                <tr/>
                <TableHeadRow hasActions={hasActions}/>
                {
                    data.length === 0 ? <tr>No data found</tr> : data.map(details =>
                        <TableRow
                            key={details.id}
                            onUpdate={() => setSelectedUpdateUser(details)}
                            onDelete={() => setSelectedDeleteUser(details)}
                            hasActions={hasActions}
                            data={details}
                        />
                    )
                }
                </tbody>
            </table>
        </>
    );
};

export default Table;
