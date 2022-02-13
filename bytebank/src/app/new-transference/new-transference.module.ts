import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { newTransferenceComponent } from "./new-transference.component";

@NgModule({
  declarations: [
    newTransferenceComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    newTransferenceComponent,
  ]

})
export class newTransferenceModule {}
