import PropTypes from 'prop-types';

import './ArticleStub.css';
import { Button } from '../button/Button';


/** Primary UI component for user interaction */
export const ArticleStub = ({
                           backgroundColor = null,
                           size = 'medium',
                           article = {},
                           ...props
                       }) => {
    return (
        <article>
            <div className="article-box" style={backgroundColor?{ "borderColor":backgroundColor }:undefined}>
                <div className="title" style={backgroundColor?{ "color":backgroundColor }:undefined}>
                    <div className="article-header">
                        <h3><b>Title:  </b>{article.title}</h3>
                    </div>
                    <div className="score">  <b>Score: {article.score.toFixed(3)}</b></div>
                </div>
                <div><p><b>Abstract: </b>{article.abstract.slice(0,500)}...</p></div>

                <Button primary={false} size={size} backgroundColor={backgroundColor} label="Open Details" />

            </div>
        </article>
    );
};

ArticleStub.propTypes = {
    /** What background color to use */
    backgroundColor: PropTypes.string,
    /** How large should the button be? */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Button contents */
    article: PropTypes.any.isRequired,
    /** Optional click handler */
    onClick: PropTypes.func,
};
