import React, {Component} from 'react';

export default({data, filterText, addFavorite}) => {

    const namesList = data
        .filter(name => {
            //remove names that don't match current filter text
            return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        })
        .map(name => {
        return (
            <li 
              key={name.id} 
              className={name.sex}
              onClick={() => addFavorite(name.id)}
              >
                {name.name}
            </li>
        )
    })
    return (
        <div>
        <ul>
            {namesList}
        </ul>
        </div>
    );

}
