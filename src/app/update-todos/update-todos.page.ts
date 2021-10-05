import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-update-todos',
  templateUrl: './update-todos.page.html',
  styleUrls: ['./update-todos.page.scss'],
})
export class UpdateTodosPage implements OnInit {
  title: any;
  task: any;
  id: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      console.log(paramMap);
      const todoId = paramMap.get('id');
      this.id = todoId;
      this.http.get(`http://localhost:3000/api/todo/${todoId}`).subscribe(
        (res: any) => {
          console.log('resss:');
          this.title = res.title;
          this.task = res.task;
        },
        (err) => {}
      );
    });
  }
  saveUpdatedTodo() {
    const newObj = {
      title: this.title,
      task: this.task,
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
        .post(`http://localhost:3000/api/update-todo/${this.id}`, newObj)
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
