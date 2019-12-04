import React from "react";
import "./item-details.scss";

const ItemView = ({ item, image, propsChildren }) => {
  const { name } = item;
  return (
    <React.Fragment>
      <img src={image} alt="item" className="item-image" />
      <div className="item-desc">
        <h1 className="item-desc__title">{name}</h1>
        <ul className="item-desc__list">
          {React.Children.map(propsChildren, (child) => {
            return React.cloneElement(child, {item})
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default ItemView;
