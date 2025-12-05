/**
 * @file app/utils/path/path.util.js
 * @description path 유틸리티
 * 251128 v1.0.0 CK init 
 */

import path from 'path';

function getViewDirPath() {
  const __dirname = process.env.APP_MODE !== 'dev' 
    ? process.env.APP_DIST_PATH 
      : path.resolve(process.env.APP_DIST_PATH);

  return path.join(__dirname, 'index.html');
}

function getPostsImagePath() {
  return process.env.APP_MODE !== 'dev'
    ? process.env.FILE_POST_IMAGE_PATH : 
      path.resolve(process.env.FILE_POST_IMAGE_PATH);
}

function getProfilesImagePath() {
  return process.env.APP_MODE !== 'dev' 
    ? process.env.FILE_USER_PROFILE_PATH : 
      path.resolve(process.env.FILE_USER_PROFILE_PATH);
}

// -----------------------------
// 프로필 이미지 저장 관련
// -----------------------------
/**
 * 프로필 이미지가 저장될 절대경로 반환
 */
function getUserProfileImagePath() {
  return path.resolve(process.env.ACCESS_FILE_USER_PROFILE_PATH);
}

export default {
  getViewDirPath,
  getPostsImagePath,
  getProfilesImagePath,
  getUserProfileImagePath,
}