import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeguidosPage } from './seguidos.page';

describe('SeguidosPage', () => {
  let component: SeguidosPage;
  let fixture: ComponentFixture<SeguidosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguidosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeguidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
