import { ComponentFixture, TestBed } from '@angular/core/testing';

// @ts-ignore
import { EditClientApplianceComponent } from './edit-client-appliance.component';

describe('EditClientProfileComponent', () => {
  let component: EditClientApplianceComponent;
  let fixture: ComponentFixture<EditClientApplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClientApplianceComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClientApplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
