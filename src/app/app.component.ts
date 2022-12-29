import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exo2-Oumaima-Marieme';

  navbarOpen = false;

  @HostListener('window:onload')
  onloadHander() {
    window.sessionStorage.clear();
      return false;
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}

