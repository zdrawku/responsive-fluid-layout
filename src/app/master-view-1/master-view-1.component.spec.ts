import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IGX_NAVIGATION_DRAWER_DIRECTIVES } from '@infragistics/igniteui-angular';
import { MasterView1Component } from './master-view-1.component';

describe('MasterView1Component', () => {
  let component: MasterView1Component;
  let fixture: ComponentFixture<MasterView1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterView1Component, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IGX_NAVIGATION_DRAWER_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
