import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  email:string = '';
  password:string = '';

  doLogin() {
    if (this.email == '' || this.email.includes('@') == false){
      return;
    } else if (this.password == '') {
      return;
    }
    this.route.navigate(['/home'])
    

  }


}
