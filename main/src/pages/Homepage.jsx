import React, { useState } from 'react'
import { useFetchArticlesQuery } from 'store/query';
const Homepage = () => {
    const [searchParams, setSearchParams] = useState({
        keyword: '',
        fromDate: '',
        toDate: '',
        section: '',
        page: 1,
        pageSize: 12
    });
    const { data: articlesData, error, isLoading } = useFetchArticlesQuery(searchParams);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>Homepage
            {JSON.stringify(articlesData)}
        </div>
    )
}

export default Homepage