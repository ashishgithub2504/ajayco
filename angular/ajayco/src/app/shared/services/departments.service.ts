import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { NavigationLink } from '../../../app/shared/interfaces/navigation-link';

@Injectable({
    providedIn: 'root'
})
export class DepartmentsService {
    private areaElementSubject$: BehaviorSubject<HTMLElement> = new BehaviorSubject(null);
    APIURL = 'http://localhost:8765/api/webservice/';
    areaElement$: Observable<HTMLElement> = this.areaElementSubject$.asObservable();

    constructor(
        private http: HttpClient,
    ) { }

    setAreaElement(value: HTMLElement): void {
        this.areaElementSubject$.next(value);
    }

    getNavigation(): Observable<NavigationLink[]> {
        return this.http.get<NavigationLink[]>(this.APIURL + 'getnavigation')
        .pipe(map((response: any) => response.data));
    }
}
