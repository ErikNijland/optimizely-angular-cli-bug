import {Component, OnInit} from '@angular/core';
import * as optimizelySDK from '@optimizely/optimizely-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log(optimizelySDK);
  }
}
