import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  question: 'Lorem ipsum dolor sit amet consectetur, adipision?';
  location: Location;

  questions = [1, 2, 3, 4, 5];
  page = 4;
  course = '';
  courses = [
    {
      name: 'Active Server Pages (ASP).',
      path: 'asp'
    },
    {
      name: 'Machine Learning',
      path: 'ml'
    },
    {
      name: 'Big Data',
      path: 'bd'
    },
    {
      name: 'Minería de datos',
      path: 'md'
    },
    {
      name: 'AWS, (Amazon Web Services)',
      path: 'aws'
    },
  ];

  constructor(
    location: Location,
  ) {
    this.location = location;
  }

  ngOnInit(): void {
    // const title = this.location.path();
    const title = this.location.prepareExternalUrl(this.location.path());
    const route = title.split('/');
    console.log(route);
    for (const course of this.courses) {
      if (course.path.includes(route[route.length - 1])) {
        this.course = course.name;
        break;
      }
    }
  }

}
