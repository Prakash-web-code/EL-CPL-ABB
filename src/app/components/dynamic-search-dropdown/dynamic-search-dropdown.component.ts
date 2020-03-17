import { Component, OnInit, Input } from '@angular/core';
import { Select2OptionData } from 'ng-Select2';
import { Options } from 'select2';
import jQuery from 'jquery';
@Component({
  selector: 'elcp-dynamic-search-dropdown',
  templateUrl: './dynamic-search-dropdown.component.html',
  styleUrls: ['./dynamic-search-dropdown.component.scss']
})
export class DynamicSearchDropdownComponent implements OnInit {
  @Input() dropdownData:Array<Select2OptionData>;
  public options: Options;
  constructor() { }

  ngOnInit() {
    // this.options = {
    //   multiple: true,
    //   theme: 'classic',
    //   closeOnSelect: false,
    //   width: '300'
    // };
    this.options = {
      // width: '300',
      // datawidth:"100",
      templateResult: this.templateResult,
      templateSelection: this.templateSelection,
      
    };
  }

   // function for result template
   public templateResult = (state: Select2OptionData): JQuery | string => {
    if (!state.id) {
      return state.text;
    }

    let image = '<span class="image"></span>';

    if (state.additional.image) {
      image = '<span class="image"><img src="' + state.additional.image + '"</span>';
    }

    return jQuery("<table style='width:300px'><tr><td rowspan='2'>"  + image + '</td> ' +'<td>'+state.text+'</td>'+"<td  rowspan='2'><span style='float:right'>"+state.id+ '</td></span>'+ '</tr><tr>'+'<td>'+state.additional.subtitle+'</td>'+'</tr></table>');
  }

  // function for selection template
  public templateSelection = (state: Select2OptionData): JQuery | string => {
    if (!state.id) {
      return state.text;
    }

    return jQuery('<span>'  + state.text + '</span>');
  }
}
