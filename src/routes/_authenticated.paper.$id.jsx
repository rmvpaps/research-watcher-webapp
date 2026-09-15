
import { createFileRoute } from '@tanstack/react-router'
import configData from "../config.json";
import { getFullArticle, getKeywords } from '../api/article';
import ArticleChat from '@/components/articlechat';
import {
  useQuery,
  useInfiniteQuery
} from '@tanstack/react-query'

function Paper() {
  const { id } = Route.useParams()
  const { isPending:isPending, isError:isError, data:article, error:error }  = useQuery({ queryKey: ['article',id], queryFn: () =>  getFullArticle(id)} )
  const { isPending:isKwPending, isError:isKwError, data:keywords, error:kwerror }  = useQuery({ queryKey: ['keywords',id], queryFn: () =>  getKeywords(id)} )



  const downloadPDF = async() => {
    const url = process.env.ARXIV_PDF_BASE||"https://arxiv.org/pdf/"
      try {
        // Ensure the URL starts with http:// or https://
        const safeUrl = /^https?:\/\//i.test(url) ? `${url}${article.arxiv_id}` : `https://${url}${article.arxiv_id}`;

        // Open in a new tab with security features
        window.open(safeUrl, "_blank", "noopener,noreferrer");
      } catch (error) {
        console.error("Invalid URL:", error);
      }
  }
  return (
    <>
      <div className='bg-white mx-auto w-full max-w-6xl flex-grow flex items-center justify-center p-margin-mobile md:p-gutter shadow-2xl'>
        <main className="flex-1 pt-16 md:pt-0 p-margin-mobile md:p-gutter max-w-container-max mx-auto w-full flex flex-col md:flex-row gap-stack-gap">

          <div className="w-full md:w-2/3 flex flex-col gap-6">
          {!isPending && !isError &&
            <div className="bg-surface-container-lowest border border-outline-blue rounded-xl p-6 md:p-8 hover:border-secondary hover:shadow-[0_4px_4px_rgba(0,94,184,0.05)] transition-all duration-300">

              
              <div className="flex items-center gap-2 mb-4">

                <span className="text-on-surface-variant font-meta-sm text-meta-sm">Published: {article?.date} </span>
              </div>
              <h1 className="font-headline-md text-headline-md text-tertiary mb-4">
                { article.title }
              </h1>
              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">person</span>
                  <span className="font-body-md text-body-md">{article.author }</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">apartment</span>
                  <span className="font-body-md text-body-md">{article.category}</span>
                </div>
              </div>
              <div className="prose max-w-none">
                <h3 className="font-headline-sm text-headline-sm text-tertiary mb-2">Abstract</h3>
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-6">
                  {article.abstract}
                </p>
              </div>
              {!isKwPending && !isKwError &&
              <div className="flex flex-wrap gap-2 mt-4">
                {keywords?.map((keyword) => (
                  <span className="bg-[#E1E9F0] text-[#4A6B8A] px-3 py-1 rounded-full font-meta-sm text-meta-sm">{keyword}</span>
                ))}
              </div>
              }
              {isKwPending && <div>Loading keywords...</div>} 
              {isKwError && <div>Could not fetch keywords for this articles...{kwerror}</div>} 
              <div className="mt-8 pt-6 border-t border-outline-blue flex gap-4">
                <button className="bg-primary text-on-primary px-6 py-2 rounded font-body-md text-body-md font-semibold hover:bg-primary-container transition-colors flex items-center gap-2" onClick={downloadPDF}>
                  <span className="material-symbols-outlined text-[20px]">download</span>
                  View PDF
                </button>
                <button className="border border-outline-blue text-secondary px-6 py-2 rounded font-body-md text-body-md font-semibold hover:border-secondary transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">bookmark</span>
                  Save to Library
                </button>
              </div>
            </div>}
          </div>
          <ArticleChat articleItem={article}/>
     
        </main>
      </div>
    </>
  )
}

export const Route = createFileRoute('/_authenticated/paper/$id')({
  component: Paper,
})



