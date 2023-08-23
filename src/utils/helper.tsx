import React from 'react';

export function Newline({ content }: { content: string })
{
    return (<>{ content.split('\n').map((string) => <p key={string + '_' + string.length}>{ string }</p>) }</>);
}
