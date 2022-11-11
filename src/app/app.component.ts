import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable, Subscription } from 'rxjs';
import { Store } from 'store';
import { AuthService, User } from './auth/shared/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular_pro';
  user$:Observable<User | null>|undefined;
  subscription:Subscription|undefined;

  constructor(private authService:AuthService,private store:Store,private router:Router) {

  }
  ngOnInit(){
   this.subscription= this.authService.auth$.subscribe();
   this.user$=this.store.select<User>('user');
  }
  ngOnDestroy(){
    this.subscription?.unsubscribe();
  }
   logoutUser(){
    console.log('o')
   from( this.authService.signOut()).subscribe(data=>{
    this.store.set('user',null);
    this.router.navigate(['/auth/login'])

   });
  }
}
