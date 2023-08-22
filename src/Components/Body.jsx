import React, { Component } from "react";
import data from "../data/dataGlasses.json";
import "./style.css";
export default class UngDungChonKinh extends Component {
  state = {};

  handleChooseGlasses1 = () => {
    this.setState({
      imageUrl: data[0].url,
      glassesName: data[0].name,
      glassesDetail: data[0].desc,
    });
  };
  handleChooseGlasses2 = () => {
    this.setState({
      imageUrl: data[1].url,
      glassesName: data[1].name,
      glassesDetail: data[1].desc,
    });
  };
  handleChooseGlasses3 = () => {
    this.setState({
      imageUrl: data[2].url,
      glassesName: data[2].name,
      glassesDetail: data[2].desc,
    });
  };
  handleChooseGlasses4 = () => {
    this.setState({
      imageUrl: data[3].url,
      glassesName: data[3].name,
      glassesDetail: data[3].desc,
    });
  };
  handleChooseGlasses5 = () => {
    this.setState({
      imageUrl: data[4].url,
      glassesName: data[4].name,
      glassesDetail: data[4].desc,
    });
  };
  handleChooseGlasses6 = () => {
    this.setState({
      imageUrl: data[5].url,
      glassesName: data[5].name,
      glassesDetail: data[5].desc,
    });
  };
  handleChooseGlasses7 = () => {
    this.setState({
      imageUrl: data[6].url,
      glassesName: data[6].name,
      glassesDetail: data[6].desc,
    });
  };
  handleChooseGlasses8 = () => {
    this.setState({
      imageUrl: data[7].url,
      glassesName: data[7].name,
      glassesDetail: data[7].desc,
    });
  };
  handleChooseGlasses9 = () => {
    this.setState({
      imageUrl: data[8].url,
      glassesName: data[8].name,
      glassesDetail: data[8].desc,
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-4"></div>
        <div
          className="col-4 py-5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img className="img-fluid" src="./glassesImage/model.jpg" />
          <div
            className="glasses d-flex justify-content-center"
            style={{ position: "absolute", top: "22%", left: "40%" }}
          >
            <img src={this.state.imageUrl} style={{ maxWidth: "70%" }} />
          </div>
          <div
            className="glasses-footer"
            style={{ position: "absolute", top: "70%", width: "76%" }}
          >
            <div className="glasses-detail">
              <h2 className="name">{this.state.glassesName}</h2>
              <h3 className="detail">{this.state.glassesDetail}</h3>
            </div>
          </div>
        </div>

        <div className="col-4"></div>
        <div className="col-2 d-flex align-items-center">
          <div>
            <img
              src="./glassesImage/v1.png"
              style={{ maxWidth: "100%" }}
              onClick={this.handleChooseGlasses1}
            />
          </div>
        </div>
        <div className="col-2 d-flex align-items-center">
          <div>
            <img
              src="./glassesImage/v2.png"
              style={{ maxWidth: "100%" }}
              onClick={this.handleChooseGlasses2}
            />
          </div>
        </div>
        <div className="col-2 d-flex align-items-center">
          <div>
            <img
              src="./glassesImage/v3.png"
              style={{ maxWidth: "100%" }}
              onClick={this.handleChooseGlasses3}
            />
          </div>
        </div>
        <div className="col-2 d-flex align-items-center">
          <div>
            <img
              src="./glassesImage/v4.png"
              style={{ maxWidth: "100%" }}
              onClick={this.handleChooseGlasses4}
            />
          </div>
        </div>
        <div className="col-2 d-flex align-items-center">
          <div>
            <img
              src="./glassesImage/v5.png"
              style={{ maxWidth: "100%" }}
              onClick={this.handleChooseGlasses5}
            />
          </div>
        </div>
        <div className="col-2 d-flex align-items-center">
          <div>
            <img
              src="./glassesImage/v6.png"
              style={{ maxWidth: "100%" }}
              onClick={this.handleChooseGlasses6}
            />
          </div>
        </div>
        <div className="col-2 d-flex align-items-center">
          <div>
            <img
              src="./glassesImage/v7.png"
              style={{ maxWidth: "100%" }}
              onClick={this.handleChooseGlasses7}
            />
          </div>
        </div>
        <div className="col-2 d-flex align-items-center">
          <div>
            <img
              src="./glassesImage/v8.png"
              style={{ maxWidth: "100%" }}
              onClick={this.handleChooseGlasses8}
            />
          </div>
        </div>
        <div className="col-2 d-flex align-items-center">
          <div>
            <img
              src="./glassesImage/v9.png"
              style={{ maxWidth: "100%" }}
              onClick={this.handleChooseGlasses9}
            />
          </div>
        </div>
      </div>
    );
  }
}
