import React from 'react';

export default class Linear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
          tries: null
        }
      }

      linearSearch(array, value) {
        this.tries = 0;
    
        for (let i = 0; i < array.length; i++) {
            this.tries++;
            if (array[i] === value) {
                const result = `${value} was found in the dataset after ${this.tries} tries.`;
                this.setState({
                    tries: result
                });
                this.tries = 0;
                break;
            }
        }

        if (this.tries===array.length) {
            const result = `After ${this.tries} tries, the item was not found in the dataset.`;
            this.setState({
                tries: result
            });
        }
    }

    handleLinSearch(value) {
        this.linearSearch(this.state.data, parseInt(value, 10));
        this.refs.linearInput.value = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <label>Linear Search</label> <br />
                    <input 
                      type="text" 
                      name="linearSearch"
                      ref="linearInput">
                    </input>
                    <button 
                      type="submit" 
                      onClick={() => this.handleLinSearch(this.refs.linearInput.value)}>Search</button>
                      <div>
                        {this.state.tries}
                    </div>
                </form>
            </div>
        );
    }
}