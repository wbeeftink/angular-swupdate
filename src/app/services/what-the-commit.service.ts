import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface CommitMessage {
  commit_message: string;
  hash: string;
  permalink: string;
}

@Injectable({
  providedIn: "root",
})
export class WhatTheCommitService {
  constructor(private httpClient: HttpClient) {}

  getCommitMessage(): Observable<CommitMessage> {
    return this.httpClient.get<CommitMessage>(
      "https://whatthecommit.com/index.json",
    );
  }
}
