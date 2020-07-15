import { NgModule } from '@angular/core';
import { MagicLibComponent } from './magic-lib.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [MagicLibComponent, ButtonComponent],
  imports: [
  ],
  exports: [MagicLibComponent]
})
export class MagicLibModule { }
