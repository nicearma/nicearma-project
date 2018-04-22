import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor(public http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('/sayHello').subscribe((v) => {

    })
  }
}
