import React, { Component } from "react";
import Loading from "../loading";

import "./item-list.scss";

export default class ItemList extends Component {
  constructor() {
    super();

    this.state = {
      itemList: null
    };
  }

  componentDidMount() {

    const {getData} = this.props;

    getData()
      .then(itemList => {
        this.setState({
          itemList
        });
      })
      .catch(error => {
        console.log("Something wrong", error);
      });
  }

  itemRender(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li
          className="list-group__item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Loading />;
    }
    const items = this.itemRender(itemList);

    return (
      <div className="item-list">
        <ul className="list-group">{items}</ul>
      </div>
    );
  }
}
