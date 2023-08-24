import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Expense {
  id: number;
  name?: string;
  accountNumber?: string;
  type?: string;
  isDistributed?: boolean;
  status?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  baseUrl = 'http://localhost:8087/api/expense';

  constructor(private http: HttpClient) {}

  getExpenses() {
    return this.http.post<any>(`${this.baseUrl}/search`, {});
  }

  searchExpense(name?: string, accountNumber?: string) {
    return this.http.post<any>(`${this.baseUrl}/search`, {
      name: name,
      accountNumber: accountNumber,
    });
  }

  createExpense(
    name: string,
    accountNumber: string,
    type: string,
    isDistributed: boolean,
    status: number
  ) {
    const body = {
      name: name,
      accountNumber: accountNumber,
      type: type,
      isDistributed: isDistributed,
      status: status,
    };
    return this.http.post<any>(`${this.baseUrl}/insert`, body);
  }

  updateExpense(
    id: number,
    name: string,
    accountNumber: string,
    type: string,
    isDistributed: boolean,
    status: number
  ) {
    const body = {
      id: id,
      name: name,
      accountNumber: accountNumber,
      type: type,
      isDistributed: isDistributed,
      status: status,
    };
    console.log(body);
    return this.http.put<any>(`${this.baseUrl}/update`, body);
  }

  deleteExpense(id: number) {
    const body = {
      id: id,
    };
    return this.http.put<any>(`${this.baseUrl}/delete`, body);
  }
}
