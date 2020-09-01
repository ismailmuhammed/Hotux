import React, { Component ,createContext } from 'react';
export const PriceContext = createContext()
class PriceContextProvider extends Component {
  state={
    price: null
  }
  updatePrice = (price)=>{
    this.setState({price})
  }
  render() {
    return (
      <PriceContext.Provider value={{...this.state,updatePrice:this.updatePrice}}>
        {this.props.children}
      </PriceContext.Provider>
    );
  }
}

export default PriceContextProvider;