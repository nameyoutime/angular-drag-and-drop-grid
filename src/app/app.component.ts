import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularDragGrid';
  items:Array<any> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  drop(event: CdkDragDrop<any>) {
    this.items[event.previousContainer.data.index] = event.container.data.item;
    this.items[event.container.data.index] = event.previousContainer.data.item;
    this.test(event);
  }
  test(event: CdkDragDrop<any>) {
    console.log("previous index:",event.previousContainer.data.index);
    console.log("current index:",event.container.data.index);
  }
  add() {
    this.items.push(this.items.length);
  }

}
