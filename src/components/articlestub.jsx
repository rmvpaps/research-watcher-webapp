import { useState } from 'react'
import PropTypes from 'prop-types';
import propTypes from 'prop-types';


function ArticleStub({ articleItem }) {
    
    return (
        <>
            
          <article className="paper-card bg-surface-container-lowest border border-outline-blue rounded-xl p-6 relative">
            <div className="absolute top-6 right-6 flex items-center gap-2">
              <span className="bg-secondary-container text-on-secondary-container font-label-caps text-label-caps px-2 py-1 rounded flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">star</span> Score: {(articleItem.score *100).toFixed(0)}%
              </span>

            </div>
            <a href={`/paper/${articleItem.id}`}><h2 className="font-headline-sm text-headline-sm text-tertiary mb-2 pr-24">{articleItem.title}</h2></a>
            <p className="font-meta-sm text-meta-sm text-on-surface-variant mb-4">{articleItem?.author} • Published: {articleItem?.days} • {articleItem.category}</p>
            <p className="font-body-md text-body-md text-on-surface mb-6 line-clamp-3">
              {articleItem.abstract}
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-auto">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E1E9F0] text-[#4A6B8A] font-meta-sm text-meta-sm">Transformers</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E1E9F0] text-[#4A6B8A] font-meta-sm text-meta-sm">Attention Mechanism</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E1E9F0] text-[#4A6B8A] font-meta-sm text-meta-sm">Deep Learning</span>
              <button className="font-meta-sm text-meta-sm text-primary hover:underline ml-2">+2 more keywords</button>
            </div>
          </article>


        </>
    )
}


ArticleStub.propTypes = {
  articleItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author : PropTypes.string,
    score : PropTypes.number.isRequired,
    days : PropTypes.string,
    category : PropTypes.string,
    abstract : propTypes.string.isRequired

  }).isRequired,
};
export default ArticleStub
