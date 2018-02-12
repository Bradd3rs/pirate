import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import View from './components/View';
import Controlls from './components/Controlls';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gold: 0,
      boat: {
        level: 1,
        upgradeCost: 2
      },
      maps: 3,
      viewBoat: true,
      disableButtons: false
    }
    this.handleIncreaseGold = this.handleIncreaseGold.bind(this);
    this.handleEmbark = this.handleEmbark.bind(this);
    this.handleUpgradeBoat = this.handleUpgradeBoat.bind(this);
    this.handleViewShop = this.handleViewShop.bind(this);
    this.handleBuyMap = this.handleBuyMap.bind(this);
  }
  buttonCooldown(time) {
    this.setState((prevState) => ({ disableButtons: !prevState.disableButtons })); 
  }
  handleEmbark() {
    const cooldown = 3000;
    setTimeout(() => { 
      this.setState((prevState) => ({ 
        disableButtons: !prevState.disableButtons,
        gold: prevState.gold +10,
        maps: prevState.maps -1
      })); 
    }, cooldown);
    this.buttonCooldown(cooldown)
    console.log('gone questing')
  }
  handleUpgradeBoat() {
    const cooldown = 3000;
    if(this.state.gold < this.state.boat.upgradeCost) {
      console.log('not enough gold')
    } else {
      setTimeout(() => { 
        this.setState((prevState) => ({ 
          disableButtons: !prevState.disableButtons,
          boat: {
            level: prevState.boat.level +1,
            upgradeCost: prevState.boat.upgradeCost + 2
          },
          gold: prevState.gold - prevState.boat.upgradeCost
        })); 
      }, cooldown);
      
      this.buttonCooldown(cooldown)
    }

  }
  handleIncreaseGold() {
    this.setState((prevState) => ({ gold: prevState.gold + 1}));
    console.log('increaseGold')
  }
  handleViewShop() {
    this.setState((prevState) => ({ viewBoat: !prevState.viewBoat } ));
    console.log(this.state.viewBoat, 'view')
  }
  handleBuyMap() {
    this.setState((prevState) => (
      { 
        gold: prevState.gold - 2,
        maps: prevState.maps + 1
      }
    ));
  }
  render() {
    return (
      <Wrapper>
        <Header gold={this.state.gold} boat={this.state.boat} maps={this.state.maps} />
        <View viewBoat={this.state.viewBoat} gold={this.state.gold} buyMap={this.handleBuyMap} />
        <Controlls 
          disabled={this.state.disableButtons} 
          embark={this.handleEmbark} 
          upgradeBoat={this.handleUpgradeBoat} 
          viewShop={this.handleViewShop} 
          canEmbark={this.state.maps > 0}
          canUpgrade={this.state.gold >= this.state.boat.upgradeCost}
          view={this.state.viewBoat}
          />
      </Wrapper>
    );
  }
}

const Wrapper = styled.section`
  max-width: 600px;
  margin: auto;
  padding: 10px;
`;

export default App;
