import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          linMessage: '',
          binMessage: ''
        }
      }
      

      linearSearch(array, value) {
        let tries = 0;
    
        for (let i = 0; i < array.length; i++) {
            tries++;
            if (array[i] === value) {
                const result = `${value} was found in the dataset after ${tries} tries.`;
                this.setState({
                   linMessage: result
                });
                break;
            }
        }

        if (tries===array.length) {
            const result = `After ${tries} tries, the item was not found in the dataset.`;
            this.setState({
                linMessage: result
            });
        }
    }


    binarySearch(array, value, start=0, end=array.length-1, tries=0) {
        tries++;

        if (start > end) {
            const result = `After ${tries} tries, the item was not found in the dataset.`;
            this.setState({
                binMessage: result
            });
            return;
        }

        let index = Math.floor((start + end) / 2);
        let item = array[index];
        

        if (item === value) {
            const result = `${value} was found in the dataset after ${tries} tries.`;
            this.setState({
                binMessage: result
            });
        }
        else if (item < value) {
          tries++;
          return this.binarySearch(array, value, index+1, end, tries);
        }

        else if (item > value) {
            tries++;
            return this.binarySearch(array, value, start, index-1, tries);
        }
    }

    handleLinSearch(value) {
        const linData = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
        this.linearSearch(linData, parseInt(value, 10));
    }

    handleBinSearch(value) {
        const binData = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
        const sortedData = binData.sort((a, b) => a - b);
        this.binarySearch(sortedData, parseInt(value, 10));
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
                        <strong>Linear Results: </strong>{this.state.linMessage} <br />
                        <strong>Binary Results: </strong>{this.state.binMessage}
                    </div>
                </form>
            </div>
        );
    }
}