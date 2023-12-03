import React from 'react';
const CalculateValue = () => {
    const [qty, setQty] = React.useState('');
    const [price, setPrice] = React.useState('');
    const amount = React.useMemo(() => qty * price, [qty, price]);

    return (
        <>
            <input placeholder="Qty" onChange={(e) => setQty(e.target.value)}/><br/>
            <input placeholder="Price" onChange={(e) => setPrice(e.target.value)}/><br/>
            <h1>Result: {amount}</h1>
        </>
    );
};

export default CalculateValue;
