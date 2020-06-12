FROM mhart/alpine-node:12

WORKDIR /app
COPY . .

# RUN apk add --no-cache make gcc g++ python
RUN yarn config set registry https://registry.npm.taobao.org --global
RUN yarn config set disturl https://npm.taobao.org/dist --global
RUN npm install --prod
# ENV NODE_ENV production
EXPOSE 50051
CMD ["npm", "run", "prod"]