import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-organisation-type-datails',
  templateUrl: './organisation-type-datails.component.html',
  styleUrls: ['./organisation-type-datails.component.scss']
})
export class OrganisationTypeDatailsComponent implements OnInit {

 @Input()
  organizationTypeDetailForm!: FormGroup;


    @Input()
  submitted!: boolean;

    @Output()
    orgInfo = new EventEmitter<Object>();


    file: File[] = [];

    photoName: any;


    constructor() {
    }

    ngOnInit(): void {
        this.organizationTypeDetailForm.addControl('org_name', new FormControl('', Validators.required));
        this.organizationTypeDetailForm.addControl('org_registration_number', new FormControl('', Validators.required));
        this.organizationTypeDetailForm.addControl('org_address', new FormControl('', Validators.required));
        this.organizationTypeDetailForm.addControl('org_city', new FormControl('', Validators.required));
        this.organizationTypeDetailForm.addControl('org_state', new FormControl('', Validators.required));
        this.organizationTypeDetailForm.addControl('org_zip_code', new FormControl('', Validators.required));
        this.organizationTypeDetailForm.addControl('org_description', new FormControl('', Validators.required));
        this.organizationTypeDetailForm.addControl('photo', new FormControl('', Validators.required));
    }

    get fd() {
        return this.organizationTypeDetailForm.controls;
    }

    onUploadPhoto(event: { target: { files: string | any[]; }; }) {
        if (event.target.files.length > 0) {
            this.photoName = event.target.files[0].name;
            this.orgInfo.emit({file: event.target.files[0]});
        }
    }

}