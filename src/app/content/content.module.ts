import { ContentService } from './content.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTextComponent } from './content-text/content-text.component';
import { ContentRoutingModule } from './content-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ContentFooterComponent } from './content-footer/content-footer.component';



@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [ContentTextComponent, ContentFooterComponent],
  providers: [
    ContentService
  ]
})
export class ContentModule { }
