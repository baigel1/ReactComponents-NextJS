import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnswersHeadlessProvider } from "@yext/answers-headless-react";
import { answersSandboxEndpoints } from "../answersConfig";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnswersHeadlessProvider
      experienceKey="test-experience"
      apiKey="9641a03ad3de221fb9c566b0c9148351"
      locale="en"
      endpoints={answersSandboxEndpoints}
    >
      <Component {...pageProps} />
    </AnswersHeadlessProvider>
  )
}

export default MyApp
