import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from '../components/comment/comment.component';
import { PostInfoComponent } from '../components/post-info/post-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CommentComponent,
    PostInfoComponent
  ],
  exports: [
    CommentComponent,
    PostInfoComponent
  ]
})
export class ComponentsModule { }
