import React from 'react';

const SearchStatus = (props) => {

    const {length} = props

    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1))
        if (number > 4 && number < 15) return 'человек тусанет'
        if ([2, 3, 4].indexOf(lastOne) >= 0) return 'человека тусанут'
        if (lastOne === 1) return 'человек тусанет'
        return 'человек тусанет'
    }


    return (
        <h2>
        <span className={'badge ' + (length > 0 ? 'bg-primary' : 'bg-danger')}>
          {length> 0
              ? `${length + ' ' + renderPhrase(length)} c тобой`
              : 'Никто с тобой не тусанёт '}
        </span>
        </h2>
    );
};

export default SearchStatus;