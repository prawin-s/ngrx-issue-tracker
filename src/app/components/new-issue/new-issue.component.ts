import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Issue } from 'src/app/models/issue';

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.scss']
})
export class NewIssueComponent implements OnInit {
  form: FormGroup;
  @Output() submitNew = new EventEmitter<Issue>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        title: ['', Validators.required],
        description: ['', Validators.required],
        priority: ['low', Validators.required]

      }
    );
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const issue = this.form.value;
    this.submitNew.emit(issue);
  }

}
