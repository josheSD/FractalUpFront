import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styles: [
  ]
})
export class SplashScreenComponent implements OnInit {

  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
    setTimeout(() =>{
      this._router.navigate(['/admin/recientes']);
    },1500);
  }

}
