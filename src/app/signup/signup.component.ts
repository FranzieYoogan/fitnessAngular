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
export class SignupComponent {

  private http = inject(HttpClient)

  response:any

  submit() {


    const userEmail:any = document.getElementById('userEmail')
    const userName:any = document.getElementById('userName')
    const userPassword:any = document.getElementById('userPassword')
    const containerAlert:any = document.getElementById('containerAlert')
    const containerAlert2:any = document.getElementById('containerAlert2')

    const body = {

      "userName": userName.value,
      "userEmail": userEmail.value,
      "userPassword": userPassword.value

    }

      if(userName.value != "" && userEmail.value != "" && userPassword != "") {

    
    this.http.post('http://localhost:3000/trainer', body).subscribe(response => {
      console.log('Registered:', response);

      this.response = response

      

    });

    containerAlert.style.display = "block"

    setTimeout(() => {

      window.location.reload()

    }, 2000);


  } else {

    containerAlert2.style.display = "block"

    setTimeout(() => {

      window.location.reload()

    }, 2000);
  }
   

  
  

}

}
