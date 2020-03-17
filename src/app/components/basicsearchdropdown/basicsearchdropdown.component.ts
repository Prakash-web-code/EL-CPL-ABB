import { Component, OnInit, Input } from '@angular/core';
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';

@Component({
  selector: 'elcp-basicsearchdropdown',
  templateUrl: './basicsearchdropdown.component.html',
  styleUrls: ['./basicsearchdropdown.component.css']
})
export class BasicsearchdropdownComponent implements OnInit {
  @Input() dropdownData:Array<Select2OptionData>;
  public options: Options;

  constructor() { }

  ngOnInit() {
        this.options = {
      multiple: true,
      theme: 'classic',
      closeOnSelect: false,
      width: '300'
    };
  }

}
