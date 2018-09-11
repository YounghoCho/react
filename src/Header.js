import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  state = {
    page : ''
  }
  //SPA function
  submitPage = (e) => {
   //turn back menu color to '#eee'
   const menuColor = '#eee';
   document.getElementById("styleHomeButton").style.color = menuColor;
   document.getElementById("styleMenu1").style.color = menuColor;
   document.getElementById("styleMenu2").style.color = menuColor;
   document.getElementById("styleMenuLast").style.color = menuColor;
   e.target.style.color = '#D2691E';
   //pass 'state' to parent for SPA controll
   this.setState({
    page : e.target.innerHTML
   });
   //*******************
   //*setState is Asnyc*
   //*******************/
   setTimeout(()=>{
    this.props.handleMainPage(this.state.page);
   },1);
  }
  //render component
  render() {
    //return component
    return (
      <div id="styleHeader">
        <span id="styleHomeButton" onClick={this.submitPage}>HOME</span>
        <span id="styleMenu1" onClick={this.submitPage}>{this.props.name}</span>
        <span id="styleMenu2" onClick={this.submitPage}>{this.props.name2}</span>
        <span id="styleMenuLast"  onClick={this.submitPage}>{this.props.name3}</span>
      </div>
    );
  }
}

export default Header;
