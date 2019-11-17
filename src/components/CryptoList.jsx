import React from 'react';

const CryptoList = props => {
    
    let cryptoList = props.cryptoArray.map(cryptoElement => {
        return (
            <li key={cryptoElement.currency}>{cryptoElement.currency} Last rate: <span className={cryptoElement.class}>{cryptoElement.last}</span> [{cryptoElement.symbol}]</li>
        )
    })
    return (
        <div>
           
            <ul className="crypto-list">
                {cryptoList}
            </ul>
        </div>
    )
}

export default CryptoList;