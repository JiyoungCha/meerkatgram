/**
 * @file app/models/Comment.js
 * @description comment model
 * 251124 v1.0.0 CK init
 */

import dayjs from "dayjs";
import { DataTypes } from "sequelize";

// 테이블명
const modelName = 'Comment';

// 컬럼 정의
const attributes = {
  id: {
    field: 'id',
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    comment: '코멘트 PK',
  },
  userId: {
    field: 'user_id',
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    comment: '유저 PK',
  },
  postId: {
    field: 'post_id',
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    comment: '게시글 PK',
  },  
  content: {
    field: 'content',
    type: DataTypes.STRING(1000),
    allowNull: false,
    comment: '코멘트 내용',
  },
  replyId: {
    field: 'reply_id',
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    comment: '대댓글 PK',
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
  tableName: 'comments', // 실제 DB 테이블명
  timestamps: true,   // createdAt, updateAt를 자동 관리
  paranoid: true,     // soft delete 설정 (deletedAt 자동 관리) 
}

const Post = {
  init: (sequelize) => {
    const define = sequelize.define(modelName, attributes, options);

    // JSON으로 serialize시, 제외 할 컬럼을 지정
    define.prototype.toJSON = function() {
      const attributes = this.get();
      delete attributes.userId;

      return define;
    }

    return define;
  },
  associate: (db) => {
    db.Comment.belongsTo(db.User, { targetKey: 'id', foreignKey: 'userId', as: 'userIds' });
    db.Comment.belongsTo(db.User, { targetKey: 'id', foreignKey: 'postId', as: 'commnetpostIds' });
  },
}

export default Comment;