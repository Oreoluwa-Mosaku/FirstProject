import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.scss']
})
export class TraineeComponent implements OnInit {
  @Input() trainees;
  @Output() selectedtrainee: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    
  }
  traineesSelected (trainees: any) {
    console.log(trainees);
    this.selectedtrainee.emit(trainees);
    }
  }



