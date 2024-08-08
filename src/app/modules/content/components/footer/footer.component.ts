import { Component } from '@angular/core';
import { ListItem } from './types';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  lists: ListItem[] = [
    {
      id: 1,
      icon: '/buttons/menu/menu-link-1.png',
      link: '#',
    },
    {
      id: 2,
      icon: '/buttons/menu/menu-link-2.png',
      link: 'cards',
    },
    {
      id: 3,
      icon: '/buttons/menu/menu-link-3.png',
      link: '#',
    },
    {
      id: 4,
      icon: '/buttons/menu/menu-link-4.png',
      link: '#',
    },
    {
      id: 5,
      icon: '/buttons/menu/menu-link-5.png',
      link: '#',
    },
  ];

  activeIndex: number | null = null;

  setActive(index: number) {
    this.activeIndex = index;
  }
}
