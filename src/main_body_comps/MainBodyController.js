import React, { Component } from 'react';
import IntroSection from './IntroSection';
import Portfolio from './portfolio/Portfolio';
import EventsCrewList from './portfolio/EventsCrewList';
import Bio from './Bio';
import classes from '../styling/App.module.css';
import ContactSimple from './ContactSimple';
import MainBody from './MainBody';

class MainBodyController extends Component {
    // Objects containing page data
    currentPageData = {
        headingText: '',
        image: {
            source: '',
            alt: ''
        },
        textBodyContent: null
    }
    previousPageData = {
        headingText: '',
        image: {
            source: '',
            alt: ''
        },
        textBodyContent: null
    }

    render() {
        // Set previous page properties to current
        this.previousPageData = this.currentPageData;

        // Logic tree for currently selected page
        if (this.props.selectedHeader === 'Home') {
            if (this.props.selectedSection === 'Welcome') {
                this.currentPageData = {
                    headingText: "Hi there.",
                    image: {
                        source: 'Welcome.jpg',
                        alt: "Welcome"
                    },
                    textBodyContent: <IntroSection/>
                }
            }
            // About section
            else {
                this.currentPageData = {
                    headingText: "About Step 9 Productions",
                    image: {
                        source: 'About.jpg',
                        alt: "Step 9 Productions home studio"
                    },
                    textBodyContent: <Bio/>
                }
            }
        }
        else if (this.props.selectedHeader === 'Portfolio') {
            if (this.props.selectedSection === 'Audio Production') {
                this.currentPageData = {
                    headingText: "Audio Production Examples",
                    image: {
                        source: '',
                        alt: ''
                    },
                    textBodyContent: <Portfolio/>
                }
            }
            // Live events section
            else {
                this.currentPageData = {
                    headingText: "Live Technical Expertise",
                    image: {
                        source: 'TEDxSalisbury.jpg',
                        alt: "TEDx Salisbury at Salisbury Arts Centre, 2020"
                    },
                    textBodyContent: <EventsCrewList/>
                }
            }
        }
        // Contact section
        else {
            this.currentPageData = {
                headingText: "Get In Touch",
                image: {
                    source: 'Logic shot edit.jpg',
                    alt: 'Audio production at the home studio'
                },
                textBodyContent: <ContactSimple/>
            }
        }

        return (
            <div className={classes.App}>
                <MainBody leaving={true} data={this.previousPageData}/>
                <MainBody leaving={false} data={this.currentPageData}/>
            </div>
        );
    }
}

export default MainBodyController;