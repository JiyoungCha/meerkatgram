/**
 * @file databases/seeders/dummy-users.seeder.js
 * @description users table dummy data create
 * 251118 v1.0.0 CK init
 */

import bcrypt from 'bcrypt';

// 테이블명
const tableName = 'users';

// 레코드 정보
const records = [
  {
    email: 'admin@admin.com',
    password: bcrypt.hashSync('pwa12345', 10),
    nick: '관리하는 물개',
    provider: 'NONE',
    role: 'SUPER',
    profile: '',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    email: 'admin2@admin.com',
    password: bcrypt.hashSync('pwa12345', 10),
    nick: '관리보고 하프물범',
    provider: 'KAKAO',
    role: 'NOMAL',
    profile: '',
    created_at: new Date(),
    updated_at: new Date(),
  }
];

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    // 데이터 생성 : queryInterface.bulkInsert(tableName, records, options)
    await queryInterface.bulkInsert(tableName, records, {});
  },

  async down (queryInterface, Sequelize) {
    // 데이터 삭제 : queryInterface.bulkDelete(tableName, records, options)
    await queryInterface.bulkDelete(tableName, null, {});
  }
};