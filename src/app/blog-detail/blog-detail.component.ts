import {Component, OnInit} from '@angular/core';
import {IPost} from '../post';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../post.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  post: IPost;

  constructor(
    private router: ActivatedRoute,
    private postService: PostService
  ) {
  }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    // @ts-ignore
    this.postService.getPostById().subscribe(
      next => (this.post = next),
      error => {
        console.error(error);
        this.post = null;
      }
    );
  }

}
