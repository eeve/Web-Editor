import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { CodeModule } from "../core/code.module";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { WorkspaceModule } from "./workspace/workspace.module";
import { CompConfigService } from "../editor/provider/comp-config.service";
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CodeModule,
    FormsModule,
    BrowserModule,
    WorkspaceModule
  ],
  providers: [
    CompConfigService,
  ],
  bootstrap: [],
  entryComponents:[

  ],
  exports: [

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PagesModule { }
