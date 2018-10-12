import React, { Fragment } from 'react';

import ColorCircle from './ColorCircle';

import styled from 'styled-components';

// const ArtworkAndPalette = styled.div`
//   margin: 20px;
// `;

const ArtworkAndPalette = styled.div``;

const ArtworksAndPalletesImage = styled.img`
  max-height: 400px;
`;

const ColorsCard = styled.div``;

const ColorText = styled.div``;

// const ColorText = styled.div`
//   align-self: center;
//   margin: 0 10px;
// `;

const artists = [
    'balenciaga',
    'cezanne',
    'gauguin',
    'matisse',
    'mondrian',
];

const ArtworksAndPalettes = ({ tryDifferentColors }) =>
    <section className="hero is-primary is-full-height">
        <div className="container has-text-centered">
            <button className="button is-dark" onClick={tryDifferentColors}>Try Different Colors</button>
            {artists.map(artist =>
                <div className="hero" key={artist}>
                    <div className="hero-body">
                        <div className="container">
                            <ArtworkAndPalette className="columns is-vcentered is-centered box">
                                <div className="column">
                                    <ArtworksAndPalletesImage src={`https://s3.amazonaws.com/marshmallows/images_and_palettes/${artist}/${artist}_image.jpg`} />
                                </div>
                                <div className="column">
                                    <ArtworksAndPalletesImage src={`https://s3.amazonaws.com/marshmallows/images_and_palettes/${artist}/${artist}_palette.png`} />
                                </div>
                                <ColorsCard className="column card box">
                                    <p className="title" style={{ color: "black" }}>
                                        Strong Match
                                    </p>
                                    <p>Score: 100%</p>
                                    <div className="columns is-centered is-vcentered" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                                        <ColorCircle className="column is-narrow" color="grey" />
                                        <ColorText className="column">Grey</ColorText>
                                        <ColorText className="column">Hex: <strong>#FFFFFF</strong></ColorText>
                                        <ColorText className="column">Percentage: <strong>70%</strong></ColorText>
                                    </div>
                                    <div className="columns is-centered is-vcentered" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                                        <ColorCircle className="column is-narrow" color="blue" />
                                        <ColorText className="column">Blue</ColorText>
                                        <ColorText className="column">Hex: <strong>#FFFFFF</strong></ColorText>
                                        <ColorText className="column">Percentage: <strong>20%</strong></ColorText>
                                    </div>
                                    <div className="columns is-centered is-vcentered" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                                        <ColorCircle className="column is-narrow" color="orange" />
                                        <ColorText className="column">Orange</ColorText>
                                        <ColorText className="column">Hex: <strong>#FFFFFF</strong></ColorText>
                                        <ColorText className="column">Percentage: <strong>10%</strong></ColorText>
                                    </div>
                                </ColorsCard>
                            </ArtworkAndPalette>
                        </div>
                    </div>
                </div>
            )}
        </div>;
    </section >

export default ArtworksAndPalettes;