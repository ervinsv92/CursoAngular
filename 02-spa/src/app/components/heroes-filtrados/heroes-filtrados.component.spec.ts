import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesFiltradosComponent } from './heroes-filtrados.component';

describe('HeroesFiltradosComponent', () => {
  let component: HeroesFiltradosComponent;
  let fixture: ComponentFixture<HeroesFiltradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesFiltradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesFiltradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
