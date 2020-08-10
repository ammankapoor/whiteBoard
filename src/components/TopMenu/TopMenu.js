import React from "react";
import "./TopMenu.css";

function TopMenu({savedScreen, setSelectedImg}) {
  console.log(savedScreen);
  return (
    <div className="tab-container">
      <div className="tab-header">
        <div> Select Canvas</div>
      </div>
      <div className="flex tab-section">
        {savedScreen.map((item)=>{
          return <img className="add-tab" src={item} alt="set" onClick={(e)=>setSelectedImg(e.target)}/>
        })
        }
        {savedScreen.length < 1 &&
         <div className="add-tab">No Saved Canvas!</div>
        }
      </div>
    </div>
  );
}

export default TopMenu;
