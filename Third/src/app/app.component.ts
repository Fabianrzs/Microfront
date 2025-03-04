import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Third';
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
