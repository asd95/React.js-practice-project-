import React from "react";
// import PropTypes from 'prop-types';

import "./item-list.scss";

const ItemList = props => {
  const { data, renderItem, onItemSelected } = props;

  const itemRender = arr => {
    return arr.map(item => {
      const { id } = item;
      const label = renderItem(item);

      return (
        <li
          className="list-group__item"
          key={id}
          onClick={() => onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  };

  const items = itemRender(data);

  return (
    <div className="item-list">
      <ul className="list-group">{items}</ul>
    </div>
  );
};

// ItemList.propTypes = {
//   onItemSelected: PropTypes.func,
//   data: PropTypes.arrayOf(PropTypes.object).isRequired,
//   renderItem: PropTypes.func
// };

export default ItemList;
