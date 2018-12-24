import { Component, OnInit } from '@angular/core';
import { advanceActivatedRoute } from '@angular/router/src/router_state';

@Component({
  selector: 'app-get-prediction',
  templateUrl: './get-prediction.component.html',
  styleUrls: ['./get-prediction.component.css']
})
export class GetPredictionComponent implements OnInit {
  advice: string = this.advice;

  constructor() {
  }

  ngOnInit() {
  }


  getPrediction() {
    const API = 'https://api.adviceslip.com/advice';
    fetch(API)
      .then(response => response.json())
      .then(data => {
        const advice = data.slip.advice;
        console.log(advice);
        this.advice = advice;
      })
  }
  }

