/**
 * @file app/repositories/pushSubscription.repository.js
 * @description push subscription Repository
 * 251208 v1.0.0 CK init
 */

import db from '../models/index.js';
const { PushSubscription } = db;

async function upsert(t = null, data) {
  return await PushSubscription.upsert(data, {transaction: t});
}

export default {
  upsert,
}