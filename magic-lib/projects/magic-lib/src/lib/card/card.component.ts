import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'magic-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() image: string;
  @Input() title: string;
  @Input() message: string;
  @Input() buttonText: string = 'Click me';

  @Output() click: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
  }

  onclick() {
    this.click.emit();
  }
}
