import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, from } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error:string='';
  constructor(private authService:AuthService) { }
  ngOnInit(): void {
  }
  registerUser($event:FormGroup){
    const {email,password}=$event.value;
    from((this.authService.createUser({email,password}) as Promise<any>)).pipe(catchError<any,any>((err:any)=>{
      this.error=err.message;
    })).subscribe(data=>{
      console.log(data);
    })

  }

}
