import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  @Input() toggleOpen: boolean = false;
  @Output() toggleOpenChange = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
