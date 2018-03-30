import { ContentModule } from './content/content.module';
import { CommentModule } from "./comment/comment.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ItemModule } from './item/item.module';
import { MatSidenavModule } from '@angular/material';
import { AppRoutingModule } from "./app-routing.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ItemModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ContentModule,
    CommentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
