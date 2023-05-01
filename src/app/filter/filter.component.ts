import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
export type CheckboxFilter = {
  id: number;
  name: string;
  isChecked: boolean;
  vis:any;
};
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
 @Input()
  public filters!: CheckboxFilter[];
  @Output() public filterChange: EventEmitter<
    CheckboxFilter
  > = new EventEmitter<CheckboxFilter>();

  constructor() {}

  ngOnInit() {}
}



