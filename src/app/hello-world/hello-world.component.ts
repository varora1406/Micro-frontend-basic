import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showMessage() {
    const hello = document.getElementById('hello');
    // hello.innerHTML = '<app-hello-world></app-hellow-world>';
  }

}
