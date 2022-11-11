import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { Router } from '@angular/router';
import { catchError, from } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error = '';
  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  loginUser($event: FormGroup) {
    const payload = { ...$event.value };
    from(this.authService.signInUser(payload)).pipe(catchError<any, any>((error: any) => {
      this.error=error.message;
    })).subscribe((data)=>{
     this.router.navigate(['/'])
    })
  }
}
