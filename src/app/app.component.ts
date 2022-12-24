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

  @HostListener('window:unload', ['$event'])
    unloadHandler(event:any) {
        window.sessionStorage.clear();
    }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}

