import React from 'react'

const BookMark = ({ status, ...rest }) => {
  return (
    <button>
      <i
        className={'bi bi-heart-fill' + (status ? 'bi bi-heart' : '')}
        {...rest}
      ></i>
    </button>
  )
}

export default BookMark
