import React from 'react';
import styled from 'styled-components';


class Controlls extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {

        let canUpgrade = this.props.disabled || !this.props.canUpgrade ? true : false,
            canEmbark = this.props.disabled || !this.props.canEmbark ? true : false;

        return (
            <Wrapper>
                <Button type="button" disabled={canEmbark} onClick={this.props.embark}>Embark</Button>
                <Button type="button" disabled={canUpgrade} onClick={this.props.upgradeBoat}>Upgrade boat</Button>
                <Button 
                    type="button" 
                    disabled={this.props.disabled} 
                    onClick={this.props.viewShop} >
                        {this.props.view ? 'Shop' : 'Boat'}
                </Button>
            </Wrapper>
        )
    }
} 

const Button = styled.button`
    font-size: 1.2em;
    padding: 10px 20px;
    margin: 5px;
    border: none;
    border-bottom: 3px solid purple;
    text-align: center;
    color: white;
    background-color: rebeccapurple;
    transform: translateY(0);
    transition: transform .2s, border-bottom .2s;
    
    &:disabled {
        opacity: .5;
        pointer-events: none;
    }

    &:active {
        border-bottom: 0;
        transform: translateY(3px);
    }

    &:focus {
        outline: 0;
    }
`;

const Wrapper = styled.section`
  padding: 1em;
  background: papayawhip;
  display: flex;
  justify-content: space-around;
`;

export default Controlls;