import { Component, Input } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material';
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'DASHBOARD',
  }, {
    name: 'MY BOTS',
    children: [
      {name: 'Pumpkins'},
      {name: 'Carrots'},
    ]
  },
];

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent {

  @Input() icon: string;
  @Input() item: string;
  @Input() multi_layer: boolean = true;

  

  

}
