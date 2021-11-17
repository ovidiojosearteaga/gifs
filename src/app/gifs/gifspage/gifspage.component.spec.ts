import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifspageComponent } from './gifspage.component';

describe('GifspageComponent', () => {
  let component: GifspageComponent;
  let fixture: ComponentFixture<GifspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
