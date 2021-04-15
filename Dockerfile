FROM node:12 as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

FROM build as sonaragent
COPY --from=0 /app .
COPY . .

RUN npm test
RUN npm run sonar

FROM node:12
WORKDIR /app
COPY --from=0 /app .
COPY . .
CMD  [ "npm", "start"]
