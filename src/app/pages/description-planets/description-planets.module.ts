import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescriptionPlanetsPageRoutingModule } from './description-planets-routing.module';

import { DescriptionPlanetsPage } from './description-planets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescriptionPlanetsPageRoutingModule
  ],
  declarations: [DescriptionPlanetsPage]
})
export class DescriptionPlanetsPageModule {}
