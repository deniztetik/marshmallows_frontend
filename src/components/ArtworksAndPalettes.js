import React, { Fragment } from 'react';

import ColorCircle from './ColorCircle';

import styled from 'styled-components';

// const ArtworkAndPalette = styled.div`
//   margin: 20px;
// `;

const ArtworkAndPalette = styled.div``;

const ArtworksAndPalletesImage = styled.img`
  max-height: 200px;
`;

const ColorsCard = styled.div``;

const ColorText = styled.div`
  align-self: center;
  margin: 0 10px;
`;

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
                <div className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <ArtworkAndPalette className="columns is-centered box" key={artist}>
                                <div className="column">
                                    <ArtworksAndPalletesImage src={`../images_and_palettes/${artist}/${artist}_image.jpg`} />
                                </div>
                                <div className="column">
                                    <ArtworksAndPalletesImage src={`../images_and_palettes/${artist}/${artist}_palette.png`} />
                                </div>
                                <ColorsCard className="column card box">
                                    <p className="title" style={{ color: "black" }}>
                                        Strong Match
                    </p>
                                    <p>Score: 100%</p>
                                    <div className="card-content">
                                        <div className="media">
                                            <ColorCircle className="media-left" color="grey" />
                                            <ColorText className="media-content">Grey</ColorText>
                                        </div>
                                        <div className="media">
                                            <ColorCircle className="media-left" color="blue" />
                                            <ColorText className="media-content">Blue</ColorText>
                                        </div>
                                        <div className="media">
                                            <ColorCircle className="media-left" color="orange" />
                                            <ColorText className="media-content">Orange</ColorText>
                                        </div>
                                    </div>
                                </ColorsCard>
                            </ArtworkAndPalette>
                        </div>
                    </div>
                </div>
            )}
        </div>;
    </section>

export default ArtworksAndPalettes;