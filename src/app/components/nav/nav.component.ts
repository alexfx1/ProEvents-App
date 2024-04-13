import { Component, OnInit, TemplateRef } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { User } from '../../models/User';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isCollapsed = true;
  userName: string = '';
  userAdmin: boolean = false;
  userEmail: string = '';
  userPassword: string = '';

  constructor(private userService: EventoService, 
    private modalService: BsModalService, private modalRef: BsModalRef, private fb: FormBuilder) { }

  ngOnInit() {
  }
  
  addUser(event: Event): void {
    event.preventDefault();

    const user: User = {
      login: this.userName,
      admin: this.userAdmin,
      email: this.userEmail,
      senha: this.userPassword
    };

    this.userService.addUser(user).subscribe(
      (response) => {
        console.log('User added successfully:', response);
        this.resetForm();
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  resetForm(): void {
    this.userName = '';
    this.userAdmin = false;
    this.userEmail = '';
    this.userPassword = '';
  }
  
}
