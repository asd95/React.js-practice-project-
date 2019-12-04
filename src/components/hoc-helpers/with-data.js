import React, { Component } from "react";
import Loading from "../loading";

const withData = View => {
  return class extends Component {
    constructor() {
      super();

      this.state = {
        data: null,
        loading: true
      };
    }

    componentDidMount() {
      this.update();
    }

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    update() {
      this.setState({
        loading: true
      });

      this.props
        .getData()
        .then(data => {
          this.setState({
            data,
            loading: false
          });
        })
        .catch((error) => {
          console.log("Something wrong", error );
        });
    }

    render() {
      const { data, loading } = this.state;

      if (loading) {
        return <Loading />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
