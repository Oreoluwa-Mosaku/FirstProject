import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  name = "oreoluwa";
  email = "oremosaku@gmail.com"
  formValue;
  register =[];
  constructor() { }

  ngOnInit() {
 

    setTimeout(function () {
      this.name = "ore";
    }, 10000);
  }
    OnSubmit(form){
      console.log(form.value);
      console.log(this.email)
      this.formValue=form.value;
      this.register.push(this.formValue);
      form.reset();
  }

}
