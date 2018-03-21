import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { ContentTextComponent } from "./content/content-text/content-text.component";

const routes: Routes = [
    { path: '', redirectTo: '/itemlist', pathMatch:'full' },
    { path: 'content/:id', redirectTo: '/content/:id', pathMatch:'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
