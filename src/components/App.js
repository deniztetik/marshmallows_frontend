import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import 'font-awesome/css/font-awesome.min.css';
import 'bulma/css/bulma.css';

import ColorSelect from './ColorSelect';

import ArtworksAndPalettes from './ArtworksAndPalettes';

const initialState = {
  submittedColors: false,
  isLoading: false,
}

class App extends Component {
  state = initialState

  handleChangeComplete = color => {
    this.setState({
      color: color.hex,
    })
  }

  addColor = color => {
    const {
      selectedColors,
    } = this.state;

    if (selectedColors.length < 5) {
      this.setState({
        selectedColors: [...selectedColors, color.hex],
      });
    }
  }

  queryWithColors = () => {
    this.setState({
      submittedColors: true,
    })
  }

  resetState = () => {
    this.setState(initialState);
  }

  searchColors = colors => {
    this.setState({
      isLoading: true,
    })

    setTimeout(() => this.setState({
      isLoading: false,
      submittedColors: true,
    }), 2000);
  }

  render() {
    const {
      submittedColors,
      isLoading,
    } = this.state;

    return (
      <Choose>
        <When condition={!submittedColors}>
          <ColorSelect isLoading={isLoading} searchColors={this.searchColors} />
        </When>
        <Otherwise>
          <ArtworksAndPalettes tryDifferentColors={this.resetState} />
        </Otherwise>
      </Choose>
    );
  }
}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
