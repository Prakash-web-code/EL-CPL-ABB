import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnChanges {
  @Input() isSmLoader = false;
  @Input() isMdLoader = false;
  @Input() isLgLoader = false;
  @Input() backdropClass = 'backdrop';

  small = false;
  large = true;
  medium = false;
  ngOnInit() {

  }
  ngOnChanges(data: SimpleChanges) {
    if (this.isSmLoader) {
      this.small = this.isSmLoader;
      this.large = !this.isSmLoader;
      this.medium = !this.isSmLoader;
    }

    if (this.isMdLoader) {
      this.small = !this.isMdLoader;
      this.large = !this.isMdLoader;
      this.medium = this.isMdLoader;
    }

    if (this.isLgLoader) {
      this.small = !this.isLgLoader;
      this.large = this.isLgLoader;
      this.medium = !this.isLgLoader;
    }
  }

}
