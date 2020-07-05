import React, { Component } from 'react';
import MainImage from './MainImage';
import classes from '../styling/App.module.css';
import TextBody from './TextBody';
import { fadeInAni, isLeaving } from '../global/globalStyleComps';
import styled from 'styled-components';

class MainBody extends Component {
    FadeDiv = styled.div``;

    render () {
        this.FadeDiv = styled.div`
             ${fadeInAni}
             ${() => isLeaving(this.props.leaving)}
             animation-fill-mode: forwards;
        `;
        
        return (
            <this.FadeDiv>
                <h1 className={classes.App}>{this.props.data.headingText}</h1>
                <MainImage imgObj={this.props.data.image}/>
                <TextBody text={this.props.data.textBodyContent}/>
            </this.FadeDiv>
        );
    }
}

export default MainBody;