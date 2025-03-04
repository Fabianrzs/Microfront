import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  message = '';
  ngOnInit() {
    window.addEventListener("message", (event) => {
      if (event.data.type === "update") {
        this.message = event.data.data;
      }
    });
  }
  sendMessageToRazor() {
    window.parent.postMessage({ type: "update", data: "¡Hola desde Angular!" }, "*");
  }
}
