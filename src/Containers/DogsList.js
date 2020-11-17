import React, { Component } from "react";
import {apiResponse} from '../api.js'
import DogCard from "../Components/DogCard.js";


class DogsList extends Component {
  dogMap = () => {
    return apiResponse.map(dog => < DogCard dog={dog} />)
  }

  render() {
    return <div className="list">{this.dogMap()}</div>;
  }
}

export default DogsList;
