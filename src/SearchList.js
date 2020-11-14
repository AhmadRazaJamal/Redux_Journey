import React, { useState } from 'react';
import { Search } from './Search';
import { List } from "./List";

export const SearchList = () => {
    const [query, setQuery] = React.useState("");

    const onChange = (event) => {
        const {value} = event.target;

        setQuery( value );
    }

    const InitialList = [ {key: 1, name: "evee"}, {key: 2, name: "pickachu"},  {key: 3, name: "raichu"}];
    const [list, setList ] = React.useState(InitialList);

    function byArchived(event) { 
    
        const newList = list.filter((listItem) => listItem.key != event.target.value);
        setList(newList);
    }

    return (
        <div style={{ display:"flex", marginTop:"20px"}}>
            <Search
                query = {query}
                onChange = {onChange}
                SearchLabel = {"SearchList"}
            />
            <List list = {list.filter(byQuery(query))} archiveItem={byArchived} />
        </div>
    )
}

const byQuery = (query) => {
    return function (item) {
        return !query || item.name.toLowerCase().includes(query.toLowerCase());
    }
}