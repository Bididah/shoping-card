import { Component } from '@angular/core';
import { EventService } from './services/shared/event.service';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selected = 'option2';
  title = 'shoping-card';
  itemCount: number = 0;
  constructor(private eventSevice: EventService) {}

  ngOnInit() {
    this.eventSevice
      .eventListnner()
      .pipe(skip(1))
      .subscribe((data) => {
        this.itemCount++;
      });
  }
}
