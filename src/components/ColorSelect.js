import React, { Component } from 'react';

import { SwatchesPicker } from 'react-color';
import styled from 'styled-components';

import ColorCircle from './ColorCircle';

const initialState = {
    selectedColorsDirty: [],
    selectedColors: [],
    submittedColors: false,
    modalOpen: false,
}

class ColorSelect extends Component {
    state = initialState

    openModal = (e) => {
        e.preventDefault();

        this.setState({
            modalOpen: true
        });
    }

    cancel = (e) => {
        e.preventDefault()
        this.closeModal();
    }

    closeModal = () => {
        this.setState({
            selectedColorsDirty: [],
            modalOpen: false,
        });
    }

    addColor = color => {
        const {
            selectedColorsDirty,
        } = this.state;

        if (selectedColorsDirty.length < 5) {
            this.setState({
                selectedColorsDirty: [...selectedColorsDirty, color.hex],
            });
        }
    }

    saveColors = (e) => {
        const {
            selectedColorsDirty,
        } = this.state;

        e.preventDefault();

        this.setState({
            selectedColors: selectedColorsDirty,
        }, this.closeModal);
    }

    searchColors = () => {
        const {
            searchColors,
        } = this.props;

        const {
            selectedColors,
        } = this.state;

        searchColors(selectedColors);
    }

    resetState = () => {
        this.setState(initialState);
    }

    render() {
        const {
            isLoading,
        } = this.props;

        const {
            modalOpen,
            selectedColors,
            selectedColorsDirty,
        } = this.state;
        return (
            <section className="hero is-primary is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                                <form className="box">
                                    <div className="field has-text-centered">
                                        <img src="https://s3.amazonaws.com/marshmallows/ColorBotLogo.jpeg" width="167" />
                                        <label>COLOR•BOT</label>
                                    </div>
                                    <div className="field has-text-centered">
                                        <button className="button is-primary" onClick={this.openModal}>
                                            Select Colors
                                        </button>
                                    </div>
                                    <div className={`modal ${modalOpen ? 'is-active' : ''}`}>
                                        <div className="modal-background" onClick={this.cancel}></div>
                                        <div className="modal-card">
                                            <header className="modal-card-head">
                                                <p className="modal-card-title">Select Colors</p>
                                                <button className="delete" aria-label="close" onClick={this.cancel}></button>
                                            </header>
                                            <section className="modal-card-body">
                                                <div className="columns">
                                                    <SwatchesPicker
                                                        className="column"
                                                        onChangeComplete={this.addColor}
                                                        height={400}
                                                    />
                                                    <div className="column">
                                                        <div className="columns is-multiline">
                                                            {selectedColorsDirty.map(selectedColor => (
                                                                <ColorCircle style={{margin: '0 5px'}} key={selectedColor} color={selectedColor} className="column is-narrow" />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <footer className="modal-card-foot">
                                                <button className="button is-success" onClick={this.saveColors}>Save Colors</button>
                                                <button className="button" onClick={this.cancel}>Cancel</button>
                                            </footer>
                                        </div>
                                    </div>
                                    <If condition={selectedColors.length}>
                                        <div className="field">
                                            <div className="column">
                                                <div className="columns is-multiline">
                                                    {selectedColors.map(selectedColor => (
                                                        <ColorCircle style={{margin: '0 5px'}} key={selectedColor} color={selectedColor} className="column is-narrow" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field buttons has-text-centered" style={{ justifyContent: 'center' }}>
                                            <button
                                                className={`button is-success ${isLoading ? 'is-loading' : ''}`}
                                                onClick={e => { e.preventDefault(); this.searchColors() }}>
                                                Search Colors
                                            </button>
                                            <button
                                                className="button is-dark"
                                                type="reset"
                                                onClick={this.resetState}
                                            >Reset</button>
                                        </div>
                                    </If>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ColorSelect;
