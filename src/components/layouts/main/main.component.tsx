import React from 'react';

interface MainProps
{
    blog?: boolean;
    children: React.ReactNode;
}

const Main = ({ children, blog }: MainProps) =>
{
    return (
        <main className='container' data-blog={blog}>
            { children }
        </main>
    );
};

export default Main;
