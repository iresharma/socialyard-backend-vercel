import { create_one, get_many, get_one } from '@/database/functions';
import Facility from '@/models/facility';
import { Request, Response } from 'express';

export async function create_facility(req: Request, res: Response) {
    let facility_data = req.body
    const response = await create_one(Facility, facility_data)
    res.json(response)
}

export async function get_facility(req: Request, res: Response) {
    let id = req.params.id
    const response = await get_one(Facility, id)
    res.json(response)
}

export async function list_facilities(req: Request, res: Response) {
    let queries = req.body || []
    const response = await get_many(Facility, queries)
    res.json(response)
}

// {
//     "_id": 1,
//     "name": "Some name",
//     "sku": "sku",
//     "type": "Sports",
//     "isActive": true,
//     "contact": "7704080026",
//     "email": "veer.vs19@gmail.com",
//     "description": "Hello",
//     "pincode": "226010",
//     "state": "UP",
//     "city": "Lucknow",
//     "address": "123",
//     "mapLink": "http",
//     "tags": ["fun", "sport"],
//     "category": "Sports",
//     "coordinates": [1,2]
// }

// Query Object
// [
//     { "column": "category", "value": "Sports"}
// ]