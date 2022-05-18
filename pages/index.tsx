import type { NextPage } from "next";
import SearchStuff from "../Components/SearchStuff";
import React from "react";
import ReactDOM from "react-dom";
import { AnswersHeadlessProvider } from "@yext/answers-headless-react";
import { answersSandboxEndpoints } from "../answersConfig";

const Home: NextPage = () => {
  return (
    <AnswersHeadlessProvider
      experienceKey="test-experience"
      apiKey="9641a03ad3de221fb9c566b0c9148351"
      locale="en"
      endpoints={answersSandboxEndpoints}
    >
      <SearchStuff />
    </AnswersHeadlessProvider>
  );
};

export default Home;
