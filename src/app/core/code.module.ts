import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BreadCurmbComponent } from './component/bread-curmb/bread-curmb.component';
import { MenuBreadCrumbService } from '../providers/menu.breadcrumb.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CompDynamicCreateService } from '../editor/provider/comp-dynamic-create.service';
import { UserAgentService } from './tool/user-agent.service';

@NgModule({
  declarations: [
    BreadCurmbComponent
 ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule
  ],
  exports: [
    BreadCurmbComponent
  ],
  providers: [
    CompDynamicCreateService,
    MenuBreadCrumbService,
    UserAgentService
  ]
})
export class CodeModule { }
