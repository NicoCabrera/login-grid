import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AppService } from "../services/app.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private service: AppService, private router: Router) {
    this.form = this.fb.group({
      //Validations
      username: ["", Validators.required],

      password: ["", [Validators.required]],

    });
  }

  showObjectData() {
    let data = this.formToObject();
    console.log(data);
    this.validateUser();
  }

  validateUser() {
    let data = {
      username: this.form.get("username").value
    };
    this.service.validateUser(data)
      .then((value) => {
        if (value === "true")
          this.router.navigate(["/grid"]);
        else
          alert("Usuario no encontrado");
      })
      .catch(error => console.log(error));
  }

  formToObject() {
    let obj = {
      username: this.form.get("username").value,
      password: this.form.get("password").value,
    };
    return obj;
  }

  ngOnInit() {
  }

}
