import React, { useState } from 'react'

function TransferMoney() {
    const host = process.env.REACT_APP_HOST;
    const [amount, setAmount] = useState(0);
    const handleChange = (e)=>{
      if (/^\d+$/.test(e.target.value)){
        setAmount(e.target.value);
      }else if (e.target.value===""){
        setAmount(e.target.value);
      }
    }
    const transferAmount = async (e) => {
        e.preventDefault();
        const url = `${host}/users/transfer/${localStorage.getItem("transferto")}`;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({amount:amount!==""?parseInt(amount):0, id: localStorage.getItem("user")})
        })
        const json = await response.json();
        window.alert(json.message);
      }
  return (
    <div className="flex flex-col items-center justify-center space-y-5 my-40">
        <h1 className="text-blue-500 text-5xl">Enter Amount</h1>
        <input className="w-96 h-10 border-2 border-black" name="amount" type="text" value={amount} onChange={handleChange}/>
        <button className='bg-blue-500 text-white text-lg py-3 px-3 rounded my-6 hover:bg-blue-600' onClick={transferAmount}>Transfer Amount</button>
    </div>
  )
}

export default TransferMoney