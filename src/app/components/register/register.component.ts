import { Component } from '@angular/core';
import { Directory } from 'src/app/model/directory';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  userName: string = '';
  email: string = '';
  phnNumber: string = '';
  btnRef: string = 'save';
  editId: number = 0;

  directories: Directory[] = [
    { id: 1, userName: 'rev', email: 'rev@123', phnNumber: '1234567890' },
  ];
  getRandom(): number {
    let num = Math.floor(Math.random() * 100 + 1);
    return num;
  }

  save(): Directory[] {
    if (this.editId === 0) {
      let directory: Directory = {
        id: this.getRandom(),
        userName: this.userName,
        email: this.email,
        phnNumber: this.phnNumber,
      };
      this.directories.push(directory);
    } else {
      this.directories = this.directories.map((number) => {
        if (number.id === this.editId)
          return {
            ...number,
            userName: this.userName,
            email: this.email,
            phnNumber: this.phnNumber,
          };
        else return number;
      });
    }
    this.userName = '';
    this.email = '';
    this.phnNumber = '';
    this.btnRef = 'save';
    return this.directories;
  }

  delete(id: number): Directory[] {
    this.directories = this.directories.filter((dir) => dir.id !== id);
    return this.directories;
  }

  edit(id: number): Directory[] {
    this.editId = id;
    const checkId = this.directories.find((num) => num.id === id);
    if (checkId) {
      this.userName = checkId.userName;
      this.email = checkId.email;
      this.phnNumber = checkId.phnNumber;
    }
    this.btnRef = 'update';
    console.log('edit');
    return this.directories;
  }
}
