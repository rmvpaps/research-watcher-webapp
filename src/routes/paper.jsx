import { useState } from 'react'
import Login from '../components/login'
import Stats from '../components/stats'
import PropTypes from 'prop-types';
import { createFileRoute } from '@tanstack/react-router'
import configData from "../config.json";


function Paper() {
  const { teamName, desc, githublink } = configData
  const stats = { monthCt: 800, dayCt: 98, totalRelCt: 46, totalCt: 3400 }
  return (
    <>
      <div className='bg-white mx-auto w-full max-w-6xl flex-grow flex items-center justify-center p-margin-mobile md:p-gutter shadow-2xl'>
        <main class="flex-1 md:ml-64 pt-16 md:pt-0 p-margin-mobile md:p-gutter max-w-container-max mx-auto w-full flex flex-col md:flex-row gap-stack-gap">

          <div class="w-full md:w-2/3 flex flex-col gap-6">
            <div class="bg-surface-container-lowest border border-outline-blue rounded-xl p-6 md:p-8 hover:border-secondary hover:shadow-[0_4px_4px_rgba(0,94,184,0.05)] transition-all duration-300">
              <div class="flex items-center gap-2 mb-4">

                <span class="text-on-surface-variant font-meta-sm text-meta-sm">Published: Oct 2023</span>
              </div>
              <h1 class="font-headline-md text-headline-md text-tertiary mb-4">
                Attention Is All You Need: A Retrospective Analysis of Transformer Architecture
              </h1>
              <div class="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                <div class="flex items-center gap-2 text-on-surface-variant">
                  <span class="material-symbols-outlined text-[18px]">person</span>
                  <span class="font-body-md text-body-md">Ashish Vaswani, Noam Shazeer, Niki Parmar</span>
                </div>
                <div class="flex items-center gap-2 text-on-surface-variant">
                  <span class="material-symbols-outlined text-[18px]">apartment</span>
                  <span class="font-body-md text-body-md">Google Brain</span>
                </div>
              </div>
              <div class="prose max-w-none">
                <h3 class="font-headline-sm text-headline-sm text-tertiary mb-2">Abstract</h3>
                <p class="font-body-lg text-body-lg text-on-surface leading-relaxed mb-6">
                  The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train.
                </p>
              </div>
              <div class="flex flex-wrap gap-2 mt-4">
                <span class="bg-[#E1E9F0] text-[#4A6B8A] px-3 py-1 rounded-full font-meta-sm text-meta-sm">Machine Learning</span>
                <span class="bg-[#E1E9F0] text-[#4A6B8A] px-3 py-1 rounded-full font-meta-sm text-meta-sm">NLP</span>
                <span class="bg-[#E1E9F0] text-[#4A6B8A] px-3 py-1 rounded-full font-meta-sm text-meta-sm">Transformers</span>
                <span class="bg-[#E1E9F0] text-[#4A6B8A] px-3 py-1 rounded-full font-meta-sm text-meta-sm">Neural Networks</span>
              </div>
              <div class="mt-8 pt-6 border-t border-outline-blue flex gap-4">
                <button class="bg-primary text-on-primary px-6 py-2 rounded font-body-md text-body-md font-semibold hover:bg-primary-container transition-colors flex items-center gap-2">
                  <span class="material-symbols-outlined text-[20px]">download</span>
                  Download PDF
                </button>
                <button class="border border-outline-blue text-secondary px-6 py-2 rounded font-body-md text-body-md font-semibold hover:border-secondary transition-colors flex items-center gap-2">
                  <span class="material-symbols-outlined text-[20px]">bookmark</span>
                  Save to Library
                </button>
              </div>
            </div>
          </div>

          <div class="w-full md:w-1/3 flex flex-col">
            <div class="bg-surface-container-lowest border border-outline-blue rounded-xl flex flex-col h-[600px] sticky top-stack-gap shadow-sm">
              <div class="p-4 border-b border-outline-blue bg-surface-bright rounded-t-xl flex items-center gap-3">
                <span class="material-symbols-outlined text-primary">smart_toy</span>
                <div>
                  <h3 class="font-headline-sm text-headline-sm text-tertiary">Ask about this paper</h3>
                  <p class="font-meta-sm text-meta-sm text-on-surface-variant">AI Research Assistant</p>
                </div>
              </div>
              <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-surface-container-low">

                <div class="flex gap-3">
                  <div class="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                    <span class="material-symbols-outlined text-on-secondary-container text-[18px]">smart_toy</span>
                  </div>
                  <div class="bg-surface-container-lowest border border-outline-blue p-3 rounded-xl rounded-tl-none max-w-[85%]">
                    <p class="font-body-md text-body-md text-on-surface">Hello! I've read "Attention Is All You Need". What would you like to know about it? I can summarize sections, explain the architecture, or discuss its implications.</p>
                  </div>
                </div>

                <div class="flex gap-3 flex-row-reverse">
                  <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span class="material-symbols-outlined text-on-primary text-[18px]">person</span>
                  </div>
                  <div class="bg-primary-fixed p-3 rounded-xl rounded-tr-none max-w-[85%]">
                    <p class="font-body-md text-body-md text-on-primary-fixed">Can you explain how the multi-head attention mechanism works in this model?</p>
                  </div>
                </div>

                <div class="flex gap-3">
                  <div class="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                    <span class="material-symbols-outlined text-on-secondary-container text-[18px]">smart_toy</span>
                  </div>
                  <div class="bg-surface-container-lowest border border-outline-blue p-3 rounded-xl rounded-tl-none max-w-[85%]">
                    <p class="font-body-md text-body-md text-on-surface mb-2">Certainly. Multi-head attention allows the model to jointly attend to information from different representation subspaces at different positions.</p>
                    <p class="font-body-md text-body-md text-on-surface">Instead of performing a single attention function, the Transformer linearly projects the queries, keys, and values <em>h</em> times (where h=8 in the base model) with different, learned linear projections.</p>
                  </div>
                </div>
              </div>
              <div class="p-4 border-t border-outline-blue bg-surface-bright rounded-b-xl">
                <div class="flex gap-2">
                  <input class="flex-1 bg-surface-container-lowest border border-outline-blue rounded px-3 py-2 font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Ask a question..." type="text" />
                  <button class="bg-primary text-on-primary p-2 rounded flex items-center justify-center hover:bg-primary-container transition-colors">
                    <span class="material-symbols-outlined">send</span>
                  </button>
                </div>
                <div class="mt-2 flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
                  <button class="shrink-0 bg-[#E1E9F0] text-[#4A6B8A] px-3 py-1 rounded-full font-meta-sm text-meta-sm hover:bg-outline-variant transition-colors whitespace-nowrap">Summarize findings</button>
                  <button class="shrink-0 bg-[#E1E9F0] text-[#4A6B8A] px-3 py-1 rounded-full font-meta-sm text-meta-sm hover:bg-outline-variant transition-colors whitespace-nowrap">Explain methodology</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export const Route = createFileRoute('/paper')({
  component: Paper,
})



