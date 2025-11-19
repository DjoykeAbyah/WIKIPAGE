import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'go-back-button',
  templateUrl: './go-back-button.html',
  styleUrls: ['./go-back-button.css']
})
export class GoBackButtonComponent {
  @Input() label: string = '← Go Back';
  @Output() goBack = new EventEmitter<void>();

  onClick() {
    this.goBack.emit();
  }
}
