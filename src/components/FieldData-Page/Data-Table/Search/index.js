// Dependencies
import React, {useState} from 'react'
// Internals
import 'components/FieldData-Page/index.css'

export default function Index({ onSearch }) {
    const [search, setSearch] = useState("");

    const onInputChange = value => {
        setSearch(value);
        onSearch(value);
    };
    return (
        <input
            type="text"
            className="form-control inputSearch"
            placeholder="Search"
            value={search}
            onChange={e => onInputChange(e.target.value)}
        />
    )
}
