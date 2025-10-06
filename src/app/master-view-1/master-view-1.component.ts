import { Component } from '@angular/core';
import { IGX_NAVBAR_DIRECTIVES, IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IgxRippleDirective, IgxToggleActionDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-master-view-1',
  imports: [IGX_NAVIGATION_DRAWER_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxToggleActionDirective, IgxRippleDirective, IgxIconComponent],
  templateUrl: './master-view-1.component.html',
  styleUrls: ['./master-view-1.component.scss']
})
export class MasterView1Component {}
