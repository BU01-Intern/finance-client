import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter, startWith } from 'rxjs';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  @Output() menuButtonClick: EventEmitter<any> = new EventEmitter();

  title = '';

  constructor(private router: Router, private titleService: Title) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        startWith(this.router)
      )
      .subscribe(() => (this.title = this.titleService.getTitle()));
  }

  onMenuButtonClick(event: Event) {
    this.menuButtonClick.emit();
    event.preventDefault();
  }
}
