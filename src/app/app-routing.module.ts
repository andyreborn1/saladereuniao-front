import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './error/not-found-component/not-found-component.component';
import { CreateComponent } from './room/create/create.component';
import { ListComponent } from './room/list/list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'rooms',
    pathMatch: 'full',
  },
  {
    path: 'rooms',
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'create',
        children: [
          {
            path: '',
            component: CreateComponent,
          },
          {
            path: ':id',
            component: CreateComponent,
          },
        ],
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
