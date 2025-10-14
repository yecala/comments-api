# 🗨️ Comments API

A clean and scalable **REST API built with Node.js and AWS DynamoDB** to manage comments across multiple applications.  
This microservice can be reused in any app that requires user comments or reviews (e.g., recipes, blogs, products).

---

## 🚀 Features
- Create, read, update and delete comments
- AWS DynamoDB integration (NoSQL database)
- Clean architecture: routes → controllers → services
- Environment variables managed with dotenv
- Ready for Docker and GitHub Actions CI/CD

---

## 🧠 Tech Stack
| Layer | Technology |
|-------|-------------|
| Backend | Node.js (v22) |
| Database | AWS DynamoDB |
| Deployment | Docker, GitHub Actions |
| Environment | dotenv |

---

## 🧩 Architecture Diagram
Client → Express Routes → Controllers → Services → DynamoDB

---

## ⚙️ Environment Variables

Create a `.env` file with your AWS credentials:

AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-access-key
AWS_REGION=your-region
DYNAMO_TABLE_NAME=your-dynamo-table-name
PORT=3000

---

## 🐳 Docker
bash

# Build image
docker build -t comments-api .

# Run container
docker run -p 3000:3000 comments-api

## 🧪 API Endpoints
Method	Endpoint	Description
POST	/api/comments	Create a new comment
GET	/api/comments/:id	Get comment by ID
PUT	/api/comments/:id	Update comment
DELETE	/api/comments/:id	Delete comment

## 🧑‍💻 Author

Jessica Osorio
Full Stack Developer | Java · Node.js · Angular
🔗 [Linkedin](https://www.linkedin.com/in/jessica-osorio-278807212/)
 | [Github](https://github.com/yecala)

 