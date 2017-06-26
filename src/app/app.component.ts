import { Component } from '@angular/core';
import 'reflect-metadata';

export function WindowComponent(annotation: any) {
  return function (target: Function) {
    const metadata = new Component(annotation);
    Reflect.defineMetadata('annotations', [metadata], target);
  };
}

@WindowComponent({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
