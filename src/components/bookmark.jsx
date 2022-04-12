import React from "react";
// import PropTypes from "prop-types";

const BookMark = ({ status, ...rest }) => {
    return (
        <button>
            <i
                className={"bi bi-heart-fill" + (status ? "bi bi-heart" : "")}
                {...rest}
            ></i>
        </button>
    );
};


export default BookMark;
