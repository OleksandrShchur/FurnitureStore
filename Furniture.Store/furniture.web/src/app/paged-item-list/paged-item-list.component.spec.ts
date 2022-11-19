import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagedItemListComponent } from './paged-item-list.component';

describe('PagedItemListComponent', () => {
  let component: PagedItemListComponent;
  let fixture: ComponentFixture<PagedItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagedItemListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagedItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
