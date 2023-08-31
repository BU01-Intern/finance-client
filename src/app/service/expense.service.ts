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

  searchExpense(
    searchText: string,
    page: number,
    size: number,
    sorts?: string[]
  ) {
    const body: any = {
      name: searchText,
      accountNumber: searchText,
      page: page,
      size: size,
    };

    if (sorts && sorts.length > 0) {
      body.sorts = sorts;
    }

    return this.http.post<any>(`${this.baseUrl}/search`, body);
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
    return this.http.put<any>(`${this.baseUrl}/update`, body);
  }

  deleteExpense(id: number) {
    const body = {
      id: id,
    };
    return this.http.put<any>(`${this.baseUrl}/delete`, body);
  }
}
