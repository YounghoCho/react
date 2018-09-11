import React, { Component } from 'react';
import './Header.css';

//클래스 컴포넌트
class Header extends Component {
  state = {
    page : ''
  }
  //SPA 함수
  submitPage = (e) => {
   e.target.style.color = '#D2691E';
   //state값을 부모로 전달한다음. 넘어온 state값에 따라서 show,hide해보자.
   this.setState({
    page : e.target.innerHTML
   });
   //setState가 비동기로 실행되기 때문에 setTimeout을 걸어줘야 정상작동한다.
   setTimeout(()=>{
    this.props.handleMainPage(this.state.page);
   },1);
  }

  //컴포넌트 렌더링
  render() {
    //컴포넌트 반환
    return (
      <div id="styleHeader">
        <span id="styleHomeButton" onClick={this.submitPage}>HOME</span>
        <span id="styleMenu" onClick={this.submitPage}>{this.props.name}</span>
        <span id="styleMenu"  onClick={this.submitPage}>{this.props.name2}</span>
        <span id="styleMenuLast"  onClick={this.submitPage}>{this.props.name3}</span>
      </div>
    );
  }
}

export default Header;
