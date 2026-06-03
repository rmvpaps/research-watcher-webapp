import {useState, useEffect} from "react";
import {ArticleList} from "./ArticleList/ArticleList";
import apiClient from "./api/apiClient";
import { Button } from "./button/Button";

import './ArticleList/ArticleList.css'
export const ArticlePage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [activeTerm,setActiveTerm] = useState('indexed');
    const [searchTerm, setSearchTerm] = useState('indexed'); // Bound to input field
    const fetchArticles = async (pageNum, articleState) => {
        setLoading(true);
        const response = await apiClient.get("v1/articles", {
            params: {
                offset: (pageNum - 1) * 10,
                limit: 10,
                processed: true,
                sort_by_score: true,
                state: articleState
            }
        });

        console.log(response);

        if (response && response.data) {
            console.log("Updating articles")
            console.log("IS RESPONSE DATA AN ARRAY?:", Array.isArray(response.data));
            setArticles([...response.data]);
        }
        setLoading(false);

    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setActiveTerm(searchTerm)
        setPage(1); // Crucial: Reset to page 1 when running a brand-new filter parameter!

    };

    useEffect(() => {
        fetchArticles(page,activeTerm)

    }, [page,activeTerm]);

    return (
        <div className="Listing">
            <form className="filterbox" >
                <label>Article State:</label><select onChange={(e) => setSearchTerm(e.target.value)}>
                    <option>indexed</option>
                    <option>rejected</option>
                    <option>unknown</option>
                </select>
                <Button primary={false} label={loading ? 'Fetching...' : 'Apply Filters'} size="small" backgroundColor="blue" onClick={handleSearchSubmit} disabled={loading}>

                </Button>
            </form>
            { loading ? <p>Fetching</p> :
                <div>
                    {articles.length >0 && <ArticleList backgroundColor="blue" items={articles} />}
                </div>}
        </div>
    )
}