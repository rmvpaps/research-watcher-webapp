import { useState } from 'react'
import Login from '../components/login'
import Stats from '../components/stats'
import PropTypes from 'prop-types';
import { createFileRoute } from '@tanstack/react-router'
import configData from "../config.json";


function Landing() {
  const {teamName, desc, githublink} = configData
  const stats = {monthCt:800, dayCt:98, totalRelCt: 46, totalCt: 3400}
  return (
    <>
    <div className='bg-white mx-auto w-full max-w-6xl flex-grow flex items-center justify-center p-margin-mobile md:p-gutter shadow-2xl'>
      <main className="flex-grow flex items-center justify-center p-margin-mobile md:p-gutter">
        <div className="w-full max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center min-h-[calc(100vh-64px-32px)]">

          <div className="col-span-1 md:col-span-7 flex flex-col gap-stack-gap">
            <div className="flex flex-col gap-4">
              <h1 className="font-display-lg text-display-lg text-primary md:font-display-lg md:text-display-lg text-headline-lg-mobile font-headline-lg-mobile">{teamName} - ResearchWatcher</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Streamline your literature review with automated parsing, intelligent indexing, and semantic search tailored for academic rigour. Keep your scholarly focus sharp.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                {desc}
              </p >
              <div className="pt-4">
                <a className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-outline-blue rounded-lg text-secondary font-headline-sm text-headline-sm hover:border-secondary hover:shadow-[0_4px_8px_rgba(0,94,184,0.05)] transition-all" href={githublink}>
                  <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path></svg>
                  View on GitHub
                </a>
              </div>
            </div>
          <Stats stat={stats}/>
          </div>
          
          
          <Login/>

        </div>
      </main>
      </div>
    </>
  )
}

export const Route = createFileRoute('/search')({
  component: Landing,
})



