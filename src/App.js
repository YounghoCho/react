import React, { Component } from 'react';
import './App.css';
//클래스 컴포넌트 호출
import Header from './Header';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

class App extends Component {
  //show & hide state
  //props는 변하지 않는 값이다(immutable)
  state = {
    visibleHome : 'true',
    visiblePage1 : 'false',
    visiblePage2 : 'false',
    visiblePage3 : 'false'
  }
  //Header에서 state값을 전달받는다.
  handleMainPage = (pageName) => {
    if(pageName === 'HOME'){
      this.setState({
        visibleHome : 'true',
        visiblePage1 : 'false',
        visiblePage2 : 'false',
        visiblePage3 : 'false'
      });
    }
    else if(pageName === '데이터 분석'){
      this.setState({
        visibleHome : 'false',
        visiblePage1 : 'true',
        visiblePage2 : 'false',
        visiblePage3 : 'false'
      });
    }else if(pageName === '데이터 분포'){
      this.setState({
        visibleHome : 'false',
        visiblePage1 : 'false',
        visiblePage2 : 'true',
        visiblePage3 : 'false'
      });
    }else if(pageName === '데이터 군집'){
      this.setState({
        visibleHome : 'false',
        visiblePage1 : 'false',
        visiblePage2 : 'false',
        visiblePage3 : 'true'
      });
    }else{
      alert("error at handleMainPage()");
    }
  }
  render() {
    return (
      //클래스 컴포넌트 사용
      <div>
        <Header name='데이터 분석' name2='데이터 분포' name3='데이터 군집'
                handleMainPage={this.handleMainPage}></Header>
        {/*home*/}
        {this.state.visibleHome === 'true' ? (<Home></Home>) : ''}
        {this.state.visiblePage1 === 'true' ? (<Page1></Page1>) : ''}
        {this.state.visiblePage2 === 'true' ? (<Page2></Page2>) : ''}
        {this.state.visiblePage3 === 'true' ? (<Page3></Page3>) : ''}
      </div>
    );
  }
}
//{this.state.makeVisiblePage === 'true' ? (<Page1></Page1>) : ''}
      
export default App;
