import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators,FormBuilder} from '@angular/forms'
import { NoUserService } from 'src/app/services/no-user.service';

@Component({
  selector: 'app-no-user',
  templateUrl: './no-user.component.html',
  styleUrls: ['./no-user.component.scss']
})
export class NoUserComponent {

  noUserForm!: FormGroup
  formData = new FormData();

  constructor(private formBuilder: FormBuilder, private noUserService: NoUserService){

  }

  ngOnInit() {
  this.noUserForm = this.formBuilder.group({
   name: ['', Validators.required],
   lastname: ['', Validators.required],
   archivo1: ['', Validators.required],
   archivo2: ['', Validators.required]
  })
  }

  create(){
    if(this.noUserForm.valid){
    console.log(this.noUserForm)
    this.formData.append('name', this.noUserForm.value.name)
    this.formData.append('lastname',this.noUserForm.value.lastname)
  
    console.log(this.formData.get('lastname'))
    console.log(this.formData.get('archivo2'))

    this.noUserService.create(this.formData).subscribe(response => {
    console.log(response)
    }, err => {
      console.log(err)
    })
    }
  }

  file1(event: any) {
    if(event.target.files.length  == 1) {
      this.formData.append("archivo1",event.target.files[0])
    }else {
      alert("Solo un Archivo")
    }
}

file2(event: any) {
  if(event.target.files.length  == 1) {
    this.formData.append("archivo2",event.target.files[0])
  }else {
    alert("Solo un Archivo")
  }
}
}