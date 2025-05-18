import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  user: string[] = ['Said', 'Soukaina', 'Abdelkabir','Mouad']; 


  supprimer(){
    this.user.pop(); 
  }

  vider(){
    this.user = []; 
  }

  ajouter(nom: string){
    this.user.push(nom); 
  }


}
