import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AuthFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  exports:[AuthFormComponent]
})
export class SharedModule {
  static forRoot():ModuleWithProviders<SharedModule>{
    return {
      ngModule:SharedModule,
      providers:[
        AuthService
      ]
    }
  }
 }
