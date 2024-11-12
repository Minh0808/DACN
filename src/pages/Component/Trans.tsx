import React, { useState, useEffect } from 'react';

const NewsFeed: React.FC = () => {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchNews = async () => {
      const url = 'https://api.opsocialfi.com/call';
      const requestBody = {
        operationName: "NewsFeed",
        variables: {
          limit: 30,
        },
        query: `query NewsFeed($limit: Int!) {
          news(limit: $limit) {
            id
            url
            title
            author
            newsSource
            categories
            description
            content
            updated
            logoUrl
            __typename
          }
        }`,
      };

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setNews(data.data.news); // Lưu trữ dữ liệu nhận được vào state
        setLoading(false); // Đổi trạng thái khi dữ liệu đã được tải
      } catch (error) {
        setError('Đã có lỗi xảy ra khi lấy dữ liệu');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>News Feed</h1>
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p><strong>Author:</strong> {item.author}</p>
            <p><strong>News Source:</strong> {item.newsSource}</p>
            <p><strong>Categories:</strong> {item.categories.join(', ')}</p>
            <p>{item.description.replace(/<[^>]+>/g, '')}</p> {/* Loại bỏ thẻ HTML */}
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
