import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  activeWrapperIndex = 1; // Set the default active wrapper index

  constructor() { }

  ngOnInit() {
  }

  scrollToWrapper(index: number) {
    const targetWrapper = document.querySelector(`#scrollWrapper${index}`);
    if (targetWrapper) {
      targetWrapper.scrollIntoView({ behavior: 'smooth' });

      const scrollWrappers = document.querySelectorAll('.scrolling-wrapper');
      scrollWrappers.forEach((wrapper, wrapperIndex) => {
        if (wrapperIndex + 1 !== index) {
          wrapper.classList.add('hidden');
        } else {
          wrapper.classList.remove('hidden');
        }
      });

      this.activeWrapperIndex = index; // Update the active wrapper index
    }
    return false; // Prevent the default behavior of the tab link
  }}
