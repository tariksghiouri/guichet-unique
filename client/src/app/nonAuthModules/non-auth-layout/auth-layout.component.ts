import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  template: `
    <div>
    <div class=" wrapper d-flex justify-content-center align-items-center">
    <div class="card form">
		<div class="card-body">
    <ng-content> </ng-content>
   </div>
   </div>
    </div>
    </div>
  `,
  styles: [
    `.wrapper{
     
    }
    .form{
      width:550px;
       box-shadow:7px 5px 20px #968b8b3d;
    }
    .info-text{
      font-size:12px;
    }
`
  ]
})
export class AuthLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
