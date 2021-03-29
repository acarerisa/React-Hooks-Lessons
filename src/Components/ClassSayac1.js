import React, { Component } from "react";

export default class ClassSayac1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sayac: 0,
      isim:""                   
    };
  }
  componentDidMount() {
    document.title = `${this.state.sayac} defa tıklandı`;
  }

  componentDidUpdate(prevProps,prevState) {  
    if(prevState.sayac !== this.state.sayac){
      console.log("güncelleme yapıldı")    
      document.title = `${this.state.sayac} defa tıklandı`;
    }
    
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.isim} onChange={(e)=>this.setState({isim:e.target.value})} />
       <button onClick={() => this.setState({ sayac: this.state.sayac + 1 })}>
          {this.state.sayac} defa tıklandı
        </button>
      </div>
    );
  }
}
