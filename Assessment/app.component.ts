import { Component } from '@angular/core';
//import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstproject';
    getName(name:string){
    console.log(name);
    return name;
  }
  getN(){
    console.log("Charithra");
  }
  getdown(){
    console.log("keydown");
  }
 eventCallFunction(eventName:string){
   console.log(eventName +" is called ...")
 }
   
name="Charithra"
disablebox=true
enableInput(){
this.disablebox=false
}
pholder="enter first name"
changepholder(){
this.pholder="enter last name"
}
day="today";
isLoggedIn=true;
Colors="Blue";
textColor="Orange";
bgColor="white";
styleColor="newFont";
names=[
  {
  fName:"Tom",
  age:21
  },{
  fName:"Jerry",
  age:15
  },{
   fName:"Pikachu",
   age:14
  }
]

//  fname:string='';
//  lname:string='';
//  age:string='';
//  terms:boolean=false;

//  onSubmit(formValue:NgForm){
//  console.log(formValue.value)
//  console.log(formValue)
//  }


}


