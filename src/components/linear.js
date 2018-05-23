import React from 'react';

export default class Linear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          

        }
      }
    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    let linearSearchInputValue = e.target.linearSearch.value;
                    e.target.linearSearch.value = '';
                    console.log(linearSearchInputValue);
                }}>
                    <label>Linear Search</label> <br />
                    <input type="text" name="linearSearch"></input>
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}