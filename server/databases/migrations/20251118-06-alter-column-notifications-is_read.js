/**
 * @file databases/migrations/20251118-06-alter-column-notifications-is_read.js
 * @description notifications-is_read change
 * 251118 v1.0.0 CK init
 */

import { DataTypes } from 'sequelize';

// 테이블명
const tableNames = 'notifications';

// 키명
const key = 'is_read';

// 컬럼 정의
// 수정할 거
const upAttributes = {
  type: DataTypes.BOOLEAN,
  allowNull: false,
  defaultvalue: true,
  comment: '읽음여부',
};

// 롤백할 거
const downAttributes = {
  type: DataTypes.TINYINT(1),
  allowNull: false,
  defaultvalue: 0,
  comments: '읽음여부',
}

/** @type {import('sequelize-cli').Migration} */
export default {
  // 마이그레이션을 실행 시 호출되는 메소드 (스키마 생성, 수정)
  async up (queryInterface, Sequelize) {
    // 컬럼 수정 : queryInterface.changeColumn(tableName, key, upAttributes)
    await queryInterface.changeColumn(tableNames, key, upAttributes);
  },

  // 마이그레이션을 올백 시 호출되는 메소드 (스키마 제거, 수정)
  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn(tableNames, key, downAttributes);
  }
};
