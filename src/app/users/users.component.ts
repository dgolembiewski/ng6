import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    // trigger defines the animation
    trigger('listStagger', [
      // transition determins when it will happen in this 
      //   case any state change
      transition('* <=> *', [
        query(
          // query here says when entering add the style 
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        // define action on leaving 
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class UsersComponent implements OnInit {

  users$: Object;

  // the constructor creates an instance of the service
  constructor(private data: DataService) { }
  // onInit calls getUsers() and subscribes to it
  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    );
  }
}
