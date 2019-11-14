import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Post } from "../post";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  formHidden = true;

  newPost: Post = {
    title: "",
    thought: ""
  };

  @Output() submitted = new EventEmitter<Post>();

  submitPost() {
    this.submitted.emit(this.newPost);
    //clear form
    this.newPost = {
      title: "",
      thought: ""
    };
  }
  toggleForm() {
    this.formHidden = !this.formHidden;
  }
  constructor() {}

  ngOnInit() {}
}
