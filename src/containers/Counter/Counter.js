import React, { Component } from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';

class Counter extends Component {
    state = {
        counter: 0
    }
    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.incBy1} />
                <CounterControl label="Decrement" clicked={this.props.decBy1}  />
                <CounterControl label="Add 5" clicked={this.props.incBy5}  />
                <CounterControl label="Subtract 5" clicked={this.props.decBy5}  />

            </div>
        );
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        incBy1:()=>dispatch({type:'INCREMENT'}),
        decBy1:()=>dispatch({type:'DECREMENT'}),
        incBy5:()=>dispatch({type:'INCREMENTby5',value:5}),
        decBy5:()=>dispatch({type:'DECREMENTby5',value:5}),
    }
}

const mapStateToProps=state=>{
    return{
        ctr:state.counter
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);

