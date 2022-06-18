import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  @Input() showChild = false;

  constructor() { }

  ngOnInit(): void {
  }



}
