import React, {Component} from 'react'
import axios from 'axios';
const url = "http://localhost:3001";


class Items extends Component {
    constructor() {
      super()
      this.state = {
        items: []
      }
    }
    componentDidMount(){
      axios.get(`${url}/items`)
      .then(res => {
        this.setState({items: res.data});
      })
      
    }
    render() {
        return (
            <div>
              <h1> Categories... </h1>
              {
                this.state.items.map(item =>{
                 return (
                  <div key={item.id}>
                  <h1>{item.title}</h1>
                  <img src={item.image}/>
                  <p>{item.description}</p>
                  <h3>{item.price}</h3>
                  </div>
                 )
                }
                )
              }
            </div>

        )
        }
}

export default Items