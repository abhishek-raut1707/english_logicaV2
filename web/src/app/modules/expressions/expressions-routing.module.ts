import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentFindComponent } from './content-find/content-find.component';

const routes: Routes = [
      
      {
        path: 'content_find',
        component: ContentFindComponent
      }
    ]



@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ExpressionsRoutingModule{
 }
