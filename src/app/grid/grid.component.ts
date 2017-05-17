import { Component, OnInit } from '@angular/core';
import { AppService } from "../services/app.service";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  data: Array<string>;
  selectedItem: any;
  constructor(private appService: AppService) {
    this.data = [];
  }

  setSelectedItem(selectedItem) {
    this.selectedItem = selectedItem;
    console.log(this.selectedItem);
  }

  ngOnInit() {
    this.refresh();
  }

  delete(id) {
    this.appService.delete(id)
      .then(() => {
        this.refresh();
        this.selectedItem = null;
        alert("Usuario Eliminado");
      })
      .catch((error) => console.log(error));
  }

  update(itemToUpdate) {
    this.appService.update(itemToUpdate)
      .then(() =>{
        this.refresh();
        alert("Usuario Actualizado.");
      })
      .catch((error) => console.log(error));
  }

  refresh() {
    this.appService.getAllData()
      .then((data) => this.data = data)
      .catch((error) => console.log(error));
  }
}
