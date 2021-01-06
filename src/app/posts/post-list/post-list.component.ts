import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "../post.model";
import { PostsService } from "../posts.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'First Post', content: 'First Content'},
  //   {title: 'Second Post', content: 'Second Content'},
  //   {title: 'Third Post', content: 'Third Content'}
  // ]

  posts: Post[] = []
  private postsSub: Subscription

  constructor(private postsService: PostsService) {

  }

  ngOnInit() {
    this.postsService.getPosts();
    this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      })
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
