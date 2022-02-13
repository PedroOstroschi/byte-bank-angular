import { Component } from "@angular/core";

@Component({
  selector: 'app-new-transference',
  templateUrl: './new-transference.component.html',
  styleUrls: ['./new-transference.component.scss']
})
export class newTransferenceComponent {

  public value: number = -1;
  public destiny: number = -1;

  public transfer(): void{
    console.log("New transfer");
    console.log("Value:", this.value);
    console.log('destiny: ', this.destiny);
  }
}
