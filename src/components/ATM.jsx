import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { incrementByValue, decrementByValue } from '../redux/atmSlice'

const ATM = () => {
    const dispatch = useDispatch()
    const {balance} = useSelector((state) => state.atm)
    
    const handleAddByValue = () => {
        const value = +document.querySelector("#value").value
        dispatch(incrementByValue(value));
    };
    
    const handleTakeByValue = () => {
        const value = +document.querySelector("#value").value
        if(balance >= value){
        dispatch(decrementByValue(value))
        } else {
        console.log("first")
        }
    }

    const handlePlusByValue = (value) => {
        dispatch(incrementByValue(value))
    }
    
    const handleSubByValue = (value) => {
  if (balance >= value) {
    dispatch(decrementByValue(value))
  } else {
    console.log(`You can't withdraw ${value} kr from your account! you only have ${balance} kr in your account!`);
  }
}

        return (
            <div>
        <h2>Balance: {balance}</h2>
        <input type="number" id='value'/>
<div>
            <button onClick={handleAddByValue}>Deposit money</button>
            <button onClick={handleTakeByValue}>Withdraw money</button>
</div>
<div>
            <p>Deposit</p>
            <button onClick={() => {handlePlusByValue(100)}}>+100</button>
            <button onClick={() => {handlePlusByValue(200)}}>+200</button>
            <button onClick={() => {handlePlusByValue(500)}}>+500</button>
            <button onClick={() => {handlePlusByValue(1000)}}>+1000</button>
</div>
<div>
            <p>Withdraw</p>
            <button onClick={() => {handleSubByValue(100)}}>-100</button>
            <button onClick={() => {handleSubByValue(200)}}>-200</button>
            <button onClick={() => {handleSubByValue(500)}}>-500</button>
            <button onClick={() => {handleSubByValue(1000)}}>-1000</button>
</div>

    </div>
  )
      

}

export default ATM


