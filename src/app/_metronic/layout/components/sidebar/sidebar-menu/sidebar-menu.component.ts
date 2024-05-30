import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  role: string;

  constructor() {
    this.role = 'estudiante';
  }

  getRole(): string {
    return this.role;
  }

  ngOnInit(): void {
  }

}
