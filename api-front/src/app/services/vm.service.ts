import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Vm {
  displayName: string;
  cpu: number;
  memory: number;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class VmService {
  private apiUrl = 'http://localhost:8080/api/vm';

  constructor(private http: HttpClient) {}

  getAllVms(): Observable<Vm[]> {
    return this.http.get<Vm[]>(this.apiUrl);
  }
}
