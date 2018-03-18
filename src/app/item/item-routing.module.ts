import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';

const routes: Routes = [
    { path: 'itemlist', component: ItemListComponent }
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
export class ItemRoutingModule {}
