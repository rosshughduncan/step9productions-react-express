import React, { Component } from 'react';
import classes from '../styling/App.module.css';
import styled, { ThemeProvider } from 'styled-components';
import { selected, unselected } from '../styling/themes';

class HeaderBar extends Component {
    constructor(props) {
        super(props);

        /***********************
         * Set menu options here
         ***********************/ 
        this.menuOptions = ['Home', 'Portfolio', 'Contact'];
    }

    menuItemsReturn = () => {
        const MenuItem = styled.div`
            display: inline-block;
            color: ${props => props.theme.col};
            text-align: center;
            padding-top: 0.4rem;
            padding-bottom: 0.4rem;
            width: ${100 / this.menuOptions.length}%;
            font-weight: bold;
            transition: 0.25s;
            &:hover {
                color: ${props => props.theme.hoverCol};
                cursor: pointer;
            }
        `;

        return this.menuOptions.map(option => {
            return (
                <ThemeProvider 
                    theme={() => {
                        if (option === this.props.selectedItem) {
                            return selected;
                        }
                        else {
                            return unselected;
                        }
                    }}
                    key={option}
                >
                    <MenuItem
                        onClick={() => this.props.buttonClicked(option)}
                        key={option}
                    >
                        {option}
                    </MenuItem>
                </ThemeProvider>
            );
        });
    };

    render() {
        return(
            <div className={`${classes.App} ${classes.MenuBar}`}>
                {this.menuItemsReturn()}
            </div>
        );
    }
}

export default HeaderBar;