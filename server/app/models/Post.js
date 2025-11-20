/**
 * @file app/models/Post.js
 * @description post model
 * 251120 v1.0.0 CK init
 */

import dayjs from "dayjs";
import { DataTypes } from "sequelize";

// 테이블명
const modelName = 'Post';

// 컬럼 정의
const attributes = {
  id: {
    field: 'id',
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    comment: '게시글 PK',
  },
  userId: {
    field: 'user_id',
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    comment: '유저 PK',
  },
  content: {
    field: 'content',
    type: DataTypes.STRING(300),
    allowNull: false,
    comment: '게시글 내용',
  },
  image: {
    field: 'image',
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultvalue: null,
    comment: '게시글 이미지'
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
  tableName: 'posts', // 실제 DB 테이블명
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
    // likes, comments의 부모일 때
    db.Post.hasMany(db.Like, { sourceKey: 'id', foreignKey: 'postId', as: 'likePostIds' });

    // users의 자식일 때
    db.Post.belongsTo(db.User, { targetKey: 'id', foreignKey: 'userId', as: 'userIds' });
  },
}

export default Post;