import { useState } from 'react'
import Login from '../components/login'
import Stats from '../components/stats'
import PropTypes from 'prop-types';
import { createFileRoute } from '@tanstack/react-router'
import configData from "../config.json";


function Dashboard() {
  const { teamName, desc, githublink } = configData
  const stats = { monthCt: 800, dayCt: 98, totalRelCt: 46, totalCt: 3400 }
  return (
    <>
    <div className='bg-white mx-auto w-full max-w-6xl flex-grow flex items-center justify-center p-margin-mobile md:p-gutter shadow-2xl'>
    
      <main className="flex-1 ml-0 md:ml-64 p-margin-mobile md:p-gutter max-w-[900px]">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-stack-gap">
          <div className="bg-surface-container-lowest border border-outline-blue rounded-xl p-4 flex flex-col justify-center">
            <span className="font-meta-sm text-meta-sm text-on-surface-variant uppercase tracking-wider mb-1">New This Month</span>
            <span className="font-display-lg text-display-lg text-primary">1,248</span>
          </div>
          <div className="bg-surface-container-lowest border border-outline-blue rounded-xl p-4 flex flex-col justify-center">
            <span className="font-meta-sm text-meta-sm text-on-surface-variant uppercase tracking-wider mb-1">New Today</span>
            <span className="font-display-lg text-display-lg text-primary">42</span>
          </div>
          <div className="bg-surface-container-lowest border border-outline-blue rounded-xl p-4 flex flex-col justify-center">
            <span className="font-meta-sm text-meta-sm text-on-surface-variant uppercase tracking-wider mb-1">Highly Relevant</span>
            <span className="font-display-lg text-display-lg text-accent-teal">18</span>
          </div>
          <div className="bg-surface-container-lowest border border-outline-blue rounded-xl p-4 flex flex-col justify-center">
            <span className="font-meta-sm text-meta-sm text-on-surface-variant uppercase tracking-wider mb-1">Stored Papers</span>
            <span className="font-display-lg text-display-lg text-tertiary">3,492</span>
          </div>
        </div>
        <div className="flex justify-between items-end mb-6 border-b border-outline-blue pb-4">
          <h1 className="font-headline-md text-headline-md text-on-surface">Recent High-Relevance Papers</h1>
          <button className="font-meta-sm text-meta-sm text-primary flex items-center gap-1 hover:underline">
            View all <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        <div className="flex flex-col gap-stack-gap">

          <article className="paper-card bg-surface-container-lowest border border-outline-blue rounded-xl p-6 relative">
            <div className="absolute top-6 right-6 flex items-center gap-2">
              <span className="bg-secondary-container text-on-secondary-container font-label-caps text-label-caps px-2 py-1 rounded flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">star</span> Score: 98%
              </span>
              <button className="text-secondary hover:text-primary transition-colors">
                <span className="material-symbols-outlined">bookmark_add</span>
              </button>
            </div>
            <a href="/paper"><h2 className="font-headline-sm text-headline-sm text-tertiary mb-2 pr-24">Attention Is All You Need: A Retrospective</h2></a>
            <p className="font-meta-sm text-meta-sm text-on-surface-variant mb-4">A. Vaswani, N. Shazeer, et al. • Published: 2 days ago • arXiv:cs.CL</p>
            <p className="font-body-md text-body-md text-on-surface mb-6 line-clamp-3">
              We review the impact of the Transformer architecture five years after its initial proposition. The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-auto">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E1E9F0] text-[#4A6B8A] font-meta-sm text-meta-sm">Transformers</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E1E9F0] text-[#4A6B8A] font-meta-sm text-meta-sm">Attention Mechanism</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E1E9F0] text-[#4A6B8A] font-meta-sm text-meta-sm">Deep Learning</span>
              <button className="font-meta-sm text-meta-sm text-primary hover:underline ml-2">+2 more keywords</button>
            </div>
          </article>

          <article className="paper-card bg-surface-container-lowest border border-outline-blue rounded-xl p-6 relative">
            <div className="absolute top-6 right-6 flex items-center gap-2">
              <span className="bg-secondary-container text-on-secondary-container font-label-caps text-label-caps px-2 py-1 rounded flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">star</span> Score: 94%
              </span>
              <button className="text-secondary hover:text-primary transition-colors">
                <span className="material-symbols-outlined">bookmark_add</span>
              </button>
            </div>
            <h2 className="font-headline-sm text-headline-sm text-tertiary mb-2 pr-24">Scaling Laws for Neural Language Models</h2>
            <p className="font-meta-sm text-meta-sm text-on-surface-variant mb-4">J. Kaplan, S. McCandlish, et al. • Published: 5 days ago • arXiv:cs.LG</p>
            <p className="font-body-md text-body-md text-on-surface mb-6 line-clamp-3">
              We study empirical scaling laws for language model performance on the cross-entropy loss. The loss scales as a power-law with model size, dataset size, and the amount of compute used for training, with some trends spanning more than seven orders of magnitude. Other architectural details such as network width or depth have minimal effects within a wide range.
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-auto">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E1E9F0] text-[#4A6B8A] font-meta-sm text-meta-sm">Scaling Laws</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E1E9F0] text-[#4A6B8A] font-meta-sm text-meta-sm">LLMs</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E1E9F0] text-[#4A6B8A] font-meta-sm text-meta-sm">Optimization</span>
            </div>
          </article>

          <article className="paper-card bg-surface-container-lowest border border-outline-blue rounded-xl p-6 relative">
            <div className="absolute top-6 right-6 flex items-center gap-2">
              <span className="bg-secondary-container text-on-secondary-container font-label-caps text-label-caps px-2 py-1 rounded flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">star</span> Score: 89%
              </span>
              <button className="text-secondary hover:text-primary transition-colors">
                <span className="material-symbols-outlined">bookmark_add</span>
              </button>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-accent-teal text-[20px]" title="Verified Replication">verified</span>
              <h2 className="font-headline-sm text-headline-sm text-tertiary pr-24">Efficient Sub-quadratic Attention Approximations</h2>
            </div>
            <p className="font-meta-sm text-meta-sm text-on-surface-variant mb-4">M. Chen, Y. Li • Published: 1 week ago • Journal of Machine Learning</p>
            <p className="font-body-md text-body-md text-on-surface mb-6 line-clamp-3">
              Standard attention mechanisms suffer from quadratic time and memory complexity with respect to sequence length. We propose a novel approximation technique utilizing random feature projection that reduces complexity to O(N log N) while maintaining 99% of downstream task performance across standardized benchmarks.
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-auto">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E1E9F0] text-[#4A6B8A] font-meta-sm text-meta-sm">Efficiency</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E1E9F0] text-[#4A6B8A] font-meta-sm text-meta-sm">Attention Mechanism</span>
              <button className="font-meta-sm text-meta-sm text-primary hover:underline ml-2">+4 more keywords</button>
            </div>
          </article>
        </div>
        <div className="mt-8 flex justify-center pb-12">
          <button className="bg-surface border border-outline-blue hover:bg-surface-variant text-primary font-body-md py-2 px-6 rounded-lg transition-colors">
            Load More Papers
          </button>
        </div>
      </main>
      </div>
    </>
  )
}

export const Route = createFileRoute('/dashboard')({
  component: Dashboard,
})



