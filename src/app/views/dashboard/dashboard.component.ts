import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  courses = [
    {
      name: 'Active Server Pages (ASP).',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum architecto laborum similique placeat eaque reiciendis iure nisi vel fugit '
    },
    {
      name: 'Machine Learning',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum architecto laborum similique placeat eaque reiciendis iure nisi vel fugit '
    },
    {
      name: 'Big Data',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum architecto laborum similique placeat eaque reiciendis iure nisi vel fugit '
    },
    {
      name: 'Minería de datos',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum architecto laborum similique placeat eaque reiciendis iure nisi vel fugit '
    },
    {
      name: 'AWS, (Amazon Web Services)',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum architecto laborum similique placeat eaque reiciendis iure nisi vel fugit '
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
