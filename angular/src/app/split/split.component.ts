import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.scss']
})
export class SplitComponent implements OnInit {

	text = "hello this is a sentance";
	array = {};

  constructor() { }

  ngOnInit() {
  	this.array = this.text.split(' ');
  }

}
