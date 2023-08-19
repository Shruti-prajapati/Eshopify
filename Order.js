import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import shop from './placing-orders.png';
class Order extends Component{
    constructor()
    {
        super();
        this.state={
            id:0,
            Type:'',
            Name: ''
        }
        console.log(this.state);
    }
    inputChangedHandler=(e)=>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState(state);
        console.log(this.state);
    }
    render(){
        const {Type, Name} = this.state;
        return(
            <div>
            <div classname="heading" style={{background:"Green" ,padding:20, textAlign: 'center'}}>
                Place your order
            </div>
            <div classname="image">
                <img src={shop} height={250} width={1290}></img>
            </div>
            <button classname="custom-btn" style={{background:"Red"}}>Back</button>
            <form classname="subscriber-form">
                <label htmlFor="Type" classname="label-control">Type:</label><br />
                <input id="Type" type="text" classname="input-control" name="Type" onChange={this.inputChangedHandler}></input><br /><br />
                <label htmlFor="Name" classname="label-control">Name:</label><br />
                <input id="Name" type="text" classname="label-control" name="Name" onChange={this.inputChangedHandler}></input><br /><br />
                <div classname="product-info-container">
                     <span classname="product-to-add-heading">Order to be placed: </span><br />
                     <span classname="product-info">Type:{Type}</span><br />
                     <span classname="product-info">Name:{Name}</span>
                </div>
                <button type="submit" classname="custo-btn add-btn" style={{background:"Green"}}>Place order</button> 
            </form>
            </div>
        )
    }
}
export default Order;