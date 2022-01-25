import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  displayEmail: any;

  ngOnInit(): void {
    this.displayEmail = localStorage.getItem('UserEmail');
  }

  onBack() {
    this.router.navigate([''])
  }

}
