import React from 'react';
import propTypes from 'prop-types'

export default function LoadMoreOrLessBtn( { onClick, text } ){
        return (
                <div className="loadMore">
                    <button onClick={onClick}>{text}</button>
                </div>
        )
}

LoadMoreOrLessBtn.propTypes = {
        text: propTypes.string.isRequired,
        onClick: propTypes.func.isRequired
}