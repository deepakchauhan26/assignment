import React from 'react';
import './card.css';


function Card({cardItem}) {
    return (
        <div className="item" >
            {
                cardItem.map((item, i) => {
                    console.log(item);
                    return <div className="item-con" key={item.flight_number}>
                        <div className="item-container">
                            <img src={item.links.mission_patch_small} alt="" key={item.i}/>
                            <h3 key={item.i}>{item.mission_name} #{item.flight_number}</h3>
                            <h4 key={item.i}>Mission Ids:
                            <ul key={item.i}> 
                                <li className="disc"><span className="space" key={item.i} > &#123;{item.mission_id} &#125;</span></li>
                                <li > Launch Year: <span>{item.launch_year}</span></li>
                                <li key={item.i}>Successful Launch: <span>{String(item.launch_success)}</span></li>
                                <li key={item.i}>Sucessful Landing: <span>{String(item.rocket.first_stage.cores[0].land_success)}</span></li>
                            </ul></h4>
                            
                        </div>
                    </div>
                })
            }
            
        </div>
    )
}
export default Card;
