import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-update-todos',
  templateUrl: './update-todos.page.html',
  styleUrls: ['./update-todos.page.scss'],
})
export class UpdateTodosPage implements OnInit {
  title: any;
  task: any;

  constructor(private http: HttpClient,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      console.log(paramMap);
      const todoId = paramMap.get('id');
      this.http.get(`http://localhost:3000/api/todo/${todoId}`).subscribe(res => {
        console.log('resss:');
        this.title = res;
        this.task = res;
    },err => {

    });
  });
}
}
