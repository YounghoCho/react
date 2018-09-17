//Why React? : 데이터 변화시 가상 문서를 만들어 변경될 부분만 렌더링할 수 있기때문.
import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

//FB의 create-react-app에는 Webpack이 내장되어 코드 변경을 감지해 자동 업데이트한다. 
class App extends Component {
  //show & hide state(props는 변하지 않는 값 - immutable)
  state = { //visible + Page
    vHome : 'true', vPage1 : 'false', vPage2 : 'false', vPage3 : 'false'
  }

  //Header에서 state값을 전달받는다.
  handleMainPage = (pageName) => {
    if(pageName === 'HOME'){
      this.setState({
        vHome : 'true', vPage1 : 'false', vPage2 : 'false', vPage3 : 'false'
      });
    }
    else if(pageName === '데이터 분석'){
      this.setState({
        vHome : 'false', vPage1 : 'true', vPage2 : 'false', vPage3 : 'false'
      });
    }else if(pageName === '데이터 분포'){
      this.setState({
        vHome : 'false', vPage1 : 'false', vPage2 : 'true', vPage3 : 'false'
      });
    }else if(pageName === '데이터 군집'){
      this.setState({
        vHome : 'false', vPage1 : 'false', vPage2 : 'false', vPage3 : 'true'
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
        {this.state.vHome === 'true' ? (<Home data={[5,10,1,3,24,11,2,4,9]} size={[500,500]}></Home>) : ''}
        {this.state.vPage1 === 'true' ? (<Page1></Page1>) : ''}
        {this.state.vPage2 === 'true' ? (<Page2></Page2>) : ''}
        {this.state.vPage3 === 'true' ? (<Page3></Page3>) : ''}
      </div>
    );
  }
}
//{this.state.makeVisiblePage === 'true' ? (<Page1></Page1>) : ''}
      
export default App;
