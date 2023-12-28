import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-docta',
  templateUrl: './login-docta.component.html',
  styleUrls: ['./login-docta.component.scss']
})
export class LoginDoctaComponent implements OnInit {

  title: string = 'Administrador/a';
  rol: string = 'manager';

  ngOnInit(): void {
    console.log(this.title, this.rol);
  }

}
