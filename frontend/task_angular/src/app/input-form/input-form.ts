import { Component, inject } from '@angular/core';
import {FormControl, ReactiveFormsModule, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Priority } from '../../enums/priority';
import { Status } from '../../enums/status';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-form.html',
  styleUrl: './input-form.css',
})
export class InputForm {

  protected readonly priorities = Object.values(Priority);
  
  // This is modern style FormGroup, but there's loads of ways to do it, this is typesafe and uses validators

   form = new FormGroup({

        title: new FormControl('', {

            nonNullable: true,

            validators: [
                Validators.required
            ]

        }),

        description: new FormControl('', {

            nonNullable: true

        }),

        dueDate: new FormControl('', {

            nonNullable: true

        }),

        priority: new FormControl(Priority.MEDIUM, {

            nonNullable: true

        })

    });

    save() {}


  
}
