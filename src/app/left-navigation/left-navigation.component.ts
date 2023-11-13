import { Component } from '@angular/core';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent {

  public icons = [
    {
      "src": "add-square-outlined-interface-button.png"
    },
    {
      "src": "arrow-down.png"
    },
    {
      "src": "folder.png"
    },
    {
      "src": "seo-and-web.png"
    },
    {
      "src": "settings.png"
    },
    {
      "src": "verifying-mark-outline.png"
    }
  ]
}
