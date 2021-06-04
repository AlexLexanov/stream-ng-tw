import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-about-film',
  templateUrl: './info-about-film.component.html',
  styleUrls: ['./info-about-film.component.css']
})
export class InfoAboutFilmComponent implements OnInit {
  @Input() id: number | undefined;
  constructor() {}
  ngOnInit(): void {}
}
