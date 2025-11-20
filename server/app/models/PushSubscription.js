/**
 * @file app/models/PushSubscription.js
 * @description push-subscription model
 * 251120 v1.0.0 CK init
 */

import { DataTypes, Sequelize } from "sequelize";
import dayjs from 'dayjs';

const modelName = 'PushSubscription'; // 모델명(JS 내부에서 사용)

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
    get() {
      const val = this.getDataValue('createdAt');
      if(!val) {
        return null;
      }
      return dayjs(val).format('YYYY-MM-DD HH:mm:ss');
    }
  },
  updatedAt: {
    field: 'updated_at', 
    type: DataTypes.DATE,
    allowNull: true,
    comment: '수정일',
    get() {
      const val = this.getDataValue('updatedAt');
      if(!val) {
        return null;
      }
      return dayjs(val).format('YYYY-MM-DD HH:mm:ss');
    }
  },
  deletedAt: {
    field: 'deleted_at',
    type: DataTypes.DATE,
    allowNull: true,
    comment: '삭제일',
    get() {
      const val = this.getDataValue('deletedAt');
      if(!val) {
        return null;
      }
      return dayjs(val).format('YYYY-MM-DD HH:mm:ss');
    }
  },
};

const options = {
  tableName: 'users', // 실제 DB 테이블명
  timestamps: true,   // createdAt, updateAt를 자동 관리
  paranoid: true,     // soft delete 설정 (deletedAt 자동 관리) 
}

const PushSubscription = {
  init: (sequelize) => {
    const define = sequelize.define(modelName, attributes, options);

    // JSON으로 serialize시, 제외 할 컬럼을 지정
    define.prototype.toJSON = function() {
      const attributes = this.get();
      delete attributes.userId;
      delete attributes.endpoint;

      return define;
    }

    return define;
  },
  associate: (db) => {

  },
}

export default PushSubscription;