import React, {Component} from 'react'
import axios from 'axios';
const url = "http://localhost:3001";

class SingleItem extends Component {
    constructor() {
        super()
        this.state = {
          item: {}
        }
        this.onDelete = this.onDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }


    componentDidMount(){
        axios.get(`${url}/items/${window.location.pathname.split('/')[2]}`)
        .then(res => {
          this.setState({item: res.data});
        })        
    }

    onDelete(){
        axios.delete(`${url}/items/${window.location.pathname.split('/')[2]}`)
        .then(res => {
            this.setState({item: res.data});
          }) 
    }

    handleUpdate(event){
        event.preventDefault()
        const title = event.target.titleOfItem.value
        const imageUrl = event.target.imageOfItem.value
        const description = event.target.descriptionOfItem.value
        const price = event.target.priceOfItem.value
       
        axios.put(`${url}/items/${window.location.pathname.split('/')[2]}`,{
          title,
          imageUrl,
          description,
          price,
        })
        .then(res => {
            this.setState({item: res.data});
          })  
    }

    handleChange(event){
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    render(){
        const item = this.state.item
        return(
            <div>
            <div>
                <h1>{item.title}</h1>
                <img src={item.image}/>
                <p>{item.description}</p>
                <h2>{item.price}</h2>
                <button onClick={this.onDelete}>x</button>
            </div>
            <div>
                <h1>Update Item</h1>
            <form onSubmit={this.handleUpdate}>
                  <label>
                    Title of Item: 
                    <input
                      type="text"
                      name="titleOfItem"
                      onChange={this.handleChange}
                    />
                  </label>

                  <label>
                    Image of Item: 
                    <input
                      type="text"
                      name="imageOfItem"
                      onChange={this.handleChange}
                    />
                  </label>

                  <label>
                    Description of Item: 
                    <input
                      type="text"
                      name="descriptionOfItem"
                      onChange={this.handleChange}
                    />
                  </label>

                  <label>
                    Price of Item: 
                    <input
                      type="text"
                      name="priceOfItem"
                      onChange={this.handleChange}
                    />
                  </label>

                  <button type="submit">Submit</button>
                </form>
            </div>
            </div>
        )
    }
}

export default SingleItem