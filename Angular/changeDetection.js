// Angular’s change detection mechanism updates the UI whenever the application state changes.
//  It runs from the root component down, checking for updates in each component.
//  The default strategy runs checks for all components, whereas OnPush only updates when @Input() properties change.
//  We can also manually trigger change detection using ChangeDetectorRef to optimize performance


// 1. How Change Detection Works?
// Zone.js Tracks Changes

// Angular uses Zone.js to detect asynchronous operations like HTTP calls, user interactions, or setTimeout().
// Whenever these events occur, Angular triggers change detection to update the UI.
// Component Tree Execution

// Change detection starts from the root component and checks all child components recursively.
// If changes are detected, the view updates accordingly.
// Two Strategies for Change Detection

// Default (CheckAlways): Every component is checked in every change detection cycle.
// OnPush: A component is only checked when its @Input() properties change or an event is triggered.


// Example 1: 

// By default, Angular runs change detection for all components.
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h2>Parent Component</h2>
    <button (click)="changeMessage()">Change Message</button>
    <app-child [message]="message"></app-child>
  `,
})
export class ParentComponent {
  message = 'Hello from Parent';

  changeMessage() {
    this.message = 'Updated Message!';
  }
}

// Child
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<h3>Child Component: {{ message }}</h3>`,
})
export class ChildComponent {
  @Input() message;
}
// Here, when changeMessage() is called, 
// the child component gets updated automatically because Angular’s default change detection runs on every state change.

// Case 2: OnPush Change Detection (Optimized Performance)
// If a component only depends on @Input() changes, we can optimize performance using ChangeDetectionStrategy.OnPush.

import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<h3>Child Component: {{ message }}</h3>`,
  changeDetection: ChangeDetectionStrategy.OnPush,  // 👈 Enables OnPush Strategy
})
export class ChildComponent {
  @Input() message;
}
// Now, change detection will only run if @Input() changes.
// If the parent updates a variable without changing the reference, the child won’t detect it.

// Fix: To trigger an update, assign a new object reference:

// changeMessage() {
//   this.message = 'Updated Message!'; // Works
  // this.message = this.message; // Won't trigger change detection
// }
 
// When Does Change Detection Run?
// When an event occurs (click, input, etc.).
// When an async operation completes (e.g., setTimeout, HTTP request).
// When Angular bindings change (e.g., @Input(), @Output()).
// When using RxJS Observables (e.g., BehaviorSubject, subscribe()).