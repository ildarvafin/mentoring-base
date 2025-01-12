import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class UsersApiService {
    readonly apiService = inject(HttpClient);
    
    getUseres() {
        return this.apiService.get('https://jsonplaceholder.typicode.com/users')
    }
} 