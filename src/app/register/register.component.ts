import { Component, OnInit } from '@angular/core';
import { AppService } from "../services/app.service";
import { FormBuilder, FormGroup ,Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup;

  constructor(private appService: AppService, private fb:FormBuilder) {
    this.form = this.fb.group({
      id:"0",
      nombre: ["",Validators.required],
      apellido: ["",Validators.required],
      dni: ["",Validators.required],
      foto: ["pordefecto.png",Validators.required],
      sexo: ["M",Validators.required],
    });
  }

  ngOnInit() {
  }

  insert() {
    let newItem = this.formToObject();
    this.appService.insert(newItem)
      .then(() => alert("El usuario ha sido dado de alta."))
      .catch((error) => console.log(error));
  }


  formToObject(){
    let newItem = {
      id: this.form.get("id").value,
      nombre: this.form.get("nombre").value,
      apellido: this.form.get("apellido").value,
      dni: this.form.get("dni").value,
      foto: this.form.get("foto").value,
      sexo: this.form.get("sexo").value,
    };
    return newItem;
  }
}