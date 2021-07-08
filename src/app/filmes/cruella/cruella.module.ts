import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CruellaPageRoutingModule } from './cruella-routing.module';

import { CruellaPage } from './cruella.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CruellaPageRoutingModule
  ],
  declarations: [CruellaPage]
})
export class CruellaPageModule {}
