import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';
import { ToastModule } from 'primeng/toast';

const primeng_components = [
  MenubarModule,
  ButtonModule,
  InputTextModule,
  CarouselModule,
  ToastModule,
];

@NgModule({
  declarations: [],
  imports: primeng_components,
  exports: primeng_components,
})
export class PrimengModule {}
