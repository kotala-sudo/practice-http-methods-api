import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: { title: string }[] = [];

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<{ title: string }[]>(this.url).subscribe((response) => {
      // console.log(response);
      this.posts = response;
    });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';
    this.http
      .post<{ title: string }[]>(this.url, JSON.stringify(input.value))
      .subscribe((response) => {
        this.posts.splice(0, 0, post);
        console.log(response);
      });
  }

  updatePost(post) {
    this.http
      .patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .subscribe((response) => {
        console.log(response);
      });
    // this.http.put(this.url, JSON.stringify(post));
  }
}
