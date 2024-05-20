import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {


  ngOnInit(): void {

    const login:any = document.getElementById('login')
    const signup:any = document.getElementById('signup')

    if(window.location.href == "http://localhost:4200/") {
  
    login.style.borderBottom = "1px solid white"

    } 
    
    if(window.location.href == "http://localhost:4200/signup") {

    signup.style.borderBottom = "1px solid white"

  }

}


  click = 0

  toggle() {

    const navbarShow:any = document.getElementById('navbarShow')

    this.click++

    if(this.click == 1) {

      navbarShow.style.display = "block"

    } else if (this.click == 2) {

      this.click = 0
      navbarShow.style.display = "none"

    }
  

  }



}
