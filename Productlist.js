import react,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import shop from './shopping_cart.jpg';
class Productlist extends Component{
render(){
    let products=[
        {
            id:1,
            type:"Clothes:",
            name:"Saree"
        },
        {
            id:2,
            type:"Fruits:",
            name:"Apple"
        },
        {
            id:3,
            type:"Vegetables:",
            name:"Potato"
        },
        {
            id:4,
            type:"Makeup:",
            name:"Kajal"
        }
    ]
    return (
        <div classname="component-container">
            <div classname="heading" style={{background:"Green", textAlign:"center", padding:20 }}>
                 PRODUCTS AVAILABLE
            </div>
            <div classname="image">
                <img src={shop} height={300} width={1290}></img>
            </div>
            
            <div classname="component-body-container">
                <span classname="grid-item type-heading">Type </span>
                <span classname="grid-item name-heading">Name</span>
            </div>
            {
                products.map(sub=>{
                    return <div key={sub.id} classname="grid-container">
                        <span classname="grid-item">{sub.type}</span>
                        <span classname="grid-item">{sub.name}</span>
                    </div>
                })
            }

        </div>

    )
        }
    }
    export default Productlist;