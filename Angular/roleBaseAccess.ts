// Role-Based Authorization in Angular (For Interview Preparation)
// Role-based authorization in Angular ensures that users can only access routes, components,
//  or UI elements based on their assigned roles. This is commonly implemented using Route Guards, Services, and JWT tokens.

// 1. How Does Role-Based Authorization Work?
// User Logs In → Server sends a JWT token containing user roles.
// Token Storage → The frontend stores the token in localStorage/sessionStorage.
// Extract Roles → Decode the token to get user roles.
// Protect Routes → Use Auth Guards (CanActivate) to restrict access based on roles.
// Restrict UI Elements → Use *ngIf to show/hide buttons or sections.
// 2. Implementing Role-Based Authorization in Angular
// Step 1: Store User Roles in JWT Token (Example Token)
// When a user logs in, the backend provides a JWT token like this:

// {
//   "sub": "user123",
//   "roles": ["admin", "editor"],
//   "exp": 1712185800
// }
// 👉 The roles array contains user permissions.

// Step 2: Create an Auth Service to Handle Roles
// Create an authentication service to store and retrieve roles.

// auth.service.ts


import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  // Simulate login by storing token
  login(token: string) {
    localStorage.setItem('token', token);
  }

  // Decode token and get user roles
  getUserRoles(): string[] {
    const token = localStorage.getItem('token');
    if (!token) return [];

    try {
      const payload = JSON.parse(atob(token.split('.')[1])); // Decode JWT
      return payload.roles || [];
    } catch (e) {
      return [];
    }
  }

  // Check if user has a specific role
  hasRole(role: string): boolean {
    return this.getUserRoles().includes(role);
  }

  // Logout
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
// 👉 This service handles role extraction from the JWT token.

// Step 3: Create an Auth Guard for Role-Based Access
// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRoles = route.data['roles'] as string[];

    if (!expectedRoles || expectedRoles.length === 0) return true; // No roles required

    const userRoles = this.authService.getUserRoles();
    const hasPermission = expectedRoles.some(role => userRoles.includes(role));

    if (!hasPermission) {
      this.router.navigate(['/unauthorized']); // Redirect if not authorized
      return false;
    }
    return true;
  }
}
// 👉 This guard checks whether the user has the required role before allowing route access.

// Step 4: Apply Role-Based Access to Routes
// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent }, // Public Route
  { 
    path: 'admin', 
    component: AdminComponent, 
    canActivate: [AuthGuard], 
    data: { roles: ['admin'] } // Only admins can access this
  },
  { path: '**', redirectTo: 'dashboard' } // Fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
// 👉 Here, only users with the admin role can access the AdminComponent.

// Step 5: Show/Hide UI Elements Based on Role
// Restrict UI elements using *ngIf.

// app.component.html
<button *ngIf="authService.hasRole('admin')" routerLink="/admin">Admin Panel</button>
<button (click)="logout()">Logout</button>
app.component.ts

import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
// 👉 Now, only users with the "admin" role can see the "Admin Panel" button.

// 6. Common Interview Questions & Answers
// Q1: How does Angular implement role-based authorization?
// 👉 Angular uses Auth Guards (CanActivate) to restrict access to routes and Auth Services to check user roles from JWT tokens.

// Q2: How can we dynamically check roles in Angular?
// 👉 We can use a method like authService.hasRole('admin') to check roles dynamically in components.

// Q3: How can we protect a route for multiple roles?
// 👉 Add multiple roles in data like:


// { path: 'editor', component: EditorComponent, canActivate: [AuthGuard], data: { roles: ['admin', 'editor'] } }
// 👉 This allows both "admin" and "editor" roles to access the EditorComponent.

// Q4: How do we prevent unauthorized users from accessing an Angular component?
// 👉 Use *ngIf="authService.hasRole('admin')" to hide elements for unauthorized users.

// Q5: How can we manually trigger logout when a user is unauthorized?
// 👉 Redirect users to /unauthorized in auth.guard.ts and clear their session.