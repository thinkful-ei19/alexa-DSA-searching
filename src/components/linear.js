import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
          linTries: null,
          binTries: null
        }
      }

      linearSearch(array, value) {
        this.linTries = 0;
    
        for (let i = 0; i < array.length; i++) {
            this.linTries++;
            if (array[i] === value) {
                const result = `${value} was found in the dataset after ${this.linTries} tries.`;
                this.setState({
                    linTries: result
                });
                this.linTries = 0;
                break;
            }
        }

        if (this.linTries===array.length) {
            const result = `After ${this.linTries} tries, the item was not found in the dataset.`;
            this.setState({
                linTries: result
            });
        }
    }

    binarySearch(array, value, start=0, end=array.length-1, binTries=0) {
        this.binTries++;

        if (start > end) {
            this.binTries++;
            const result = `After ${this.binTries} tries, the item was not found in the dataset.`;
            this.setState({
                binTries: result
            });
        }

        let index = Math.floor((start + end) / 2);
        let item = array[index];

        if (item === value) {
            this.binTries++;
            const result = `${value} was found in the dataset after ${this.binTries} tries.`;
            this.setState({
                binTries: result
            });
        }
        else if (item < value) {
            this.binTries++;
          return this.binarySearch(array, value, index+1, end);
        }

        else if (item > value) {
            this.binTries++;
            return this.binarySearch(array, value, start, index-1);
        }

        this.setState({
            binTries: `${value} was found in the dataset after ${this.binTries} tries.`
        });
    }

    handleLinSearch(value) {
        this.linearSearch(this.state.data, parseInt(value, 10));
    }

    handleBinSearch(value) {
        this.binarySearch(this.state.data.sort(), parseInt(value, 10));
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <label>Search for a Number</label> <br />
                    <input 
                      type="text" 
                      name="userInput"
                      ref="userInput">
                    </input>
                    <button 
                      type="submit" 
                      onClick={() => {
                          this.handleLinSearch(this.refs.userInput.value);
                          this.refs.userInput.value = '';
                      }}>Linear</button>

                      <button
                      type="submit"
                      onClick={() => {
                        this.handleBinSearch(this.refs.userInput.value);
                        this.refs.userInput.value = '';
                      }}>Binary</button>
                      <div>
                        {this.state.linTries}
                        {this.state.binTries}
                    </div>
                </form>
            </div>
        );
    }
}