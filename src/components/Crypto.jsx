import React from 'react';
import axios from 'axios';
import CryptoList from './CryptoList';

class Crypto extends React.Component {
    constructor() {
        super();
        this.state = {
            cryptoArray: [],
            filteredCryptoArray: []
        } 
    }
    getCryptoData = () => {
        axios.get(`https://blockchain.info/pl/ticker`)
        .then(res => {
          const crypto = res.data;
          let convertedCryptoArray = [];
          let i = 0;
         
          for(let key in crypto) {
              let newCryptoObj = crypto[key];
              let prevCryptoObj = this.state.cryptoArray[i];
              

              if(prevCryptoObj!== undefined) {
                if(prevCryptoObj.last > newCryptoObj.last) {
                    newCryptoObj.class = "red"
                } else if (prevCryptoObj.last < newCryptoObj.last){
                    newCryptoObj.class = "green"
                } else {
                    newCryptoObj.class = "blue"
                }
              } else {
                  newCryptoObj.class = "blue"
              };

            

              newCryptoObj.currency = key;
              
              
              convertedCryptoArray.push(newCryptoObj);
              i++;
          }

          this.setState({cryptoArray: convertedCryptoArray, filteredCryptoArray: convertedCryptoArray});

        })
    }
    filterCurrency = () => {
        
        let trimmedValue = this.filterInput.value.trim().toUpperCase();
        let currentCrypto = this.state.cryptoArray;
        let filteredCrypto = currentCrypto.filter(elem=>{
            return elem.currency.includes(trimmedValue);
        });
        this.setState({filteredCryptoArray: filteredCrypto})
        console.log(trimmedValue);
        }

    componentDidMount() {
        this.getCryptoData();
        setInterval(() => {this.getCryptoData()}, 5000);
      }    

    render() {
       
        return (
            <div>
            <input type="text" placeholder="Filtruj..." onChange={this.filterCurrency} ref={input => this.filterInput = input}></input>
            <CryptoList cryptoArray={this.state.filteredCryptoArray} filterCurrency={this.filterCurrency}/>
       </div> 
       )
    }
}

export default Crypto;