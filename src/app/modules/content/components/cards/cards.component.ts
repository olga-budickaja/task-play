import { Component } from '@angular/core';
import { User } from './types';
import { rotateAndFlyLeft, rotateAndFlyRight } from '../../../../lib';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
  animations: [rotateAndFlyLeft, rotateAndFlyRight],
})
export class CardsComponent {
  [x: string]: any;
  users: User[] = [
    {
      id: 1,
      img: '/users/user-1.jpg',
      name: 'Тина',
      address: 'Київ, 20',
      likes: 123,
      isShow: true,
    },
    {
      id: 2,
      img: '/users/user-1.jpg',
      name: 'Марина',
      address: 'Київ, 20',
      likes: 121,
      isShow: true,
    },
    {
      id: 3,
      img: '/users/user-1.jpg',
      name: 'Аня',
      address: 'Київ, 20',
      likes: 122,
      isShow: true,
    },
    {
      id: 4,
      img: '/users/user-1.jpg',
      name: 'Карина',
      address: 'Київ, 20',
      likes: 119,
      isShow: true,
    },
    {
      id: 5,
      img: '/users/user-1.jpg',
      name: 'Тімея',
      address: 'Київ, 20',
      likes: 120,
      isShow: true,
    },
    {
      id: 6,
      img: '/users/user-1.jpg',
      name: 'Аліна',
      address: 'Київ, 20',
      likes: 123,
      isShow: true,
    },
    {
      id: 7,
      img: '/users/user-1.jpg',
      name: 'Любов',
      address: 'Київ, 20',
      likes: 121,
      isShow: true,
    },
    {
      id: 8,
      img: '/users/user-1.jpg',
      name: 'Ірина',
      address: 'Київ, 20',
      likes: 122,
      isShow: true,
    },
    {
      id: 9,
      img: '/users/user-1.jpg',
      name: 'Катя',
      address: 'Київ, 20',
      likes: 119,
      isShow: true,
    },
    {
      id: 10,
      img: '/users/user-1.jpg',
      name: 'Лючія',
      address: 'Київ, 20',
      likes: 120,
      isShow: true,
    },
  ];

  firstHalfUsers = this.users.slice(0, this.users.length / 2);
  secondHalfUsers = this.users.slice(this.users.length / 2);

  getTopValue(index: number, length: number): number {
    if (index === length - 3) {
      return 60;
    } else if (index === length - 2) {
      return 25;
    } else {
      return 0;
    }
  }

  getWidthValue(index: number, length: number): number {
    if (index === length - 3) {
      return 85;
    } else if (index === length - 2) {
      return 95;
    } else {
      return 100;
    }
  }

  getBgValue(index: number, length: number): string {
    if (index === length - 3) {
      return '#bfbdbf';
    } else if (index === length - 2) {
      return '#e5e4e5';
    } else {
      return 'var(--text)';
    }
  }

  removeLastCards(targetGroup: 'first' | 'second') {
    if (targetGroup === 'first') {
      // Визначаємо індекс останньої картки в першій групі
      const lastIndex = this.firstHalfUsers.length - 1;
      if (lastIndex >= 0) {
        // Вимикаємо видимість останньої картки
        this.firstHalfUsers[lastIndex].isShow = false;
        // Затримка перед видаленням
        setTimeout(() => {
          // Створюємо новий масив без останньої картки
          this.firstHalfUsers = this.firstHalfUsers.filter(
            (_, index) => index !== lastIndex
          );
        }, 300);
      }
    } else if (targetGroup === 'second') {
      // Визначаємо індекс останньої картки в другій групі
      const lastIndex = this.secondHalfUsers.length - 1;
      if (lastIndex >= 0) {
        // Вимикаємо видимість останньої картки
        this.secondHalfUsers[lastIndex].isShow = false;
        // Затримка перед видаленням
        setTimeout(() => {
          // Створюємо новий масив без останньої картки
          this.secondHalfUsers = this.secondHalfUsers.filter(
            (_, index) => index !== lastIndex
          );
        }, 300);
      }
    }
  }
}
