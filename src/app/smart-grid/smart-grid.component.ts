import { Component, OnInit } from '@angular/core';
import { AppService } from "../services/app.service";
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-smart-grid',
  templateUrl: './smart-grid.component.html',
  styleUrls: ['./smart-grid.component.css']
})
export class SmartGridComponent implements OnInit {
  data: LocalDataSource;
  settings = {
    //columns
    columns: {
      id: {
        title: "ID"
      },
      nombre: {
        title: "NOMBRE"
      },
      apellido: {
        title: "APELLIDO"
      },
      dni: {
        title: "DNI"
      },
      foto: {
        title: "FOTO"
      },
      sexo: {
        title: "SEXO"
      },
    },
    //END columns


    //crud
    add: {
      confirmCreate: true
    },
    edit:{
      confirmSave: true
    },
    delete:{
      confirmDelete: true
    }
  };

  constructor(private service: AppService) {
    this.data = new LocalDataSource();
  }

  ngOnInit() {
    this.service.getAllData()
      .then((data) => {
        console.log(data);
        this.data.load(data);
      })
      .catch((error) => console.log(error));
  }


  insert($event) {
    var newData = $event.newData;
    this.service.insert($event.newData)
      .then(() => $event.confirm.resolve(newData)).catch(()=>console.log("No se ha podido insertar"));
  }

  update($event) {
    var newData = $event.newData;
    this.service.update($event.newData)
      .then(() => $event.confirm.resolve(newData)).catch(()=>console.log("No se ha podido actualizar"));
  }


  delete($event) {
    var newData = $event.newData;
    this.service.delete($event.data.id)
      .then(() => $event.confirm.resolve()).catch(()=>console.log("No se ha podido actualizar"));
  }
}
