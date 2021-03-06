import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseHttpService } from '../../../../core/provider/baseHttp/base-http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/forkJoin'

@Component({
  selector: 'app-project-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseHttpService implements OnInit {
  projects:any[];
  states:any[];
  constructor(
      private http: HttpClient,
      private router:Router,
      private route: ActivatedRoute,
  ) { 
    super(http, "projects")
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    Observable.forkJoin([this.getAll(), this.getAll("states")]).subscribe(res=> {
      this.projects = res && res[0] && res[0]['data'];
      this.states = res && res[1] && res[1]['data']
    })
  }

  toDetail(projectId, path) {
      this.router.navigate([`${path}/` ], {queryParams: {project: projectId}})
  }

}
