import {Component, inject, signal} from '@angular/core';
import {first, Observable} from 'rxjs';
import {Login} from '../login';
import {TuiAvatar} from '@taiga-ui/kit';
import {AsyncPipe, NgIf, NgOptimizedImage} from '@angular/common';
import {TuiDialogService, TuiLabel, TuiTextfieldComponent, TuiTextfieldDirective} from '@taiga-ui/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-user-page',
  imports: [
    TuiAvatar,
    AsyncPipe,
    TuiTextfieldComponent,
    ReactiveFormsModule,
    TuiLabel,
    TuiTextfieldDirective,
    FormsModule
  ],
  templateUrl: './user-page.html',
  styleUrl: './user-page.css',
  standalone: true
})
export class UserPage {
  value = ""
  userName$!: Observable<string>;
  userAvatar$!: Observable<string>;
  userAvatar = signal("")
  constructor(private authService: Login) { }

  ngOnInit(): void {
    this.userName$ = this.authService.userName$;
    this.userAvatar$ = this.authService.userAvatar$;
    this.userAvatar$.pipe(first()).subscribe(v => this.userAvatar.set(v as string))
    this.userName$.pipe(first()).subscribe(v => this.value =(v as string))
  }



  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = e => this.userAvatar.set(reader.result as string);

      reader.readAsDataURL(file);



    }
  }
  private readonly dialogs = inject(TuiDialogService);
  protected showDialog(): void {
    this.dialogs
      .open(
        '<div>Это имя занято</div>',
        {label: 'Неподходящее имя', size: 's'},
      )
      .subscribe();
  }
  saveButton(){
    if (this.authService.changeName(this.value)){
      this.authService.changeAvatar(this.userAvatar())
    }
    else{
      this.showDialog()
    }
  }
  quitButton(){
    this.authService.quit()
    window.location.reload()
  }

  protected readonly first = first;
}
