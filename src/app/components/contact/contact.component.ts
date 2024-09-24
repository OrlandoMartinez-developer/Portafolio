import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css' ] // Aquí la corrección de 'styleUrl' a 'styleUrls'
})
export class ContactComponent {

  onSubmit() {
    console.log('Formulario enviado');
    // Aquí puedes agregar la lógica que desees para el envío del formulario
  }
}
