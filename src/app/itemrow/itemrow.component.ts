import { Component, OnInit } from '@angular/core';
import { ItemsdataService } from '../itemsdata.service';

@Component({
  selector: 'app-itemrow',
  templateUrl: './itemrow.component.html',
  styleUrls: ['./itemrow.component.css']
})
export class ItemrowComponent implements OnInit {

  itemName = '';
  constructor(private itemDataService: ItemsdataService) {  }

  ngOnInit() {
  }

}
