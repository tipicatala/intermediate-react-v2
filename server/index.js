import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerLocation } from '@react/router';
import fs from 'fs';
import App from '../src/App';

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync()