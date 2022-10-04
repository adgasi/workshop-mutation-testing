import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'sidebar-box',
  templateUrl: './sidebar-box.component.html',
  styleUrls: ['./sidebar-box.component.scss'],
  animations: [
    trigger('collapseExpandBtn', [
      state('expanded', style({ transform: 'rotate(90deg)' })),
      state('collapsed', style({ transform: 'rotate(270deg)' })),
      transition('collapsed => expanded, expanded => collapsed', [
        animate('250ms'),
      ]),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarBoxComponent implements OnInit {
  sidebarCollapsed: boolean;

  private readonly sidebarCollapsedKey = 'sidebarCollapsed';

  ngOnInit() {
    this.sidebarCollapsed = this.loadSidebarCollapsed() || false;
  }

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    this.saveSidebarCollapsed(this.sidebarCollapsed);
  }

  private loadSidebarCollapsed(): boolean | null {
    return JSON.parse(localStorage.getItem(this.sidebarCollapsedKey));
  }

  private saveSidebarCollapsed(collapsed: boolean) {
    localStorage.setItem(this.sidebarCollapsedKey, JSON.stringify(collapsed));
  }
}
