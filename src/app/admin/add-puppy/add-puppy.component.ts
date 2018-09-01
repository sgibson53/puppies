import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-add-puppy",
  templateUrl: "./add-puppy.component.html",
  styleUrls: ["./add-puppy.component.scss"]
})
export class AddPuppyComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  selectedFile: File;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      name: ["", Validators.required],
      birthday: ["", Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      color: ["", Validators.required],
      image: ["", Validators.required]
    });
  }

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
  }

  onSubmitPuppyForm() {}
}
