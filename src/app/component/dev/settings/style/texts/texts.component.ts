import { Component, OnInit } from "@angular/core";
import { StyleBasicComponent } from "src/app/component/basic/style-basic/style-basic.component";

@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.scss']
})
export class TextsComponent extends StyleBasicComponent implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {
  }

}