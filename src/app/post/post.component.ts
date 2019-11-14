import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Post } from "../post";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent {
  @Input()
  post: Post;
  @Output() deleted = new EventEmitter<void>();
  deletePost() {
    this.deleted.emit();
  }
}
