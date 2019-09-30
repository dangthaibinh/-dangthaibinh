import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { QuizComponent } from './quiz/quiz.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { GopYComponent } from './gop-y/gop-y.component';
import { HoidapComponent } from './hoidap/hoidap.component';

@NgModule({
  declarations: [
    AppComponent,
    TrangChuComponent,
    QuizComponent,
    GioithieuComponent,
    LienheComponent,
    GopYComponent,
    HoidapComponent
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
