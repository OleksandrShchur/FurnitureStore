import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ItemInfo } from 'src/models/itemInfo';

@Component({
  selector: 'app-paged-item-list',
  templateUrl: './paged-item-list.component.html',
  styleUrls: ['./paged-item-list.component.css'],
})
export class PagedItemListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  obs: Observable<any> | undefined;

  items: ItemInfo[] = [
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
    {
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://klen.ua/modules/ph_simpleblog/covers/134.jpg',
    },
  ];

  dataSource: MatTableDataSource<ItemInfo> = new MatTableDataSource<ItemInfo>(
    this.items
  );

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator as MatPaginator;
    this.obs = this.dataSource.connect();
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }
}
