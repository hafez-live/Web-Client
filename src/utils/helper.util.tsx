import React from 'react';

export function Newline({ content }: { content: string })
{
    return (<>{ content.split('\n').map((string) => <p key={string + '_' + string.length}>{ string }</p>) }</>);
}

export const timeSince = (date: Date) =>
{
    const seconds = Math.floor((Number(new Date()) - Number(date)) / 1000);

    let interval = seconds / 31536000;

    if (interval > 1)
        return Math.floor(interval) + ' سال';

    interval = seconds / 2592000;

    if (interval > 1)
        return Math.floor(interval) + ' ماه';

    interval = seconds / 86400;

    if (interval > 1)
        return Math.floor(interval) + ' روز';

    interval = seconds / 3600;

    if (interval > 1)
        return Math.floor(interval) + ' ساعت';

    interval = seconds / 60;

    if (interval > 1)
        return Math.floor(interval) + ' ذقیقه';

    return Math.floor(seconds) + ' ثانیه';
};
