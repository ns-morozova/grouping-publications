// /src/components/List.tsx

import React from 'react';
import WithPopularity from './WithPopularity';
import Video from './Video';
import Article from './Article';

export interface ListItem {
    type: 'video' | 'article';
    url?: string;
    title?: string;
    views: number;
}

interface ListProps {
    list: ListItem[];
}

const VideoWithPopularity = WithPopularity(Video);
const ArticleWithPopularity = WithPopularity(Article);

const List: React.FC<ListProps> = ({ list }) => {
    return (
        <>
            {list.map((item, index) => {
                switch (item.type) {
                    case 'video':
                        return <VideoWithPopularity key={index} url={item.url!} views={item.views} />;
                    case 'article':
                        return <ArticleWithPopularity key={index} title={item.title!} views={item.views} />;
                    default:
                        return null;
                }
            })}
        </>
    );
};

export default List;