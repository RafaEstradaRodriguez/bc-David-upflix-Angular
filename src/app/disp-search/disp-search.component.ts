import { Component, OnInit } from '@angular/core';
import { ApiMoviesService } from '../api-movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disp-search',
  templateUrl: './disp-search.component.html',
  styleUrls: ['./disp-search.component.css']
})
export class DispSearchComponent implements OnInit {
  multElems = [];
  elem: String;
  constructor(private apiService: ApiMoviesService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.elem = params['elem'];
      this.search(this.elem);
    });
  }

  ngOnInit() {
  }
  search(id) {
    if (id.length > 2) {
      this.multElems = this.apiService.getElemsMult(`/api/search?${id}`);
    }
  }
}
