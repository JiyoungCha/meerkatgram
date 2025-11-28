/**
 * @file app/services/posts.service.js
 * @description posts Service
 * 251128 CK init
 */

import postRepository from "../repositories/post.repository.js";

// 포스트 페이지
async function pagination(page) {
  const limit = 6;
  const offset = limit * (page - 1);
  
  return await postRepository.pagination(null, { limit, offset });
}

// 상세페이지
async function show(id) {
  return await postRepository.findByPk(null, id);
}

export default  {
  pagination,
  show,
}