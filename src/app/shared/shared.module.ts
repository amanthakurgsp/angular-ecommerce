import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    NumberOnlyDirective,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
