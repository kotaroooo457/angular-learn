import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent  {
  @Input() child = '';

  // 親に itemChild
  @Output() itemChild = new EventEmitter<string>(); //EventEmitterで型宣言

  addItemChild(value: string) {
    this.itemChild.emit(value); // emit 親に引数を知らせる
  };
}
