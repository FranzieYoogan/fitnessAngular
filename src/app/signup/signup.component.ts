import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HeaderComponent, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent{

  


  private http = inject(HttpClient)






  
  

  submit() {
    

    const userEmail:any = document.getElementById('userEmail')
    const userName:any = document.getElementById('userName')
    const userPassword:any = document.getElementById('userPassword')


    const body = {

      "userName": userName.value,
      "userEmail": userEmail.value,
      "userPassword": userPassword.value

    }


  
    this.http.post('http://localhost:3000/trainer', body).subscribe(response => {
      console.log('Registered:', response);

    

    });
    
  


  





  
  

}

}
