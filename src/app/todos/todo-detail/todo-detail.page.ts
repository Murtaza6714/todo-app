import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.page.html',
  styleUrls: ['./todo-detail.page.scss'],
})
export class TodoDetailPage implements OnInit {
  title: any;
  task: any;
  isChecked: any;
  id: any;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      console.log(paramMap);
      const todoId = paramMap.get('id');
      this.id = todoId;
      this.http.get(`http://localhost:3000/api/todo/${todoId}`).subscribe((res: any) => {
        console.log('resss:',res);
        this.title = res.title;
        this.task = res.task;
    },err => {

    });
  });
  }

  isCompleted(ev: any) {
    console.log(ev.detail.checked);
    if(ev.detail.checked){
      this.http.post(`http://localhost:3000/api/update-todo/${this.id}`,{isCompleted: true}).subscribe(res => {
        console.log(res);
    },err => {
      console.log(err);
    });
    }else {
      this.http.post(`http://localhost:3000/api/update-todo/${this.id}`,{isCompleted: false}).subscribe(res => {
        console.log(res);
    },err => {
      console.log(err);
    });
    }
  }

}
