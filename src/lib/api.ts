import axios from 'axios';
import process from 'process';

const API_URL = process.env.API_URL;

export async function getPoem(slug: string | number | unknown, client?: boolean)
{
    try
    {
        const data = await axios.get((client ? process.env.NEXT_PUBLIC_SERVER_IP_OR_URL : API_URL) + `/poem/find-by-id/${ slug }?locale=fa&token=${ process.env.API_TOKEN }`);

        return data.data.data;
    }
    catch (e)
    {
        return false;
    }
}

export async function getPoems(page: number, limit: number, client?: boolean)
{
    try
    {
        const data = await axios.get((client ? process.env.NEXT_PUBLIC_SERVER_IP_OR_URL : API_URL) + `/poem/find-all?locale=fa&page=${ page > 0 ? page : 1 }&limit=${ limit || 10 }&token=${ process.env.API_TOKEN }`);

        return data.data.data;
    }
    catch (e)
    {
        return false;
    }
}

export async function getBlog(slug: string, client?: boolean)
{
    try
    {
        const data = await axios.get((client ? process.env.NEXT_PUBLIC_SERVER_IP_OR_URL : API_URL) + `/blog/find-by-slug/${ slug }?locale=fa`);

        return data.data.data;
    }
    catch (e)
    {
        return false;
    }
}

export async function getBlogs(page: string | number, limit: string | number, type: string, client?: boolean)
{
    try
    {
        const data = await axios.get((client ? process.env.NEXT_PUBLIC_SERVER_IP_OR_URL : API_URL) + `/blog/find-all-and-order/${ type || 'created_at' }?locale=fa&page=${ Number(page) > 0 ? Number(page) : 1 }&limit=${ Number(limit) > 0 ? Number(limit) : 10 }`);

        return data.data.data;
    }
    catch (e)
    {
        return false;
    }
}
