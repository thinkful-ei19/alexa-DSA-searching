import React from 'react';

export default class Linear extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <label>Linear Search</label> <br />
                    <input type="text" name="linear-search"></input>
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}