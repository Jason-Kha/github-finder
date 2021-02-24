import React, { useContext, useState } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const { users, searchUsers, clearUsers } = githubContext;
    const { setAlert, removeAlert } = alertContext;

    const [text, setText] = useState('');

    // update current state with form
    const onChange = (e) => setText(e.target.value);

    // search users
    const onSubmit = (e) => {
        e.preventDefault();

        if (text.trim() === '') {
            setAlert('Please enter something', 'light');
        } else {
            removeAlert();
            searchUsers(text);
            setText('');
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input
                    type="text"
                    name="text"
                    placeholder="Search Users..."
                    value={text}
                    onChange={onChange}
                />
                <input
                    type="submit"
                    value="Search"
                    className="btn btn-dark btn-block"
                />
            </form>
            {users.length > 0 && (
                <button
                    className="btn btn-light btn-block"
                    onClick={clearUsers}
                >
                    Clear
                </button>
            )}
        </div>
    );
};

export default Search;
