import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {BookingComponent} from "./booking/booking.component";
import {AddComponent} from "./add/add.component";
import {ManageComponent} from "./manage/manage.component";

const appRoutes: Routes = [
    {
      path: 'booking',
      component: BookingComponent
    },
    {
      path: 'add',
      component: AddComponent
    },
    {
       path: 'manage',
       component: ManageComponent
    },
    {
      path: '**',
      component: AddComponent
    }
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { useHash: true}
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}
