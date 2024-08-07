import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  buttonText = 'Написати всім за 5';

  users = new Array(9).fill('/users/user-1.png');
  containerWidth = 250;
  imageWidth = 40;

  calculateOffset(index: number, total: number): number {
    const maxOverlap = this.containerWidth - this.imageWidth;
    const step = maxOverlap / (total - 1);
    return (-step / 1.7) * index;
  }
}
