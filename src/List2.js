import React from 'react';
import { List } from './List';

function List2(props){
    const repos = props ; 

    if(!repos) return null; 

    if(!repos.length) return <p>No repos, sorry!</p>;

    return (
        <ul>
            {repos.map((repo) => { return <li>{repo.id} {repo.full_name}</li>})}
        </ul>
    )
}

export default List2;