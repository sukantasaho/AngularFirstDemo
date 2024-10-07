import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { DeleteComponent } from './components/delete/delete.component';
import { InsertComponent } from './components/insert/insert.component';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';

const routes: Routes = [
  {path:"edit/:docId", component:EditComponent},
  {path:"delete/:docId", component:DeleteComponent},
  {path:"save", component:InsertComponent},
  {path:'observable', component:ObservableDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
