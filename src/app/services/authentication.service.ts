import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User | null>;
    public currentUser: Observable<User | null>;

    constructor(private http: HttpClient, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('currentUser')|| '{}'));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User | null {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        // return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
        //     .pipe(map(user => {
        //         console.log(user)
        //         // store user details and jwt token in local storage to keep user logged in between page refreshes
        //         localStorage.setItem('currentUser', JSON.stringify(user));
        //         this.currentUserSubject.next(user);
        //         return user;
        //     }));
            let res = this.http.post<any>(`${environment.apiUrl}/api/auth/signin`, { username, password })
            return   res.pipe(map(user => {
                    // user.token= user.accessToken
                    let user1: User = {id: user.id, username:user.username,token:user.accessToken, email: user.email}
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user1));
                    this.currentUserSubject.next(user1);
                    return user;
                }));
    }


    signup(username: string, email: string, password: string) {
            let res = this.http.post<any>(`${environment.apiUrl}/api/auth/signup`, { username,email, password })
            return   res.pipe(map(user => {
                    // user.token= user.accessToken
                    let user1: User = {id: user.id, username:user.username,token:user.accessToken, email: user.email}
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user1));
                    this.currentUserSubject.next(user1);
                    return user;
                }));
    }
    changePassword(user: User){
        return this.http.put<any>(`${environment.apiUrl}/api/auth/changepassword`, { ...user })
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);

        this.router.navigate(['/login']);
    }
}