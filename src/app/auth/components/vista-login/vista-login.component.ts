import { Component, Input } from '@angular/core';

@Component({
  selector: 'auth-vista-login',
  templateUrl: './vista-login.component.html',
  styleUrls: ['./vista-login.component.scss']
})
export class VistaLoginComponent {

  @Input() title: string = '';
  @Input() rol: string = '';

}
