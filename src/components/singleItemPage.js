import React, {Component} from 'react'
import axios from 'axios';
const url = "http://localhost:3001";

class SingleItem extends Component {
    constructor() {
        super()
        this.state = {
          item: {}
        }
      }


    componentDidMount(){
        axios.get(`${url}/items/${window.location.pathname.split('/')[2]}`)
        .then(res => {
          this.setState({item: res.data});
        })
        
    }

    render(){
        const item = this.state.item
        return(
            <div>
                <h1>{item.title}</h1>
                <img src={item.image}/>
                <p>{item.description}</p>
                <h2>{item.price}</h2>
            </div>
        )
    }
}

export default SingleItem