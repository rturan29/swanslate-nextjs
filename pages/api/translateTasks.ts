import type { NextApiRequest, NextApiResponse } from 'next';
import initialData from "./initialData.json";

type Data = {
    data: Array<{ sentence: string; }>
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(initialData);
}
