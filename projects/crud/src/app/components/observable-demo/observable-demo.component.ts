import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent {

  /*obser = new Observable((num)=>{
       num.next(100);
       num.next('RxJS');
       num.next('sukanta');
       num.error('Error Occurred');
  })
  ngOnInit():void{
    this.obser.subscribe(
      data=>console.log(data),
      err=>console.log(err),
      ()=>{
        console.log("Data Retrival Completed");
      }
      
    )
  }*/
  /*agents:Observable<string>;
  ngOnInit():void{
    this.agents = new Observable(
      function(observer){
        try{
           observer.next("Mango");
           observer.next("Apple");
           observer.next("Banana");
        }catch(e){
          observer.error(e);
        }
      });
      this.agents.subscribe(data=>{
          console.log(data);
      })
  }*/
  //of() operator
  /*studentList:string[] = ["sukanta","rajip","saroj"];
  students:Observable<string[]> = of(this.studentList);
  reverseString:string[] = [];
   ngOnInit():void{
    this.students.subscribe(data=>{
      this.reverseString = data.reverse();
    })
    console.log(this.reverseString);
   }*/

   /*constructor(private formBuilder : FormBuilder){}
   searchForm!: FormGroup;
   name!: FormControl;
   ngOnInit():void{
     this.searchForm = new FormGroup({
      name :new FormControl("Start Searching")
     })
     this.searchForm.get('name')?.valueChanges.pipe().subscribe(data=>{
      console.log(data);
     })
   }
   readValue(){

   }*/
}
