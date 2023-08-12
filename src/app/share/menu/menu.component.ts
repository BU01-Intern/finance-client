import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { default as MenuData } from './menu.json';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { DomHandler } from 'primeng/dom';
import { Subscription } from 'rxjs';

export interface MenuItem {
  name?: string;
  icon?: string;
  children?: MenuItem[];
  routerLink?: string;
  href?: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() active: boolean = true;

  menu!: MenuItem[];

  subscription!: Subscription;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private el: ElementRef
  ) {
    this.menu = MenuData.data;
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.scrollToActiveItem();
      }, 1);
    }
  }

  scrollToActiveItem() {
    let activeItem = DomHandler.findSingle(
      this.el.nativeElement,
      '.router-link-active'
    );
    if (activeItem && !this.isInViewport(activeItem)) {
      activeItem.scrollIntoView({ block: 'center' });
    }
  }

  isInViewport(element: any) {
    if (isPlatformBrowser(this.platformId)) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight ||
            (document.documentElement.clientHeight &&
              rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)))
      );
    }
    return null;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
