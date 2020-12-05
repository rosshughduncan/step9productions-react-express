import React, { Component } from 'react';
import styled, { ThemeProvider, keyframes, css } from 'styled-components';
import { selected, unselected } from '../styling/themes';

class SectionBar extends Component {
    ANIMATION_DURATION = '0.25s';

    constructor(props) {
        super(props);

        /***********************
         * Set menu options here
         ***********************/
        this.menuOptions = {
            'Home': ['Welcome', 'About'],
            'Portfolio': ['Audio and Video Production', 'Live Events and Broadcasting']  
        };

        // Animations
        this.slideAnimation = keyframes`
            0% {
                height: 0rem;
                visible: false;
            }
            100% { height: 2.5rem; }
        `;
        this.sectionTextFade = keyframes`
            0% { opacity: 0; }
            100% { opacity: 1; }
        `;
        this.sectionBarDivAniProps = css`
            background-color: #28380b;
            animation-name: ${this.slideAnimation};
            animation-duration: ${this.ANIMATION_DURATION};
        `;

        // Initialisation
        this.SectionBarDiv = styled.div``;
        this.isVisible = false;

        // Run section bar code when page loads
        this.displaySectionBar(this.props);
    }

    shouldTextFade = (nextProps) => {
        // Apply fade animation if the header selection has changed
        if (nextProps.selectedHeader !== this.props.selectedHeader) {
            return css`
                animation-name: ${this.sectionTextFade};
                animation-duration: ${this.ANIMATION_DURATION};
                animation-fill-mode: forwards;
            `;
        }
        else { return ''; }
    };

    displaySectionBar = (nextProps) => {
        // Set correct section options depending on header selection
        const keyVals = Object.keys(this.menuOptions);
        if (keyVals.includes(nextProps.selectedHeader)) {
            // Menu item array initialisation
            this.itemsToDisplay = [];

            // Set styling of menu item if it should be displayed
            const MenuItem = styled.div`
                display: inline-block;
                color: ${props => props.theme.col};
                text-align: center;
                padding-top: 0.4rem;
                padding-bottom: 0.4rem;
                width: ${100 / this.menuOptions[nextProps.selectedHeader].length}%;
                font-weight: bold;
                transition: ${this.ANIMATION_DURATION};
                &:hover {
                    color: ${props => props.theme.hoverCol};
                    cursor: pointer;
                }
                ${this.shouldTextFade(nextProps)}
            `;

            // Only open the bar if it's not already showing
            if (this.isVisible === false) {
                this.SectionBarDiv = styled.div`
                    ${this.sectionBarDivAniProps}
                    animation-fill-mode: forwards;
                `;
                this.isVisible = true;
            }

            // Populate menu items depending on tab selected
            let currentMenuItem;
            this.menuOptions[nextProps.selectedHeader].forEach(tab => {
                // Set current menu item
                currentMenuItem = (
                    <MenuItem
                        onClick={() => this.props.buttonClicked(tab)}
                        key={tab}
                    >
                        {tab}
                    </MenuItem>
                );

                // Add menu item to list of components to display applying theming
                this.itemsToDisplay.push(
                    <ThemeProvider
                        theme={() => {
                            if (tab === this.props.selectedSection) {
                                return selected;
                            }
                            else {
                                return unselected;
                            }
                        }}
                        key={tab}
                    >
                        {currentMenuItem}
                    </ThemeProvider>
                );
            });
        }
        else {
            // Clear the menu items
            this.itemsToDisplay = [];

            // Only close bar if it is showing
            if (this.isVisible) {
                this.SectionBarDiv = styled.div`
                    ${this.sectionBarDivAniProps}
                    animation-direction: reverse;
                `;
                this.isVisible = false;
            }
        }
    };

    shouldComponentUpdate = (nextProps) => {
        this.displaySectionBar(nextProps);
        return true;
    };

    render() {
        return (
            <div>
                <this.SectionBarDiv>
                    {this.itemsToDisplay}
                </this.SectionBarDiv>
            </div>
        );
    }
}

export default SectionBar