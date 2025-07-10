import React, { useState } from 'react'

const FilterableList = () => {

    const items = ['Apple', 'Strawberry', 'Cherry', 'Orange', 'Pineapple'];

    const [filterText, setFilterText] = useState('');
    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <div>
            <h1>Filterable Fruit List</h1>
            <input
                type="text"
                placeholder="filter"
                value={filterText}
                onChange={e => setFilterText(e.target.value)}
            />
            <ul>
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => <li key={index}>{item}</li>)
                ) : (
                    <p>No matches found</p>
                )}
            </ul>
        </div>

    )
}

export default FilterableList
