import { animate, style, transition, trigger } from '@angular/animations';

export const rotateAndFlyLeft = trigger('rotateAndFlyLeft', [
  transition(':leave', [
    style({ left: '50%', transform: 'rotateY(0deg) translateX(0)' }),
    animate(
      '0.3s ease-out',
      style({ left: '-60%', transform: 'rotateY(90deg) translateX(150%)' })
    ),
  ]),
]);

export const rotateAndFlyRight = trigger('rotateAndFlyRight', [
  transition(':leave', [
    style({ left: '50%', transform: 'rotateY(0deg) translateX(0)' }),
    animate(
      '0.5s ease-out',
      style({
        right: '-60%',
        transform: 'rotateY(-180deg) translateX(-150%)',
      })
    ),
  ]),
]);
