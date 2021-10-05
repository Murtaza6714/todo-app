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
  hasPriority: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}
  hasHighPriority(ev) {
    if (ev.detail.checked) {
      this.hasPriority = true;
    }
  }
  saveTodo() {
    const newTodo = {
      title: this.title,
      task: this.task,
      hasHighPriority: this.hasPriority,
    };
    if (!this.title || !this.task) {
      this.callAlertController(
        'Add Todo Failure',
        'Title or Task are required!!'
      );
    } else if (this.title.length <= 3 || this.task.length <= 10) {
      // eslint-disable-next-line max-len
      this.callAlertController(
        'Add Todo Failure',
        'Title should have length greater than 3 and task should have length greater than 10!!'
      );
    } else {
      this.http
        .post('http://localhost:3000/api/create-todo', newTodo)
        .subscribe(
          (res) => {
            console.log(res);
            this.router.navigateByUrl('/todos');
          },
          (err) => {
            console.log(err);
          }
        );
    }
  }
  callAlertController(header, errormessage) {
    return this.alertCtrl
      .create({ header, message: errormessage, buttons: ['Dismiss'] })
      .then((alertEl) => {
        alertEl.present();
      });
  }
}
