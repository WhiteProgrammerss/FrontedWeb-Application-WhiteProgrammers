import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientApplianceComponent } from './client-appliance.component';

describe('ClientApplianceComponent', () => {
  let component: ClientApplianceComponent;
  let fixture: ComponentFixture<ClientApplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientApplianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientApplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
