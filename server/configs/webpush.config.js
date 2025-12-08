/**
 * @file configs/webpush.config.js
 * @description 웹푸시 설정
 * 251208 v1.0.0 CK init
 */

import webpush from 'web-push';

webpush.setVapidDetails(
  process.env.JWT_ISSUER,
  process.env.VAPID_PUBLIC_IC_KEY,
  process.env.VAPID_PRIVATE_KEY,
);

export default webpush;