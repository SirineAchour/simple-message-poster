#!/bin/bash

npm install -g @nestjs/cli
npm install -g npm-cache
npm-cache install npm
npm audit fix

npm run build