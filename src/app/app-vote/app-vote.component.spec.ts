import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppVoteComponent } from './app-vote.component';

describe('AppVoteComponent', () => {
  let component: AppVoteComponent;
  let fixture: ComponentFixture<AppVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppVoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
