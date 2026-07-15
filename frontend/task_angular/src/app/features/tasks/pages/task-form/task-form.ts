import { Component, inject, OnInit } from '@angular/core';
import {FormControl, ReactiveFormsModule, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Priority } from '../../../../model/priority';
import { Status } from '../../../../model/status';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateTaskRequest } from '../../../../model/update-task-request';
import { TaskStore } from '../../../../store/task-store';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm implements OnInit {
    
    // inject TaskStore and Router Dependencies to use API
    private readonly taskStore = inject(TaskStore);
    
    private readonly router = inject(Router);
  
    // Import the Priority and status enum and save them in a variable (This is entirely over-engineered for the scope)
    protected readonly priorities = Object.values(Priority);

    protected readonly statuses = Object.values(Status);

    // This is for the editing feature, the route object has methods (see below)
    private readonly route = inject(ActivatedRoute);

    // Declared property for later use storing the extracted task.id from the url
    private taskId: string | null = null;
   
  
  // This is modern style FormGroup, but there's loads of ways to do it, this is type safe and uses validators

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

        }),

        status: new FormControl(Status.OPEN, {
            nonNullable: true

        })
    });

    ngOnInit(): void {
        // My god this was hard work. To extract the task ID and store it in a variable, we use the ActivatedRoute
        // snapshot.paramMap.get(), as it is safer than directly accessing the property params in case of missing data 
        // (getters again eh?), we declared the taskId earlier
        
       

        this.taskId = this.route.snapshot.paramMap.get('id');

        // Ok so "this.form.patchValue" is how we prefill the form from the task, using subscribe(task=>...) pattern again
        //then redefining the object fields using the task.properties.
    if (this.taskId) {
        this.taskStore.getTask(this.taskId)
        .subscribe(task => {
            this.form.patchValue({
                title: task.title,
                description: task.description,
                dueDate: task.dueDate,
                priority: task.priority
            });

        });
    }
        


}

    // This gets the JSON data and saves it in the request variable, then pass it to the appropriate taskService instance method
    // after calling the method, you subscribe to the observable
    // This means that when the response is received, it navigates to the /tasks screen. The () => shorthand doesn't handle errors nicely though
    save() {
        if(this.taskId) {
            const request: UpdateTaskRequest = this.form.getRawValue();

            this.taskStore.updateTask(this.taskId, request)
            .subscribe(() => this.router.navigate(['/tasks']))
        }
        
        else {
        
        const request = this.form.getRawValue();
        
        this.taskStore.createTask(request)
        .subscribe(() => this.router.navigate(['/tasks']))
        }
    }

   
  
}
