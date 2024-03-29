import {Component} from 'angular2/core'
import {AuthorService} from '../services/author.service'

@Component({
    selector: 'authors',
    template: `
       <h2>Authors</h2>
       {{ title }}  
       <ul>
         <li *ngFor="#author of authors">
           {{ author }}
         </li>
       </ul> 
    `,
    providers: [AuthorService]
})

export class AuthorComponent {
    title = "Title for authors page";
    authors: string[];

    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }
}