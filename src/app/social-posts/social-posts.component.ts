import { Component, OnInit } from "@angular/core";
import { Post } from "../post";

@Component({
  selector: "app-social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent {
  posts: Post[] = [
    { title: "Grand Circus", thought: "gc is cool" },
    { title: "Ritual", thought: "7greens is always late" },
    { title: "Scott", thought: "who is Scott?" }
  ];
  onSubmit(newPost: Post) {
    this.posts.unshift(newPost);
  }
  onDelete(i) {
    this.posts.splice(i, 1);
  }
}
