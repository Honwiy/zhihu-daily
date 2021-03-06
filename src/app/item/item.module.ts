import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemSliderComponent } from './item-slider/item-slider.component';
import { ItemRoutingModule } from './item-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ItemRoutingModule,
    HttpClientModule
  ],
  declarations: [ItemListComponent, ItemSliderComponent]
})
export class ItemModule { }
