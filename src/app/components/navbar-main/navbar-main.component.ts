import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.scss']
})
export class NavbarMainComponent implements OnInit {

  activeMenu = false
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

}
