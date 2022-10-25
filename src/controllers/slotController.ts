import { create_one, get_many, get_one, get_all, update_one, filters, get_filtered } from '@/database/functions';
import Slot from '@/models/Slot';
import { Request, Response } from 'express';

export async function create_slot(req: Request, res: Response) {
  let slot_data = req.body;
  const response = await create_one(Slot, slot_data);
  res.json(response);
}

export async function get_slot(req: Request, res: Response) {
  let id = req.params.id;
  const response = await get_one(Slot, id);
  res.json(response);
}

export async function list_slots(req: Request, res: Response) {
  res.json(await get_many(Slot, Number(req.body.page), Number(req.body.size), req.body.filters || []));
}

export async function edit_slot(req: Request, res: Response) {
  let id= req.params.id;
  let slot_data = req.body;
  const response = await update_one(Slot, id, slot_data);
  res.json(response);
}

export async function slot_filter(req: Request, res: Response) {
  let query = req.params;
  if(!query) return res.status(400).send('query required');
  let { available } = req.query;
  console.log(available)
  if(available == 'T') {
    query['booking'] = ''
  }
  console.log(query)
  const response = await get_filtered(Slot, query);
  return res.json(response);
}
// {
// 	"id": '12',
// 	'locationId': '1',
// 	'timing': '21-22',
// 	'date': datetime,
// 	'bookingId': '',
// 	'price': 100
// }

// Query Object
// [
//     { "column": "category", "value": "Sports"}
// ]
