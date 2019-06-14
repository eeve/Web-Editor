import { Component } from "@angular/core";
import { BasicComponent } from "../../../components/comp-basic/comps/tool/area/node_modules/src/app/component/dev/basic/basic/basic.component";
import { SettingObjComponent } from "../../../components/comp-basic/comps/tool/auxiliary/node_modules/src/app/module/setting-object.component";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends BasicComponent implements SettingObjComponent {
  inputBool : boolean;
  statue: any;

  constructor() {
    super();
  }

  ngOnInit() {
    this.initData();
  }
}