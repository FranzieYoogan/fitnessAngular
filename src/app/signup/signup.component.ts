import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HeaderComponent, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  data:any
  ngOnInit(): void {

    this.http.get('http://localhost:3000/trainer').subscribe(response => {

    this.data = response

    });

  }

  private http = inject(HttpClient)

  

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
    for(var z = 0; z<= this.data.length; z++) {


   
    if(this.data[z]['userEmail'] != userEmail.value && userEmail.value != "" && userName.value != "" && userPassword.value != "") {


  
    this.http.post('http://localhost:3000/trainer', body).subscribe(response => {
      console.log('Registered:', response);

    

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

}
