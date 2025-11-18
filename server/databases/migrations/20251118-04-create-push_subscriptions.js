/**
 * @file databases/migrations/20251118-04-create-push_subscriptions.js
 * @description push-subscriptions migration file
 * 251118 v1.0.0 CK init
 */

import { DataTypes } from 'sequelize';

// 테이블명
const tableNames = 'push_subscriptions';

// 컬럼 정의
const attributes = {
  id: {
    field: 'id',
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    comment: '푸시구독 PK',
  },
  userId: {
    field: 'user_id',
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    comment: '유저 PK',
  },
  endpoint: {
    field: 'endpoint',
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    comment: '엔드포인트',
  },
  createdAt: {
    field: 'created_at', 
    type: DataTypes.DATE,
    allowNull: true,
    comment: '생성일',
  },
  updatedAt: {
    field: 'updated_at', 
    type: DataTypes.DATE,
    allowNull: true,
    comment: '수정일',
  },
  deletedAt: {
    field: 'deleted_at',
    type: DataTypes.DATE,
    allowNull: true,
    comment: '삭제일',
  },
};

// 옵션 설정
const options = {
  // 8.1ver 이상의 MySQL에서 디폴트 
  charset: 'utf8mb4',       // 테이블 문자셋 설정(이모지 지원)
  collate: 'utf8mb4_0900_ai_ci',   // 정렬 방식 설정(기본 설정)
  engine: 'InnoDB',         // 사용 엔진 설정  
};

/** @type {import('sequelize-cli').Migration} */
export default {
  // 마이그레이션을 실행 시 호출되는 메소드 (스키마 생성, 수정)
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(tableNames, attributes, options);
  },

  // 마이그레이션을 올백 시 호출되는 메소드 (스키마 제거, 수정)
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(tableNames);
  }
};
