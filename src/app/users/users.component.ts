import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent {
  users = [
   {
     id:1,
     name:'Stacey'
   },
   {
     id:2,
     name:'Lily'
   },
   {
     id:3,
     name:'John'
   }

  ];
}


