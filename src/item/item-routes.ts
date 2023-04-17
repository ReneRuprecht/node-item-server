import { Request, Response } from 'express';
import { findAllItems } from './use-cases/find-all-items';
const express = require('express');
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  const allItems = findAllItems();

  res.json({
    items: allItems,
  });
});

module.exports = router;
