import { BehaviorSubject, Observable } from 'rxjs';
import { State } from './state';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

/*

store.set('todos', [{}, {}])

store.select(''todos)

*/


const state: State = {
    playlist: undefined
};

export class Store {

    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable().pipe(distinctUntilChanged());

    get value() {
        return this.subject.value;
    }

    select<T>(name: string): Observable<T> {
        return this.store.pipe(pluck(name));
    }

    // tslint:disable-next-line:no-shadowed-variable
    set(name: string, state: any) {
        this.subject.next({
            ...this.value, [name]: state
        });
    }

}
