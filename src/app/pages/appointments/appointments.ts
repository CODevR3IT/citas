import { Component } from '@angular/core';
import { Appointment } from './appointment.interface';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-appointments',
  imports: [NgbPaginationModule, CommonModule],
  templateUrl: './appointments.html',
  styles: ``
})
export class Appointments {
  page:number = 1;
  pageSize:number = 4;
  cards :Appointment[] = [
    {name: 'Id deserunt sit tempor pariatur magna quis ea nostrud voluptate 2.', description: 'Dolore eu culpa sit quis ipsum reprehenderit fugiat consequat. Anim nisi elit ad commodo. Et consectetur do dolor amet eu consequat excepteur et laborum aliqua dolore. Nisi irure voluptate ad exercitation non laborum anim. Esse mollit est est commodo voluptate non eiusmod id excepteur consectetur do cupidatat. Dolor amet eiusmod non nisi.', file_path: 'assets/images/appointments/1.jpg'},
    {name: 'Id deserunt sit tempor pariatur magna quis ea nostrud voluptate 2.', description: 'Dolore eu culpa sit quis ipsum reprehenderit fugiat consequat. Anim nisi elit ad commodo. Et consectetur do dolor amet eu consequat excepteur et laborum aliqua dolore. Nisi irure voluptate ad exercitation non laborum anim. Esse mollit est est commodo voluptate non eiusmod id excepteur consectetur do cupidatat. Dolor amet eiusmod non nisi.', file_path: 'assets/images/appointments/1.jpg'},
    {name: 'Id deserunt sit tempor pariatur magna quis ea nostrud voluptate 2.', description: 'Dolore eu culpa sit quis ipsum reprehenderit fugiat consequat. Anim nisi elit ad commodo. Et consectetur do dolor amet eu consequat excepteur et laborum aliqua dolore. Nisi irure voluptate ad exercitation non laborum anim. Esse mollit est est commodo voluptate non eiusmod id excepteur consectetur do cupidatat. Dolor amet eiusmod non nisi.', file_path: 'assets/images/appointments/1.jpg'},
    {name: 'Id deserunt sit tempor pariatur magna quis ea nostrud voluptate 2.', description: 'Dolore eu culpa sit quis ipsum reprehenderit fugiat consequat. Anim nisi elit ad commodo. Et consectetur do dolor amet eu consequat excepteur et laborum aliqua dolore. Nisi irure voluptate ad exercitation non laborum anim. Esse mollit est est commodo voluptate non eiusmod id excepteur consectetur do cupidatat. Dolor amet eiusmod non nisi.', file_path: 'assets/images/appointments/1.jpg'},
    {name: 'Id deserunt sit tempor pariatur magna quis ea nostrud voluptate 2.', description: 'Dolore eu culpa sit quis ipsum reprehenderit fugiat consequat. Anim nisi elit ad commodo. Et consectetur do dolor amet eu consequat excepteur et laborum aliqua dolore. Nisi irure voluptate ad exercitation non laborum anim. Esse mollit est est commodo voluptate non eiusmod id excepteur consectetur do cupidatat. Dolor amet eiusmod non nisi.', file_path: 'assets/images/appointments/1.jpg'},
    {name: 'Id deserunt sit tempor pariatur magna quis ea nostrud voluptate 2.', description: 'Dolore eu culpa sit quis ipsum reprehenderit fugiat consequat. Anim nisi elit ad commodo. Et consectetur do dolor amet eu consequat excepteur et laborum aliqua dolore. Nisi irure voluptate ad exercitation non laborum anim. Esse mollit est est commodo voluptate non eiusmod id excepteur consectetur do cupidatat. Dolor amet eiusmod non nisi.', file_path: 'assets/images/appointments/1.jpg'},
    {name: 'Id deserunt sit tempor pariatur magna quis ea nostrud voluptate 2.', description: 'Dolore eu culpa sit quis ipsum reprehenderit fugiat consequat. Anim nisi elit ad commodo. Et consectetur do dolor amet eu consequat excepteur et laborum aliqua dolore. Nisi irure voluptate ad exercitation non laborum anim. Esse mollit est est commodo voluptate non eiusmod id excepteur consectetur do cupidatat. Dolor amet eiusmod non nisi.', file_path: 'assets/images/appointments/1.jpg'},
  ];
}
