import PropTypes from 'prop-types';
import React, { useState } from "react";
import './ArticleFull.css';
import { Button } from '../button/Button';


/** Primary UI component for user interaction */
export const ArticleFull = ({
                           backgroundColor = null,
                           size = 'medium',
                           article = {},
                           ...props
                       }) => {

    const [isVisible, setIsVisible] = useState(false);
    // Toggle handler
    const toggleText = () => {
        setIsVisible((prev) => !prev);
    };
    const styles = {
        container: {
            fontFamily: "Arial, sans-serif",
            maxWidth: "300px",
            margin: "20px auto",
            textAlign: "center",
        },
        toggleBox: {
            padding: "10px",
            cursor: "pointer",
            borderRadius: "5px",
            userSelect: "none",
        },
        textBox: {
            marginTop: "10px",
            padding: "10px",
            backgroundColor: "#f1f1f1",
            borderRadius: "5px",
        },
    };
    return (
        <article>
            <div className="article-box" style={backgroundColor?{ "borderColor":backgroundColor }:undefined}>
                <div className="title" style={backgroundColor && { backgroundColor }}>
                    <div className="article-header">
                        <h3>Title:  {article.title}</h3>
                    </div>
                    <div className="score">  <b>Score:{article.score}</b></div>
                </div>
                {article.keywords && article.keywords.length > 0 ? (
                    <div>
                        <h4>Tags:</h4>
                        <div>
                            {article.keywords.map((tag, index) => (
                                <Button primary={false} size={size} backgroundColor={backgroundColor} label={tag} />
                            ))}
                        </div>
                    </div>
                ) : (
                    <p style={{ fontStyle: "italic" }}>No tags available.</p>
                )}
                <div><p>Abstract:{article.abstract}</p></div>
                {article.summary && article.summary.length > 0 ? (
                        <div>

                            <div style={styles.toggleBox} onClick={toggleText}>
                                {isVisible ? "Close Summary ▲" : <label>Open AI Summary</label>}
                            </div>
                            {isVisible && ( <div style={styles.textBox}>
                                <p>{article.summary}</p>
                            </div>)}
                        </div>


                ) : (
                    <p style={{ fontStyle: "italic" }}>No summary available.</p>
                )}




            </div>
        </article>
    );
};

ArticleFull.propTypes = {
    /** What background color to use */
    backgroundColor: PropTypes.string,
    /** How large should the button be? */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Button contents */
    article: PropTypes.any.isRequired,
    /** Optional click handler */
    onClick: PropTypes.func,
};
