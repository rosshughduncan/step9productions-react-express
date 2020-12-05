import React, { Component } from 'react';
import styles from './styling/App.module.css';
import { pubImg } from './global/globalFunctions';
import HeaderBar from './navigation/HeaderBar';
import SectionBar from './navigation/SectionBar';
import MainBodyController from './main_body_comps/MainBodyController';

class App extends Component {
  state = {
    /********************
     * Set home page here
     *******************/
    headerBarSelection: 'Home',
    sectionBarSelection: 'Welcome'
  };

  headerBarClickHandler = (tab) => {
    this.setState({ headerBarSelection: tab });

    /********************************************** 
    * Set default section selection for each header
    ***********************************************/
    if (tab === 'Home') {
      this.setState({ sectionBarSelection: 'Welcome' });
    }
    // On Portfolio tab
    else {
      this.setState({ sectionBarSelection: 'Audio and Video Production' });
    }
  };

  sectionBarClickHandler = (tab) => {
    this.setState({ sectionBarSelection: tab});
  };

  render() {
    return (
      <div className={styles.App}>
        <img
          src={pubImg('Logo.png')}
          alt="Logo"
          width='240px'
          height='36px'
        />
        <HeaderBar
          buttonClicked={this.headerBarClickHandler}
          selectedItem={this.state.headerBarSelection}
        />
        <SectionBar
          buttonClicked={this.sectionBarClickHandler}
          selectedHeader={this.state.headerBarSelection}
          selectedSection={this.state.sectionBarSelection}
        />
        <MainBodyController
          selectedHeader={this.state.headerBarSelection}
          selectedSection={this.state.sectionBarSelection}
        />
      </div>
    );
  }
}

export default App;