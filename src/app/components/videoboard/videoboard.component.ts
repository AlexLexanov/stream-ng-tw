import { Component, OnInit } from '@angular/core';
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-videoboard',
  templateUrl: './videoboard.component.html',
  styleUrls: ['./videoboard.component.css']
})
export class VideoboardComponent implements OnInit {
  play = false;
  mute = true;
  faVolumeMute = faVolumeMute;
  faVolumeUp = faVolumeUp;
  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.play = true;
    // }, 5000);
  }

}
