import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favorite-form',
  templateUrl: './favorite-form.component.html',
  styleUrls: ['./favorite-form.component.css']
})
export class FavoriteFormComponent implements OnInit {
  imageUrl: File = null;
  image: string;

 
  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {}

  // on submit leave comment treba napraviti da radi
  onSubmit() {
  	const fd = new FormData();
  	fd.append('image', this.imageUrl);
 
	  console.log(this.image);
  
  	this.favoritesService.addImage(this.image)
  		.subscribe(
  			res => console.log(res),
  			err => console.log(err)
  		)
  }

  onFileSelected(event) {
  	console.log(event.target.files[0].name);
  	this.imageUrl = event.target.files[0].name;
  }

  // comment form
  imageForm = new FormGroup({
  		title: new FormControl(''),
  		imageUrl: new FormControl('', Validators.required)
  	});

  get title() { return this.imageForm.get('title').value }
  get imagePath() { return this.imageForm.get('imageUrl').value }

}

