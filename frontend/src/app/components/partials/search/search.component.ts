import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchTerm = '';
  // Somehow set the input string, to searchTerm Variable. Use the router
  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) this.searchTerm = params['searchTerm'];
    });
  }

  ngOnInit(): void {}

  // to navigate the search term
  search(term: string): void {
    if (term) this.router.navigateByUrl('/search/' + term);
  }
}
