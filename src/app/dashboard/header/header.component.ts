import { Component, OnInit } from '@angular/core';
import { TypewriterService, TypewriterContent } from 'ng2-typewriter'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  contents: TypewriterContent[] = [];
  contents2: TypewriterContent[] = [];

  isDone: boolean = false;

  constructor(private tws: TypewriterService) {
    this.contents = this.tws.format(["Hi, I'm Grégoire"]);
    this.contents2 = this.tws.format(["FRONT END DEVELOPER"]);
  }

  ngOnInit() {
  }

  onDone(isDone: boolean): void {
    if (isDone) {
      setTimeout(() => this.isDone = isDone, 1500)
    }
    console.log('ici' + isDone)
  }

}
