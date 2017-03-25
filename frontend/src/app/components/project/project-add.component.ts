/**
 * Created by duncan on 23/03/2017.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }
    from '@angular/forms';


import { Project, ProjectService }  from './project.service';


@Component({
    moduleId: module.id,
    templateUrl: 'project-add.component.html'
})

export class ProjectAddComponent implements OnInit {
    projects: Project[];

    form: FormGroup;

    projectId = new FormControl("", Validators.required);
    projectName = new FormControl("", Validators.required);
    projectDescription = new FormControl("", Validators.required);
    projectImpactDomain = new FormControl("", Validators.required);

    constructor(fb: FormBuilder) {

        this.form = fb.group({
            'projectId': [this.projectId, [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(6)
            ]],
            'projectName': [this.projectName, [
                Validators.required

            ]],
            'projectDescription': [this.projectDescription, [
                Validators.required,
                Validators.maxLength(250)
            ]],
            'projectImpactDomain': [this.projectImpactDomain, [
                Validators.required
            ]],
            projectDomain: fb.array([false, false, false])
        })
    }


    /**
     * Initialise the view
     */
    ngOnInit(): void {

    }

    step2: any = {
        showNext: true,
        showPrev: true
    };

    step3: any = {
        showSecret: false
    };

    data: any = {
        projectId: null
    };

    isCompleted: boolean = false;

    onStep1Next(event) {
        console.log('Step1 - Next');
    }

    onStep2Next(event) {
        console.log('Step2 - Next');
    }

    onStep3Next(event) {
        console.log('Step3 - Next');
    }

    onComplete(event) {
        this.isCompleted = true;
    }

    onStepChanged(step) {
        console.log('Changed to ' + step.title);
    }
}