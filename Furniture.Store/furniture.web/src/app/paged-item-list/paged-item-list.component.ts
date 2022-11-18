import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paged-item-list',
  templateUrl: './paged-item-list.component.html',
  styleUrls: ['./paged-item-list.component.css'],
})
export class PagedItemListComponent implements OnInit {
  members: { title: string; subtitle: string; content: string; url: string }[] =
    [
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
    ];

  constructor() {}

  ngOnInit(): void {}
}
