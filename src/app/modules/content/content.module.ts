import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BackgroundComponent,
  CardsComponent,
  FooterComponent,
  HeaderComponent,
} from './components';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cards',
    component: CardsComponent,
  },
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    BackgroundComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    BackgroundComponent,
  ],
})
export class ContentModule {}
