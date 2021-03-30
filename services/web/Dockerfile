FROM node:15-alpine

ARG PORT=8000
ARG SERVICE=web

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
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && yarn global add @vue/cli \
    && yarn \
    && yarn cache clean \
    && apk del build-dependencies

# Copy project and chown all the files to the app user
COPY --chown=app:app . $APP_HOME

RUN npm run build

# Open desired port
EXPOSE ${PORT}

# Switch to user node
USER app

# Entrypoint
ENTRYPOINT [ "npm", "run", "dev" ]
