import React from 'react';
import "./Button.css";


/* ------------------------first filter function--------------------- */
function Button({button, filter, i}) {
    return (
        <div className="buttons">
            {
                button.map((cat, i, items)=>{
                    return <button key={items.i} type="button" onClick={()=> filter(cat)} className="btn" >{cat}</button>
                })
            }
        </div>
    )
}
/*--------------- sencond filter function ----------------------*/

function Button2({button2, filter, i}){
    return(
        <div className="buttons2">
            {
                button2.map((cat, i, items)=>{
                    return <button key={items.i} type="button" onClick={()=> filter(cat)} className="btn btn2">{cat}</button>
                })
            
            }
        </div>
    )
}
/* -------------Third filter function------------------------------ */
function Button3({button3, filter, i}){
    return(
        <div className="buttons3">
            {
                button3.map((cat, i, items)=>{
                    return <button key={items.i} type="button" onClick={()=> filter(cat)} className="btn3">{cat}</button>
                })
            
            }
        </div>
    )
}



/* console.log(Button);
console.log(Button2); */
/* console.log(Button3); */
export  {
    Button,
    Button2,
    Button3,
}


