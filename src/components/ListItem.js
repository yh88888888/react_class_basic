import React from 'react';

export default function ListItem(props) {
    // let id = props.id;
    // let title = props.title;
    let { id, title } = props.items;
    return (
        <div>
            {id} {title}
        </div>
    );
}
