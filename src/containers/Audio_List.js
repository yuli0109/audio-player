import React, { Component } from 'react'

class AudioList extends Component {
  clickEvt(el){
    this.props.clickEvt(el);
  }

  render(){
    return(
      <ul>
        {this.props.catalog.map((el, idx)=>{
          return (
            <li onClick={this.clickEvt.bind(this, el)} key={idx}>{el.category} - {el.title}</li>
          )
        })}
      </ul>
    )
  };
}

export default AudioList;
