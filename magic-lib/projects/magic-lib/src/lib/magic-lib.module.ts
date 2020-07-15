import { NgModule } from '@angular/core';
import { MagicLibComponent } from './magic-lib.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [MagicLibComponent, ButtonComponent, CardComponent],
  imports: [
    CommonModule
  ],
  exports: [MagicLibComponent]
})
export class MagicLibModule { }
