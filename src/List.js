import React from 'react'

const List = (props) => {
    return (
        <ul class="todo-item">
            <li>
            {props.item}
            </li>
        </ul>
    )
}

export default List