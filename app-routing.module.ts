import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { TopheaderComponent } from './topheader/topheader.component';


const routes: Routes = [
    {path:'',component:TopheaderComponent},
];

NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}
