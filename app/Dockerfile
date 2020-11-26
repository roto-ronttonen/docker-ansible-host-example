FROM node as build-client
WORKDIR /usr/app
COPY client/package.json .
RUN npm install
COPY client .
RUN npm run build

FROM node
WORKDIR /usr/app
COPY server/package.json .
RUN npm install
COPY server .
COPY --from=build-client /usr/app/build /usr/app/public
EXPOSE 8000
CMD [ "npm", "run", "start" ]