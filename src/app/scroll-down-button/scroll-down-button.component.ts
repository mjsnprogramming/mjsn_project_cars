import { Component, OnInit } from '@angular/core';
import {faCar} from '@fortawesome/free-solid-svg-icons/faCar';

@Component({
  selector: 'app-scroll-down-button',
  templateUrl: './scroll-down-button.component.html',
  styleUrls: ['./scroll-down-button.component.scss']
})
export class ScrollDownButtonComponent implements OnInit {
  title = 'cars';
  faCars = faCar;
  constructor() { }

  // tslint:disable-next-line:variable-name
  scroll_down_button = () => {

  }

  ngOnInit(): void {
  }
}

