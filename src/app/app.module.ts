import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionComponent } from './feature/question/question.component';
import { AnswerComponent } from './feature/question/answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
