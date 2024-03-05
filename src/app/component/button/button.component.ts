import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit {
 
  @Input() text!: string;
  @Input() color!: string;

  @Output() btnClick = new EventEmitter

  constructor() {}

   ngOnInit(): void {
    
   }
  
  onClick() {
    this.btnClick.emit()
  }
}
