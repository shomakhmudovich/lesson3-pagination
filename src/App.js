import React, {useState} from 'react';
import Users from "./components/users";
import API from "./API";
import SearchStatus from "./components/searchStatus";

const App = () => {

    const [users, setUser] = useState(API.users.fetchAll())

    const handleDeleteUser = (id) => {
        setUser(prevState => prevState.filter(user=> user._id!==id))

    }
    const handleToggleBookmark =(id)=>{
        setUser(users.map((user)=>{
            if(user._id === id){
                return{...user,bookmark:!user.bookmark}

            }
            return  user
        }))
    }

    return (
        <>
            <SearchStatus length={users.length} />
            <Users users={users} onDeleteUser={handleDeleteUser} onToggleBookmark={handleToggleBookmark}/>
        </>
    );
};

export default App;