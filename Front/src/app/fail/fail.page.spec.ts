import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FailPage } from './fail.page';

describe('FailPage', () => {
  let component: FailPage;
  let fixture: ComponentFixture<FailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
