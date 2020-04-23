import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public focus = false;
  location: Location;
  listTitles = [
    { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/user-profile', title: 'User profile', icon: 'ni-single-02 text-yellow', class: '' },
    { path: '/documentation-viewer', title: 'Ver Documentación', icon: 'ni-single-02 text-yellow', class: '' },
    { path: '/search', title: 'Buscar', icon: 'ni-single-02 text-yellow', class: '' },
  ];

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
    private element: ElementRef,
    private router: Router
  ) {
    this.location = location;
  }

  ngOnInit(): void {

  }

  getTitle() {

    const title = this.location.prepareExternalUrl(this.location.path());
    this.focus = title.includes('dashboard') || title.includes('course');
    if (this.focus) {
      return 'Dashboard';
    }
    return 'Home';
  }

}
