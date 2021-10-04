/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {
  items: any;
  searchItem: any;
  constructor(private http: HttpClient,private router: Router,private alertCtrl: AlertController) { }

  ngOnInit() {
    console.log('hello');
    this.http.get('http://localhost:3000/api/todos').subscribe(res => {
      this.items = res;
      this.searchItem = res;
      console.log('searchItem : ', this.searchItem);
    });
  }
  Filtertodo(ev: any) {
    const val = ev.detail.value;
    this.searchItem = this.items;
      if(val && val.trim() !== '') {
        // eslint-disable-next-line arrow-body-style
        this.searchItem = this.searchItem.filter((item: any) => {
          return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
        });
      }
    ;  }
    onDeleteTodo(id) {
      this.alertCtrl.create({header: 'Are U sure',
      message: 'Do u really want to todo recipe??',
      buttons: [
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Delete',
          handler: () => {
            this.http.post(`http://localhost:3000/api/delete-todo/${id}`,{body: ''}).subscribe(res => {
              // eslint-disable-next-line no-underscore-dangle
              this.searchItem = this.searchItem.filter((item: any) => (item._id !== id));
    });
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
    }
}


