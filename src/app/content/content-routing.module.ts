import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentTextComponent } from './content-text/content-text.component';

const routes: Routes = [
    { path: 'content/:id', component: ContentTextComponent }
];

@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ContentRoutingModule {}
