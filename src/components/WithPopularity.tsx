import React from 'react';
import Popular from './Popular';
import New from './New';

interface WithPopularityProps {
    views: number;
    children?: React.ReactNode;
}

function WithPopularity<T extends WithPopularityProps>(Component: React.ComponentType<T>) {
    return function (props: T) {
        const { views } = props;

        if (views >= 1000) {
            return (
                <Popular>
                    <Component {...props} />
                </Popular>
            );
        }

        if (views < 100) {
            return (
                <New>
                    <Component {...props} />
                </New>
            );
        }

        return <Component {...props} />;
    };
}

export default WithPopularity;

