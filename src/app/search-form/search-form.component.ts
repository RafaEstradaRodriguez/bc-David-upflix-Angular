import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  search(searchForm) {
    this.router.navigate(['/search', searchForm.value.peli]);
  }
}
