import axios from 'axios';

const API_URL = process.env.API_URL;

export async function getPoem(slug: string | number)
{
    try
    {
        const data = await axios.get(API_URL + `/poem/find-by-id/${ slug }?locale=fa&token=${ process.env.API_TOKEN }`);

        return data.data.data;
    }
    catch (e)
    {
        return false;
    }
}

export async function getPoems(page: number, limit: number)
{
    try
    {
        const data = await axios.get(API_URL + `/poem/find-all?locale=fa&page=${ page > 0 ? page : 1 }&limit=${ limit || 10 }&token=${ process.env.API_TOKEN }`);

        return data.data.data;
    }
    catch (e)
    {
        return false;
    }
}

export async function getBlogs(page: number, limit: number, type: string)
{
    try
    {
        const data = await axios.get(API_URL + `/blog/find-all-and-order/type/${ type || 'created_at' }?locale=fa&page=${ page > 0 ? page : 1 }&limit=${ limit || 10 }`);

        return data.data.data;
    }
    catch (e)
    {
        return false;
    }
}
