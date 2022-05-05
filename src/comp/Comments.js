import React from "react"
import DataTable from 'react-data-table-component';

export default function UserComments(prop){
    let comments = prop.comments;

    let userComments = [];
    if(Array.isArray(comments)){
        comments = comments.forEach((comment) => {
            userComments.push({
                id : comment._id.$oid,
                name: comment.name,
                email: comment.email,
                text: comment.text
            })    
        })
    }else{
        userComments = (
            <tr className="text-center">
                No Record Found 
            </tr>
        )
    }    

    const columns = [
        {
            name: '#',
            selector: row => row.id,
        },
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Text',
            selector: row => row.text,
        },
    ];
    
    return (
        <DataTable
            columns={columns}
            data={userComments}
            direction="auto"
            fixedHeader
            pagination
            responsive
            subHeaderAlign="right"
            subHeaderWrap
            highlightOnHover
            pointerOnHover
            defaultSortFieldId={1}
            title="User Comments"
        />
    )
}