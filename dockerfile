# ---- Base image ----
FROM node:22-alpine

# ---- Create app directory ----
WORKDIR /usr/src/app

# ---- Copy package files first ----
COPY package*.json ./

# ---- Install dependencies ----
RUN npm install --omit=dev

# ---- Copy the rest of the source code ----
COPY . .

# ---- Build arguments (for CI/CD) ----
ARG AWS_REGION
ARG DYNAMO_TABLE_NAME
ARG PORT

# ---- Environment variables inside container ----
ENV AWS_REGION=${AWS_REGION}
ENV DYNAMO_TABLE_NAME=${DYNAMO_TABLE_NAME}
ENV PORT=${PORT}

# ---- Expose port ----
EXPOSE ${PORT}

# ---- Start the app ----
CMD ["node", "src/app.js"]
