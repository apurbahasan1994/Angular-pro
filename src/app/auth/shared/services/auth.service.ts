import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from, map, tap } from 'rxjs';
import { Store } from 'store';
@Injectable()
export class AuthService {
  auth$=this.afs.authState.pipe(tap((response)=>{
    if(!response){
      this.store.set('user',null);
      return;
    }
    const user:User={
      email:response?.email,
      uuid:response?.uid,
      authenticated:true
    }
    this.store.set('user',user);
  }))

  constructor(private afs: AngularFireAuth,private store:Store) { }
  get authState(){
    return this.afs.authState;
  }
  get  user(){
    return from(this.afs.currentUser).pipe(map((user)=>user));
  }
  createUser(payload: { email: string, password: string }) {
    return this.afs.createUserWithEmailAndPassword(payload.email, payload.password);
  }
  signInUser(payload: { email: string, password: string }) {
    return this.afs.signInWithEmailAndPassword(payload.email, payload.password);
  }
  signOut(){
   return this.afs.signOut();
  }
}

export interface User{
  email?:string | null | undefined,
  uuid?:string | null | undefined,
  authenticated?:boolean
}
