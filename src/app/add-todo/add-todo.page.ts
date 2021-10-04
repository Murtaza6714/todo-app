import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})
export class AddTodoPage implements OnInit {
  title: any;
  task: any;

  constructor(private http: HttpClient, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  saveTodo() {
    const newTodo = {
      title: this.title,
      task: this.task
    };
    if(!this.title || !this.task) {
      // this.hasError = true;
      // this.errorMessage = 'Title or Task Required';
      this.alertCtrl.create({header: 'Add Todo Failure!!',
    message: 'Title or Task required!!',
    buttons: ['Dismiss']
  }).then(alertEl => {
    alertEl.present();
  });
    }else{
      this.http.post('http://localhost:3000/api/create-todo',newTodo).subscribe(res => {
        console.log(res);
          this.router.navigate(['/todos']);
      },err => {
        console.log(err);
      });
    }
  }
}
