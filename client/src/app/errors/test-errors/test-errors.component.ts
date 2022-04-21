import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css'],
})
export class TestErrorsComponent implements OnInit {
  baseUrl = 'https://localhost:5001/api/';
  validationError: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  get404Response() {
    this.http.get(`${this.baseUrl}buggy/not-found`).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get400Response() {
    this.http.get(`${this.baseUrl}buggy/bad-request`).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get500Response() {
    this.http.get(`${this.baseUrl}buggy/server-error`).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get401Response() {
    this.http.get(`${this.baseUrl}buggy/auth`).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get400ValidationResponse() {
    this.http.post(`${this.baseUrl}account/register`, {}).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
        this.validationError = error;
      }
    );
  }
}
