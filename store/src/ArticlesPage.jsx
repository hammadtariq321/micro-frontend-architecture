import React, { useState, useEffect } from 'react';
import { useFetchArticlesQuery } from './store/services/guardianApi';
import { useFetchPostsQuery } from './store/services/postsApi';

const ArticlesPage = () => {
    const [searchParams, setSearchParams] = useState({
        keyword: '',
        fromDate: '',
        toDate: '',
        section: '',
        page: 1,
        pageSize: 12
    });

    // const { data: articlesData, error, isLoading } = useFetchArticlesQuery(searchParams);
    const { data: articlesData, error, isLoading } = useFetchPostsQuery();
    const [articles, setArticles] = useState([]);
    console.log("articlesData", articlesData, error, isLoading)

    useEffect(() => {
        if (articlesData?.response?.results) {
            setArticles(prevArticles => [...prevArticles, ...articlesData.response.results]);
        }
    }, [articlesData]);

    return (
        <main className='p-5 justify-center md:w-[75%] m-auto'>
            <h1>Articles Page</h1>
            {JSON.stringify(articlesData)}
        </main>
    );
};

export default ArticlesPage;