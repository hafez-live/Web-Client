import React from 'react';

interface MainProps
{
    children: React.ReactNode;
}

const Main = ({ children }: MainProps) =>
{
    return (
        <main className='container'>
            { children }
        </main>
    );
};

export default Main;
