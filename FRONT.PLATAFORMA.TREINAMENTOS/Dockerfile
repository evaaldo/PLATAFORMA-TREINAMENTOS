FROM node:22-alpine
WORKDIR /app
COPY package*.json .
RUN npm install --force
COPY . .
EXPOSE 3005
CMD ["npm", "run", "dev"]