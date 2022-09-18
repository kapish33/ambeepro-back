import { Table } from '../models';
import asyncHandler from 'express-async-handler';

// /**
//  * @description Will Craete a New Entity
//  * @api {{testurl}}/api/v1/table
//  * @access Public
//  * @type POST
//  */
const createEntity = asyncHandler(async (req, res) => {
  const entity = new Table(req.body);
  await entity.save();
  return res.status(200).json({
    success: true,
    data: entity,
  });
});

// /**
//  * @description get Paginated Entities
//  * @api {{testurl}}/api/v1/table
//  * @access Public
//  * @type GET
//  */
const getPaginatreEntries = asyncHandler(async (req, res) => {
  const queryies = req.query;
  let page = parseInt(queryies.page) || 1;
  if (page < 0) page = 1;
  let limit = parseInt(queryies.limit) || 25;
  const entity = await Table.find({})
    .skip((page - 1) * limit)
    .limit(limit)
    .sort({ updatedAt: -1 });
  let count = await Table.find().countDocuments();
  res.json({
    success: true,
    data: entity,
    page,
    limit,
    count,
  });
});

// /**
//  * @description Will patch the entity data as per Default ID
//  * @api {{testurl}}/api/v1/table
//  * @access Public
//  * @type PATCH
//  */

const updateEntity = asyncHandler(async (req, res) => {
  const table = await Table.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    data: table,
  });
});
export { createEntity, getPaginatreEntries, updateEntity };
