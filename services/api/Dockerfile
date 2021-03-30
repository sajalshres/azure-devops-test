FROM node:15-alpine

ARG PORT=3000
ARG SERVICE=api

# create directory for the app user
RUN mkdir -p /home/app

# create the app user
RUN addgroup -S app && adduser -S app -G app

# create the appropriate directories
ENV HOME=/home/app
ENV APP_HOME=/home/app/src
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

# Copy package.json and package-lock.json
COPY package*.json ./

# Install libraries
RUN yarn && yarn cache clean

# chown all the files to the app user
COPY --chown=app:app . $APP_HOME

# Open desired port
EXPOSE ${PORT}

# Switch to user node
USER app

# Entrypoint
ENTRYPOINT [ "npm", "run", "dev" ]
