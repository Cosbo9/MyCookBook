import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs'
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatIconModule } from '@angular/material/icon'
import { MatBadgeModule } from '@angular/material/badge'
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';

const MaterialComponents = [
  MatTabsModule,
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatListModule,
  MatMenuModule,
  MatFormFieldModule,
  MatDialogModule,
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatExpansionModule,
  MatTooltipModule,
]


@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
