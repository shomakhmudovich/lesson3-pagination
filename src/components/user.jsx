import React from "react";
import Quality from "./quality";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = ({
    _id,
    name,
    profession,
    qualities,
    rate,
    completedMeetings,
    onDeleteUser,
    bookmark,
    onToggleBookmark
}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>
                {qualities.map((qual) => (
                    <Quality key={qual._id} {...qual} />
                ))}
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate}</td>
            <td>
                <BookMark
                    status={bookmark}
                    onClick={() => onToggleBookmark(_id)}
                />
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => onDeleteUser(_id)}
                >
                    delete
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.object.isRequired,
    qualities: PropTypes.array.isRequired,
    rate: PropTypes.number.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    onDeleteUser: PropTypes.func.isRequired,
    onToggleBookmark: PropTypes.func.isRequired
};

export default User;
