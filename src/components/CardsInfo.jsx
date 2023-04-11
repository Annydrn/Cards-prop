import React from "react";

const CardsInfo = ({ otherInfo, color }) => {
  const styleCard = { backgroundColor: color };

  return (
    <div className="tarjet" style={styleCard}>
      <ul className="list">
        <h1 className="tittle-card">{otherInfo.tittle}</h1>
        <li className="liCard">{otherInfo.item1}</li>
        <li className="liCard">{otherInfo.item2}</li>
        <li className="liCard">{otherInfo.item3}</li>
        <li className="liCard">{otherInfo.item4}</li>
      </ul>
    </div>
  );
};

export default CardsInfo;
