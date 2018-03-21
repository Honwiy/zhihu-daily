import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTextComponent } from './content-text/content-text.component';
import { ContentRoutingModule } from './content-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule,
    HttpClientModule
  ],
  declarations: [ContentTextComponent]
})
export class ContentModule { }
