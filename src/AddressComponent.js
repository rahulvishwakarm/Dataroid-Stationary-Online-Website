import React, { Component } from 'react'
import App from './App';

class AddressComponent extends Component {

    constructor(props){
        super(props);
        
        this.state = {
                username : '',
                phonenumber:'',
                Pincode:'',
                address:'',
                States:''
        }
        
        this.updateInputName = this.updateInputName.bind(this);
        this.updateInputmobile = this.updateInputmobile.bind(this);
        this.updateInputPincode=this.updateInputPincode.bind(this);
        this.updateInputaddress = this.updateInputaddress.bind(this);
        this.updateInputState = this.updateInputState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        }

        updateInputName(event){
            this.setState({username : event.target.value})
            }
            
            updateInputmobile(event){
            this.setState({phonenumber : event.target.value})
            }
            
            updateInputPincode(event){
            this.setState({Pincode: event.target.value})
            }
            
            updateInputaddress(event){
            this.setState({address : event.target.value})
            }
            
            updateInputState(event){
            this.setState({States: event.target.value})
            }
            
            
            handleSubmit(){
            alert("Shipping Address"+"\n"+"Name: "+this.state.username+"\n"+"Mobile No: "+this.state.phonenumber+"\n"+"Pincode: "+this.state.Pincode+"\n"+"Address: "+this.state.address+"\n"+"State: "+this.state.States)
            }

    render() {
        return (    
            <div>
                <form >
                    <div className="addressContent">
                            <label htmlFor="usname">Name</label><input type="text" placeholder="Enter Name" name="usname" onChange={this.updateInputName} />
                            <label htmlFor="phone">Phone</label><input type="tel" placeholder="10-digit Mobile number" name="phone" onChange={this.updateInputmobile} />
                            <label htmlFor="pincode">Pin Code</label><input type="text" placeholder="6-digit Pin Code"  name="pincode"  onChange={this.updateInputPincode} />
                            <label htmlFor="address">Address</label><textarea type="text" placeholder="Enter Shipping Address" rows="10" cols="30" name="address" onChange={this.updateInputaddress} />
                            <label htmlFor="States">State</label>
                            <select name="States" onChange={this.updateInputState}>
                                    <option>Andaman and Nicobar Islands</option>
                                    <option>Andhra Pradesh</option>
                                    <option>Arunachal Pradesh</option>
                                    <option>Assam</option>
                                    <option>Bihar</option>
                                    <option>Chandigarh</option>
                                    <option>Chhattisgarh</option>
                                    <option>Dadra and Nagar Haveli</option>
                                    <option>Daman and Diu</option>
                                    <option>Delhi</option>
                                    <option>Goa</option>
                                    <option>Gujarat</option>
                                    <option>Haryana</option>
                                    <option>Himachal Pradesh</option>
                                    <option>Jharkhand</option>
                                    <option>Karnataka</option>
                                    <option>Kerala</option>
                                    <option>Lakshadweep</option>
                                    <option>Madhya Pradesh</option>
                                    <option>Maharashtra</option>
                                    <option>Manipur</option>
                                    <option>Meghalaya</option>
                                    <option>Mizoram</option>
                                    <option>Nagaland</option>
                                    <option>Odisha</option>
                                    <option>Puducherry</option>
                                    <option>Punjab</option>
                                    <option>Rajasthan</option>
                                    <option>Tamil Nadu</option>
                                    <option>Tripura</option>
                                    <option>Uttar Pradesh</option>
                                    <option>Uttarakhand</option>
                                    <option>West Bengal</option>
                            </select>
                            <input type="submit" onClick={this.handleSubmit} />
                    </div>
                </form>
            </div>
        )
    }
}

export default AddressComponent;
