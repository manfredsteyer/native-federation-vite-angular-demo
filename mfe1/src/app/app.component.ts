import { Component } from '@angular/core';
import { shared } from 'shared';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="mfe">
      <h1>Flights</h1>

      <input type="text" /><button (click)="search()">Search</button>
    </div>
  `,
  styles: [
    `
      .mfe {
        border: 2px darkred dashed;
        padding: 20px;
      }
      
      input[type='text'] {
        width: 300px;
      }

      button, input[type='text'] {
        border-radius: 5px;
        border: black 1px solid;
        padding: 8px 5px;
        margin: 8px 0;
        margin-right:10px;
        box-sizing: border-box;
      }
    `,
  ],
})
export class AppComponent {
  constructor() {
    console.log('mfe1:user name', shared.userName)
  }
  search() {
    alert('Not implemented for this demo.');
  }
}
