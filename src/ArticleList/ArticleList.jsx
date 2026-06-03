import React from 'react';

import { ArticleStub } from '../ArticleStub/ArticleStub';
import './ArticleList.css';
import PropTypes from "prop-types";


export const ArticleList = ({
                                items = [],
                                backgroundColor = null,
                                ...props
                            }) => {

    return (
        <div>
            <h2>Results</h2>
            <div className="article-grid">
                {items.map(article => (
                    <div className="article-item">
                        <ArticleStub key={article.id}  backgroundColor={backgroundColor} size="medium" article={article} />
                    </div>
                ))}
            </div>
        </div>
    );
};

ArticleList.propTypes = {
    /** What background color to use */
    backgroundColor: PropTypes.string,
    /** Button contents */
    items: PropTypes.any.isRequired,

};