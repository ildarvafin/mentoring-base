import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { User } from "./interface/user.interface";
import { Observable } from "rxjs";


@Injectable({providedIn: 'root'})
export class UsersApiService {
    readonly apiService: HttpClient = inject(HttpClient);
    
    getUseres(): Observable<User[]> {
        return this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users')
    }
} 