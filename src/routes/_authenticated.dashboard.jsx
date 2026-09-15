
import { createFileRoute,redirect } from '@tanstack/react-router'
import { getStats, getRecentArticles } from '@/api/article';
import {
  useQuery,
  useInfiniteQuery
} from '@tanstack/react-query'
import Stats from '@/components/stats'
import ArticleStub from '@/components/articlestub'
import { useState,Fragment } from 'react';
import React from 'react';
function Dashboard() {

  const { isPending:isPending, isError:isError, data:statdata, error:staterror }  = useQuery({ queryKey: ['stats'], queryFn: getStats })

  const stats = {...statdata}

  const [ArtState,setArtSTate ] = useState('indexed')
  const [page, setPage] = useState(1);
  // const { 
  //   data: Artdata,      // Renamed from 'data'
  //   isPending: isArtPending, 
  //   error: Arterror 
  // }  = useQuery({ queryKey: ['Articles',ArtState,page], queryFn: () => getRecentArticles(ArtState,page) })
  const sampleArticles = [
    {
      title:"DUMMY- Attention Is All You Need: A Retrospective",
      author:"A. Vaswani, N. Shazeer, et al.", 
      days:"2 days ago", 
      category:"arXiv:cs.CL", 
      score:0.98,
      abstract:"We review the impact of the Transformer architecture five years after its initial proposition. The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely."
    },
    {
      title:"DUMMYScaling Laws for Neural Language Models",
      author:"J. Kaplan, S. McCandlish, et al.", 
      days:"5 days ago", 
      category:"arXiv:cs.CL", 
      score:0.94,
      abstract:"Standard attention mechanisms suffer from quadratic time and memory complexity with respect to sequence length. We propose a novel approximation technique utilizing random feature projection that reduces complexity to O(N log N) while maintaining 99% of downstream task performance across standardized benchmarks."
    },
    {
      title:"DUMMYEfficient Sub-quadratic Attention Approximations",
      author:"M. Chen, Y. Li", 
      days:"7 days ago", 
      category:"arXiv:cs.CL", 
      score:0.98,
      abstract:"We review the impact of the Transformer architecture five years after its initial proposition. The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely."
    },

  ]


  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery({
    queryKey: ['articles',ArtState],
    queryFn: ({ pageParam = 1 }) =>getRecentArticles(ArtState, pageParam),
    initialPageParam: 1,
    getPreviousPageParam: (firstPage) => firstPage.previousId,
    getNextPageParam: (lastPage, allPages) => {
          const currentLength = lastPage?.length ?? 0;
    
          // If we got a full page, there's likely a next page. If less, we stopped.
          return currentLength === 10 ? allPages.length : undefined;
    },
  })

  return (
    <>


    <div className='bg-white mx-auto w-full max-w-6xl flex-grow flex items-center justify-center p-margin-mobile md:p-gutter shadow-2xl'>
    
    <div className="w-64 text-white hidden md:block self-start p-4 rounded-lg">
      <div class="px-gutter mb-8"><div class="flex flex-col gap-4">
        <h3 class="font-label-caps text-label-caps text-on-surface-variant uppercase flex items-center gap-2"><span class="material-symbols-outlined text-[16px]">filter_list</span>Article State</h3>
        <div class="flex flex-col gap-2">
          <select class="w-full bg-surface-container-lowest border border-outline-blue text-on-surface text-body-md rounded-lg p-2" onChange={(e) => setArtSTate(e.target.value)}>
            <option value="indexed">Indexed</option>
            <option value="rejected">Rejected</option>
            <option value="unknown">Unknown</option>
          </select>
          </div>
      </div>
    </div>



    </div>
        
      <main className="flex-1 ml-0 md:ml p-margin-mobile md:p-gutter max-w-[900px]">

        {!isPending &&!isError && <Stats stat={stats}/>}
        <div className="flex justify-between items-end mb-6 border-b border-outline-blue pb-4">
          <h1 className="font-headline-md text-headline-md text-on-surface">Recent Abstracts</h1>
          
        </div>
         {status === 'pending' && <div>Loading...</div>} 
         {error && <div>Could not fetch recent articles...{error}</div>} 
        {status !== 'pending'&& status !== 'error' && (
        <div>
        
        {data?.pages?.map((group, i) => (
        <React.Fragment key={i}>
          {group?.map((articlestub) => (
            <ArticleStub articleItem={articlestub} key={articlestub.title}></ArticleStub>
          ))}
        </React.Fragment>
        ))}
        {/* <div className="flex flex-col gap-stack-gap">
         {Artdata.map(articlestub => (

          <ArticleStub articleItem={articlestub} key={articlestub.title}></ArticleStub>
         ))}
          
        </div> */}
        
        <div className="mt-8 flex justify-center pb-12">
          <button className="bg-surface border border-outline-blue hover:bg-surface-variant text-primary font-body-md py-2 px-6 rounded-lg transition-colors" 
          onClick={() => fetchNextPage()}
           disabled={!hasNextPage || isFetching}>
            {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
          </button>
        </div> 
        </div>)}

      </main>
      </div>
    </>
  )
}

export const Route = createFileRoute('/_authenticated/dashboard')({
  component: Dashboard,

})



