import Results from './Results';
import './App.css';
import {Component, useState} from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

/* import axios to access db 
const api = axios.create({
  baseURL: ''
})
*/

export default class App extends Component {

  state = {
    /* test data */
    payments: [
      "1", 
      "Bob Jones",
      "32132132132132", 
      "05",
      "25", 
      "123",
      "95649"
    ],
    search: [],
    active: 0
  }
/*
  constructor() {
    super();
    api.get('/').then(res => {
      console.log(res.data)
      this.setState({ payments: res.data})
    }) 
  }
*/

  updateSearch(event) {
    this.setState({
      search: event.target.value 
    });
  }


  save() {
    console.log(this.state.search);
    if(this.state.search === this.state.payments[0]){
      this.setState({active: "1"})
    }
    /*
    $.ajax({
      url: "http://localhost:3000/api/v1/people/save",
      method: "POST",
      data: {
        id: context.state.id,
        first_name: context.state.firstName,
        last_name: context.state.lastName
      },
      success: function(response) {
        alert("Successfully saved record!");
      },
      error: function(response) {
        alert("Error in saving record!");
      }
    }); */
  }


  render(){
    return (
      <div className="App">
        {/* Search bar */}
        <div className='search-box-container'>
          <div className='search-box-background'>
            <input type="text" placeholder="Enter SFDC Billing ID" value={this.state.search} onChange={this.updateSearch.bind(this)} /><button onClick={this.save.bind(this)}>Go!</button>   
          </div>  
          <div className='results-container'>
            <table className="results">
              <tbody>           
              <tr>
                <th>Billing ID</th>
                <th>Card Owner</th>
                <th>Card Number</th>
                <th>Expiration MM</th>
                <th>Expiration YY</th>
                <th>Security Code</th>
                <th>Zip Code</th>
              </tr>
              {this.state.active === "1" && <Results payments={this.state.payments} />}
              </tbody> 
            </table>
          </div>
        </div>
      </div>
    );
  }
}