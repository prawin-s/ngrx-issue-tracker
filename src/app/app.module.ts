import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { IssuesComponent } from './components/issues/issues.component';
import { NewIssueComponent } from './components/new-issue/new-issue.component';
import { reducers, metaReducers } from './store';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';
import { EffectsModule } from '@ngrx/effects';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DatabaseService } from './services/database.service';
import { IssueEffects } from './store/issue/issue.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    NewIssueComponent,
    IssueListComponent,
    IssueDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([IssueEffects]),
    InMemoryWebApiModule.forRoot(DatabaseService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
