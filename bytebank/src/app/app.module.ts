import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { newTransferenceModule } from './new-transference/new-transference.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    newTransferenceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
