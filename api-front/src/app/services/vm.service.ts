import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Vm {
  codigo?: number;
  displayName: string;
  cpu: number;
  ram: number;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class VmService {
  private apiUrl = 'http://localhost:8080/api/vms';

  constructor(private http: HttpClient) {}

  getAllVms(): Observable<Vm[]> {
    return this.http.get<Vm[]>(this.apiUrl);
  }

  updateVm(vm: Vm): Observable<Vm> {
    return this.http.put<Vm>(`${this.apiUrl}/update`, vm)
  }

  createVm(vm: Vm): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, vm);
  }

  deleteVm(codigo: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${codigo}`, );
  }
}
