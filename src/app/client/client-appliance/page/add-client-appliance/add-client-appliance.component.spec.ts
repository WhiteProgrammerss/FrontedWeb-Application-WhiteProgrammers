import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientApplianceComponent } from './add-client-appliance.component';

describe('AddClientApplianceComponent', () => {
  let component: AddClientApplianceComponent;
  let fixture: ComponentFixture<AddClientApplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClientApplianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientApplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
