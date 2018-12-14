import React, {Component} from 'react';

class MirrorPrint extends Component{
		constructor(){
        		super();
          		this.state ={
                	userInput : '',
                    mirrorStr: 'This should mirror the text you typed into the input field.'
                }
        }
  		
  		updateTextField =(userInput) =>{
        	this.setState(()=>({
              userInput: userInput,
              mirrorStr: userInput.split("").reverse().join("")
            }))
        }
  
        render(){
          return(
               <div className="container">
                    <input type="text" 
                      placeholder="Say Something"
                      value ={this.state.userInput}
                      onChange ={(event) => this.updateTextField(event.target.value)}/>
                    <p className="echo">Echo:</p>
                    <p>{this.state.mirrorStr}</p>
              </div>
          )}
}

export default MirrorPrint;