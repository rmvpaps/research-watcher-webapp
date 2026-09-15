import apiClient from './apiClient';





export const getStats = async () => {
    try {
        const response = await apiClient.get('/v1/articles/stats');

        return response.data;
    } catch (error) {
        console.error("stats request failed:", error.response?.data || error.message);
        throw error.response?.data?.detail || "Cant get stats";

    }
};



export const getRecentArticles = async (articleState, pageNum) => {

    try {
        const response = await apiClient.get('/v1/articles', {
                params: {
                    offset: (pageNum - 1) * 10,
                    limit: 10,
                    processed: true,
                    sort_by_score: true,
                    state: articleState
                }
            }   
        );
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error("stats request failed:", error.response?.data || error.message);
        throw error.response?.data?.detail || "Cant get stats";

    }
};


export const getFullArticle = async (articleId) => {

    try {
        const response = await apiClient.get('/v1/articles/', {
                params: {
                    ids:articleId
                }
            }   
        );
        console.log(response.data)
        if(response.data && response.data.length>0){
            return response.data[0];
        }
        throw error("No article found!")

    } catch (error) {
        console.error("article request failed:", error.response?.data || error.message);
        throw error.response?.data?.detail || "Cant get article";

    }
};


export const getKeywords = async (articleId) => {

    try {
        const response = await apiClient.get('/v1/articles/keywords', {
                params: {
                    ids:articleId
                }
            }   
        );
        console.log(response.data)

        return response.data;
        

    } catch (error) {
        console.error("article keywords request failed:", error.response?.data || error.message);
        throw error.response?.data?.detail || "Cant get article keywords";

    }
};



export const getArticleChatResponse = async (articleId,messages) => {

    try {
        const response = await apiClient.post(`/v1/articles/chat/${articleId}`, messages);
        console.log(response.data)

        return response.data;
        

    } catch (error) {
        //return { 'role':'assistant', content:'i am dumb!'}
        console.error("article chat request failed:",  error.message);
        throw error.response?.data?.detail || "Cant get article chat response";

    }
};