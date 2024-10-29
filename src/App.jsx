import React from "react";
import "./App.css";
import menuList from "./CommonResource/data";
import RestaurantMenu from "./RestaurantMenu";
function App() {
  return (
    <>
      <div className="all-container">
        {/* <!-- header start  --> */}
        <header className="title">
          <h1>Evangadi Menu</h1>
          <div></div>
        </header>
        {/* <!-- header end  --> */}
        <div className="foods-container">
          {menuList.map((value) => {
            return <RestaurantMenu key={value.id} menuData={value} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
