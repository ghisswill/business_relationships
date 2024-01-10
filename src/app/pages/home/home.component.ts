import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  datas = [
    {
      'id': '1',
      'title': 'test 1',
      'content': 'Description du test 1'
    },
    {
      'id': '2',
      'title': 'test 2',
      'content': 'Description du test 2'
    },
    {
      'id': '3',
      'title': 'test 3',
      'content': 'Description du test 3'
    }
  ]

}
