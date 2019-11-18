import { Component, OnInit } from '@angular/core';
import { jarallax, jarallaxVideo, jarallaxElement } from 'jarallax';
import {EnvService} from "../../shared/env.service";

@Component({
  selector: 'app-meetup-info',
  templateUrl: './meetup-info.component.html',
  styleUrls: ['./meetup-info.component.css']
})
export class MeetupInfoComponent implements OnInit {

  constructor(private env: EnvService) { }

  ngOnInit() {
    jarallaxVideo();
    jarallaxElement();
    jarallax(document.querySelectorAll('[data-jarallax-element]'));
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2,
      type: "scroll-opacity"
    });
  }

}
