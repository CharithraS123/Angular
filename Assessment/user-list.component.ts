import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-list',
   template: `<div class="CS">
  <form>
  <h1>Employee Interests Survey form</h1>
  <label>Enter your name:</label>
  <input type= "text" name="un" />  <br> <br>
  <label>Enter your department:</label> 
  <input type= "text" name="un1" /> <br> <br>
  <label>Tell us a little about yourself:</label> 
  <input type= "text" name="un2" /><br> <br>
  <label>Enter your department:</label> 
  <input type="radio" name="r1" cheked/>Yes
  <input type="radio" name="r2" cheked/>No  <br><br>
  <label>How do you like to read about your favorite topics?</label>
  <input type="checkbox" name="c1" cheked/>Book
  <input type="checkbox" name="c2" cheked/>Online resources 
  <input type="checkbox" name="c3" cheked/>Phone apps
  <input type="checkbox" name="c4" cheked/>Magazines <br><br>
  
  <label>What genre of movies do you like?:</label>
  <select>
  <option>comedy</option>
  <option>Action</option>
  <option>Drama</option>
  <option>Horror</option>
  </select>  <br><br>
  <button>Submit form</button>
  </form>
  </div>
  


  <div class="box">
  <div class="container"><h1>Get insights that help your business grow.</h1>
  <h5>Discover the benefits of data analytics and make decision regarding revenue,customer experience,and overall efficiency.</h5>
  <div class="c1">
  <h3>10k+ &emsp;314   &nbsp; &nbsp;&nbsp;    12M+</h3>
  <h6>COMPANIES &nbsp;&nbsp;&nbsp;  TEMPLATES &nbsp;&nbsp;&nbsp; QUERIES </h6>

  <div class="img">
  <img="C:\Users\00005600\Desktop\myfirstproject\src\assig1 today.png">


  
  


  
  `,
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   name="Charithra"
}
