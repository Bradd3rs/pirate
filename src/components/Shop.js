import React from 'react';
import styled from 'styled-components';

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maps: 3
        }
        this.handleBuyMap = this.handleBuyMap.bind(this);
    }

    handleBuyMap() {
        if (this.state.maps > 0 && this.props.gold > 0) {
            this.setState((prevState) => ({ maps: prevState.maps - 1 } ));
            console.log('buy map');
            this.props.buyMap()
        }
    }
    render() {
        return (
            <Wrapper>
                <Content>Shop</Content>
                <Stock>
                    <Item>
                        Maps: {this.state.maps}
                        <Button onClick={this.handleBuyMap} disabled={this.props.gold === 0} type="button">Buy map</Button>
                    </Item>
                </Stock>
            </Wrapper>
        );
    }
} 


export default Shop;

const Stock = styled.ul`

`;
const Item = styled.li`
    color: palevioletred;
    font-size: 1.2em;
    display: flex;
    justify-content: space-between;
`;

const Wrapper = styled.section`
  padding: 1em;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 300px;
`;

const Content = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const Button = styled.button`
    font-size: 1.2em;
    padding: 5px 10px;
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