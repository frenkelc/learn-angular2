import {Component} from 'angular2/core';
import {CoursesComponent} from './components/courses.components';
import {AuthorComponent} from './components/authors.components';

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular2 App</h1>
        <courses></courses>
        <authors></authors>`,
    directives: [CoursesComponent, AuthorComponent]
})
export class AppComponent { }