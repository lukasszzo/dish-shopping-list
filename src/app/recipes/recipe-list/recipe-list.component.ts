import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('A test recipe','this siple test','https://www.winiary.pl/image.ashx/kaszanka-z-cebula-i-czosnkiem.jpg?fileID=192132&width=800&height=1400&frame=False&bg=0&resize=1&crop=0&hRefill=0&vRefill=0&quality=84'),
    new Recipe('Schabowy','this siple test','https://upload.wikimedia.org/wikipedia/commons/a/ac/Kotlet_schabowy_56.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
