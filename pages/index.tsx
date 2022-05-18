import type { NextPage } from "next";
import SearchStuff from "./Components/SearchStuff";
import React from "react";
import ReactDOM from "react-dom";
import { AnswersHeadlessProvider } from "@yext/answers-headless-react";
import { answersSandboxEndpoints } from "../answersConfig";

const Home: NextPage = () => {
  return (
    <AnswersHeadlessProvider
      experienceKey="{EXPERIENCE_KEY}"
      apiKey="{API_KEY}"
      locale="en"
      endpoints={answersSandboxEndpoints}
    >
      <SearchStuff />
    </AnswersHeadlessProvider>
  );
};

export default Home;
