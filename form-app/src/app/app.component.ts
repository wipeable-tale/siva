import { Component } from '@angular/core';

import {HttpClientService} from './core/http-client.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-app';
  form: NgForm;

  ngOnInit() {
    // this.form = this._buildForm(); stackblitzはここで初期化している。
  }
  constructor(
    private service: HttpClientService
  ) {}

  getPing(): void {
    this.service.getPing()
  }
}
