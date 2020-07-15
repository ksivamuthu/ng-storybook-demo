import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'magic-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string;

  @Output() click: EventEmitter<void> = new EventEmitter();

  ngOnInit() {
  }

  onclick() {
    this.click.emit();
  }
}
