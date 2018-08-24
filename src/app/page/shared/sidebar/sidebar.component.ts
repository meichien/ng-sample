import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../base/app.service';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public menus:  Array<any>;
  isCollapsed = false;

  constructor(private router: Router, private appService: AppService) {
    this.appService.echo('SidebarComponent');
    this.menus = appService.getMenu();
  }

  toggleCollapsed(event: any): void {
    this.isCollapsed = !this.isCollapsed;
  }
  isActive(currentRoute: any[], exact = true): boolean {
    return this.router.isActive(this.router.createUrlTree(currentRoute), exact);
  }
  ngOnInit() {
  }
}
