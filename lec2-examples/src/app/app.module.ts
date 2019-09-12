import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './examples/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './examples/property-binding/property-binding.component';
import { DirectivesComponent } from './examples/directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


