import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleItemComponent } from './singleitem/singleitem.component';
import { PicsComponent } from './pics/pics.component';
import {  FormsModule } from '@angular/forms';
import { ItemslistComponent } from './itemslist/itemslist.component';
import { ItemrowComponent } from './itemrow/itemrow.component';
import { ItemsdataService } from './itemsdata.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SingleItemComponent,
    PicsComponent,
    ItemslistComponent,
    ItemrowComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ItemslistComponent
      },
      {
        path:'/singleitem',
        component: SingleItemComponent
      },
      {
        path:'singleitem/pics',
        component: PicsComponent
      }
    ])
  ],
  providers: [ItemsdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
