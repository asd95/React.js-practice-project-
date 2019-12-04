import React, { Component } from "react";
import ItemView from "./item-view";
import Loading from "../loading";

import "./item-details.scss";

const Record = ({ item, field, label }) => {
  return (
    <li className="item-desc__list-item">
      {label} {item[field]}
    </li>
  );
};

export { Record };

export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
    spinner: false
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImageUrl !== prevProps.getImageUrl
    ) {
      this.setState({
        spinner: true
      });
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then(item => {
        this.setState({
          item,
          image: getImageUrl(item),
          spinner: false
        });
      })
      .catch(error => {
        console.log("Something wrong", error);
      });
  }

  render() {
    const { item, image, spinner } = this.state;

    if (!item) {
      return <span className="alternative">Select item from a list</span>;
    }

    if (spinner) {
      return <Loading />;
    }

    return (
      <div className="item-details">
        <ItemView
          item={item}
          image={image}
          propsChildren={this.props.children}
        />
      </div>
    );
  }
}
