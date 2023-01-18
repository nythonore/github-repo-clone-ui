import fs from 'fs';
import axios from 'axios';
import { Router, Request, Response } from 'express';
import { config } from '../config';

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!

  try {
    const { data: githubRepo } = await axios.get(config.api.repo);

    const file = await fs.promises.readFile('./data/repos.json', 'utf-8');
    const localRepo = JSON.parse(file);

    const data = [...githubRepo, ...localRepo].filter((v) => !v.fork);

    return res.status(200).json({ status: 200, data });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'internal server error!' });
  }
});
