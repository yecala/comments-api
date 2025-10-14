import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

// Configurar AWS
AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// Exportar el cliente de DynamoDB
const dynamoDB = new AWS.DynamoDB.DocumentClient();

export default dynamoDB;
