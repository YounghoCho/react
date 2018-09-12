//d3 with react ( BarChart )
//from : https://medium.com/@Elijah_Meeks/interactive-applications-with-react-d3-f76f7b3ebc71
//ref : https://medium.com/technical-credit/declarative-d3-examples-in-react-6e736e526182
import React, { Component } from 'react'
import './App.css'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'

class Home extends Component {
   //api_1 : 컴포넌트 생성
   constructor(props){
      super(props)
      //받아온 props를 일반함수에서 사용하기 위해서는 bind해야한다(LifeCycle Func에서는 필요없음)
      this.createBarChart = this.createBarChart.bind(this)
   }
   //api_2 : 컴포넌트 생성 완료 -> re-draw
   componentDidMount() {
      this.createBarChart()
   }
   //api_3 : prop/state 변화로 리렌더링 완료 -> re-draw
   componentDidUpdate() {
      this.createBarChart()
   }
   
   createBarChart() {
    //react도 DOM을 렌더링하고, D3도 Jquery라서 DOM을 렌더링하려고한다(충돌)
    //react에서 <svg ref=>를 통해 DOM을 D3에게 전달해서 D3가 렌더링하게한다.
    const node = this.node
    //props들은 this.props.data로 접근한다.
    const dataMax = max(this.props.data)
    const yScale = scaleLinear()
        .domain([0, dataMax])
        .range([0, this.props.size[1]])
        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .enter()
            .append('rect')        
        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .exit()
            .remove()        
        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .style('fill', '#fe9922')
            .attr('x', (d,i) => i * 25)
            .attr('y', d => this.props.size[1] - yScale(d))
            .attr('height', d => yScale(d))
            .attr('width', 25)
   }

//작업순서 : react rendering -> D3 rendering
//호출순서 : render()->return()->createBarChart()
render() {
  const styleChart={
     border : '1px solid #333',
     margin : '10%'
  }
      return (
        <svg ref={node => this.node = node}
        width={1024} height={500} style={styleChart}>
        </svg>
      )
   }
}
export default Home