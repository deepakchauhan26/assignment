import items from "./Data";
import "./App.css";
import { useState } from "react";
import Card from "./Components/Card/Card";
import { Button, Button2, Button3 } from "./Components/Filter/Button";

/*-------------- first filter array--------------- */

const allCategories = [...new Set(items.map((item) => item.launch_year))];

/*------------- second filter array ---------------*/
const bollenCat = [...new Set(items.map((item) => item.launch_success))];

/* --------------third filter array---------------- */
const bollenCat2 = [
  ...new Set(
    items.map((item) => item.rocket.first_stage.cores[0].land_success)
  ),
];

/*  console.log(allCategories); */
/* console.log(typeof(bollenCat));  */
/*  console.log(typeof(bollenCat2)); 
ardItem 
item.rocket.first_stage.cores[0].land_success*/

function App() {
  const [cardItem, setCardItem] = useState(items);
  const [buttons] = useState(allCategories);
  const [buttons2] = useState(bollenCat);
  const [buttons3] = useState(bollenCat2);

  /* ----------------first filter ------------*/

  const filter = (button) => {
    const filteredData = items.filter((item) => item.launch_year === button);
    setCardItem(filteredData);
  };

  /* ---------------second filter -----------------*/

  const filter2 = (button2) => {
    const filteredData2 = items.filter(
      (item) => item.launch_success === button2
    );
    setCardItem(filteredData2);
  };

  /*-----------------Third filter ------------------- */

  const filter3 = (button3) => {
    const filteredData3 = items.filter(
      (item) => item.rocket.first_stage.cores[0].land_success === button3
    );
    setCardItem(filteredData3);
  };

  return (
    <div className="App">
      <div className="heading">
        <h1 className="title">SpaceEx Launch programs</h1>
      </div>
      <div className="containerOne">
        <div className="containerTwo">
          <h2 className="filter_heading">Filters</h2>
          <h3 className="launch_year_heading line">Launch Year</h3>
          <Button button={buttons} filter={filter} />
          <h3 className="successful_launch_heading line">Successful Launch</h3>
          <Button2 button2={buttons2} filter={filter2} />
          <div>
          <h3 className="successful_laing_heading line">Successful Laing</h3>
          <Button3 button3={buttons3} filter={filter3} />
          </div>
          
        </div>
        <div class="card_container">
        
        <Card cardItem={cardItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
