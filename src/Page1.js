import React, { Component } from 'react';
import bb from 'billboard.js';
//cs파일이 있어야 컬러풀하게 나온다.
import './billboard.css';

class Page1 extends Component {
    //컴포넌트 Rendering 이후에 실행
    componentDidMount() {
        this._renderChart();
      }
    //호출 될 컴포넌트
    _renderChart() {
        //그래프 생성
        bb.generate({
            data: {
              columns: [
              ["data1", 300, 350, 300, 0, 0, 0],
              ["data2", 130, 100, 140, 200, 150, 50]
              ],
              types: {
                data1: "area",
                data2: "area-spline"
              },
              colors: {
                data1: "#48cfad",
                data2: "#ffa6cf"
              }
            },
            bindto: "#AreaChart"
          });
    }  
    render() {
        return <div id="AreaChart"></div>;
    }
}

export default Page1;
