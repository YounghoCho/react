import React, {Component} from 'react';

class Counter extends Component{
    state = {
        number : 0
    }
    //내부 익명함수 설정
    increase = () => {
        this.setState({
            number : this.state.number + 1
        });
    }
    decrease = () => {
        //비구조화 할당 (원래 this.state.number로 접근해야할 것을 number로 접근하게 해준다.)
        const {number} = this.state;
        //validation 설정
        if(number == 0){
            alert("0보다 커야합니다");   
            return false;
        }
        else{
            this.setState({
                number : number - 1
            });
        }
    }
    render(){
        return(
            <div>
                <div>카운터</div>
                <div>값 : {this.state.number}</div>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
            </div>

        );
    }
}

export default Counter;