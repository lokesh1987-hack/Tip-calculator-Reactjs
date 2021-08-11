
import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
 


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billAmount: "",
      service: "",
      name: "",
      customerData: [],
      len: "",
      totalTip: ""
    }
  }
  
  
  handler() {
    
    this.setState({ customerData: [...this.state.customerData, { name: this.state.name, tip: (this.state.service) * (this.state.billAmount) }] })
    this.setState({name:"",service:"",billAmount:""})
  }
  handler2() {
    this.setState({ len: this.state.customerData.length })
    var total = this.state.customerData.map(item => item.tip).reduce((a, b) => a + b, 0)
    this.setState({ totalTip: total })
  }

  render() {
  
    return (
      <div className="container">
        <div className="header">
          <h1>Tip Calculator</h1>
          <h3>Build in React</h3>
        </div>
        <div className="operation_body">
          <div className="input">
            {/* <label for="amount">Enter your bill amount</label> */}
            <TextField  id="outlined-secondary" label="Enter bill amount" variant="outlined" color="secondary"   type="number" name="amount" id="amount" value={this.state.billAmount} onChange={(e) => { this.setState({ billAmount: e.target.value }) }} />
          </div>
          <hr />
          <div className="satisfaction">
            {/* <span><label>How was the Service</label></span>
            
              <select value={this.state.service} onChange={(e) => { this.setState({ service: e.target.value }) }}>
                <option>--Select--</option>
                <option value="0.2">Exellent 20%</option>
                <option value="0.1">Good 10%</option>
                <option value="0.2">Bad 5%</option>
              </select> */}

       <FormControl variant="outlined" style={{marginTop:"20px",marginLeft:"55px"}}>
        <InputLabel htmlFor="outlined-age-native-simple">How was the Service</InputLabel>
        <Select native label="How was the Service" value={this.state.service} onChange={(e) => { this.setState({ service: e.target.value })}}>
          <option aria-label="--Select--" value="" />                                                                                                                                                                                                                                                                                                                                                
          <option value={0.2}>Exellent 20%</option>
          <option value={0.1}>Good 10%</option>
          <option value={0.05}>Bad 5%</option>
        </Select>
      </FormControl>
  
            {/* <span><input placeholder="Customer Name" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} /></span> */}
            <TextField id="outlined-secondary" style={{marginTop:"20px",marginLeft:"30px"}} label="Enter Customer Name" variant="outlined" color="secondary"   type="text" name="name" id="name" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
            <Button variant="contained" onClick={() => { this.handler() }}><i class="fa fa-floppy-o" aria-hidden="true">  Add Customer</i> </Button>
          </div>
        </div>
        <div className="output">
          <div className="title">
            <label>Customer List</label>
          </div>
          <hr />
          <ul>
            {this.state.customerData.map(item =>
              <li>{`${item.name} offering tip of ${item.tip} rupees.`} </li>
            )}
          </ul>
          <hr />
        </div>
        <div className="button">      
          <Button variant="contained" onClick={() => { this.handler2() }}><i class="fas fa-calculator">  Calculate Tip & Customer</i></Button>
        </div>
        <div className="table">  
          <table>
            <tr>
              <th1>Total Customer</th1>
              <th2>Total tip</th2>
            </tr>
            <tr>
              <td1>{this.state.len}</td1>
              <td2>{this.state.totalTip}</td2>
            </tr>
          </table>
        </div>
        <div className="copyright">
          <h2>Copyright @2021</h2>
        </div>
      </div>
    );
  }
}

export default App;
