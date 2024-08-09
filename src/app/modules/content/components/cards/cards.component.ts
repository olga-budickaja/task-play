import { Component } from '@angular/core';
import { User } from './types';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  users: User[] = [
    {
      id: 1,
      img: '/users/user-1.jpg',
      name: 'Тина',
      address: 'Київ, 20',
      likes: 123,
    },
    {
      id: 2,
      img: '/users/user-1.jpg',
      name: 'Марина',
      address: 'Київ, 20',
      likes: 121,
    },
    {
      id: 3,
      img: '/users/user-1.jpg',
      name: 'Аня',
      address: 'Київ, 20',
      likes: 122,
    },
    {
      id: 4,
      img: '/users/user-1.jpg',
      name: 'Карина',
      address: 'Київ, 20',
      likes: 119,
    },
    {
      id: 5,
      img: '/users/user-1.jpg',
      name: 'Тімея',
      address: 'Київ, 20',
      likes: 120,
    },
    {
      id: 6,
      img: '/users/user-1.jpg',
      name: 'Аліна',
      address: 'Київ, 20',
      likes: 123,
    },
    {
      id: 7,
      img: '/users/user-1.jpg',
      name: 'Любов',
      address: 'Київ, 20',
      likes: 121,
    },
    {
      id: 8,
      img: '/users/user-1.jpg',
      name: 'Ірина',
      address: 'Київ, 20',
      likes: 122,
    },
    {
      id: 9,
      img: '/users/user-1.jpg',
      name: 'Катя',
      address: 'Київ, 20',
      likes: 119,
    },
    {
      id: 10,
      img: '/users/user-1.jpg',
      name: 'Лючія',
      address: 'Київ, 20',
      likes: 120,
    },
  ];

  getTopValue(index: number): number {
    if (index === 1) {
      return 60;
    } else if (index === 2) {
      return 25;
    } else {
      return 0;
    }
  }
}
