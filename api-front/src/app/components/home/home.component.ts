import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  loginForm: FormGroup;
  loginError = false;
  loading = false;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;
    this.loading = true;
    this.http.post('http://localhost:8080/login', {
      email,
      senha: password
    }).subscribe({
      next: (res) => {
        this.loginError = false;
        this.loading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
        this.loginError = true;
      }
    })

    
  }
}
