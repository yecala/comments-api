import dynamoDB from '../config/awsConfig.js';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';

dotenv.config();
const TABLE_NAME = process.env.DYNAMO_TABLE_NAME;

export const getCommentsService = async () => {
  const params = { TableName: TABLE_NAME };
  const data = await dynamoDB.scan(params).promise();
  return data.Items;
};

export const addCommentService = async (comment) => {
  const newComment = {
    id: uuidv4(),
    entity_id: comment.entity_id,
    author_id: comment.author_id,
    author: comment.author,
    content: comment.content,
    rating: comment.rating || null,
    app_name: comment.app_name || 'default',
    created_at: new Date().toISOString(),
  };

  const params = {
    TableName: TABLE_NAME,
    Item: newComment,
  };

  await dynamoDB.put(params).promise();
  return newComment;
};

export const getCommentByIdService = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
  };
  const result = await dynamoDB.get(params).promise();
  
  return result.Item;
};

export const updateCommentService = async (id, content, rating) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
    UpdateExpression: "set content = :c, rating = :r",
    ExpressionAttributeValues: {
      ":c": content,
      ":r": rating,
    },
    ReturnValues: "ALL_NEW",
  };

  const result = await dynamoDB.update(params).promise();
  return result.Attributes;
};

export const deleteCommentService = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
  };

  await dynamoDB.delete(params).promise();
};