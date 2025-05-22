import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare global {
  interface Window {
    flutter_inappwebview?: {
      callHandler: (handlerName: string, ...args: any[]) => any;
    };
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';

  onButtonClick() {
    if (
      window.flutter_inappwebview &&
      typeof window.flutter_inappwebview.callHandler === 'function'
    ) {
      window.flutter_inappwebview.callHandler(
        'FlutterWebView',
        JSON.stringify({
          name: 'OPEN_VISIT_APP',
          ssoLink:
            'https://icici.getvisitapp.net/sso?userParams=M6gfrawMWn_MPsNuEDMGLUAoutuDiyBWG3OfYPd57c0gA1wMrR21kGcrVf6qwjY0PZi0ckdqsIojT897xHHYLp3Bcjat76pyGvv0QpHQGZaFyOLOtGlUte2xP6wwctSB&clientId=icici-lomb-9641',
        })
      );
    }
  }
}
