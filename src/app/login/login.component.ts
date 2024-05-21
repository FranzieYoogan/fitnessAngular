import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private http = inject(HttpClient)

  data:any

  login() {

    const email:any = document.getElementById('email')
    const password:any = document.getElementById('password')
    const containerAlert:any = document.getElementById('containerAlert')
    const containerAlert2:any = document.getElementById('containerAlert2')

    this.http.get('http://localhost:3000/trainer').subscribe(response => {

    this.data = response

    console.log(this.data)

    for(let z = 0; z <= this.data.length; z++) {


      if(email.value == this.data[z].trainerEmail && password.value == this.data[z].trainerPassword) {

        localStorage.setItem('trainerName',this.data[z].trainerName)

        containerAlert.style.display = "block"

        setTimeout(() => {
          
          window.location.href="http://localhost:4200/dashboard"

        }, 2000);


      }else if(email.value != this.data[z].userEmail && password.value != this.data.userPassword){

        containerAlert2.style.display = "block"

          setTimeout(() => {
          
          window.location.reload()

        }, 2000);

      }


    }

  
    });

  }

}
