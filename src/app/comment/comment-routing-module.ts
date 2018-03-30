import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list/comment-list.component';

const routes: Routes = [
    { path: 'comment/:id', component: CommentListComponent }
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
export class CommentRoutingModule {}