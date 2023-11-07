---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Setup MongoDB Database in Docker'
pubDate: 2023-07-11
description: 'Setup the MongoDB on local with Docker.'
author: '236sec'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'The full Astro logo.'
tags: ["resource", "study", "learning in public","code"]
---
# Setup MongoDB Database in Docker

## Run Docker Container

```bash
docker run -d --name mongodb -p 27017:27017 -v mongo_db:/data/db  mongo
```

- name container : mongodb

- port : 27017

- use volume : mongo_db:/data/db

- image : mongo

## Mongo Compass

### How to get your IP address

### In windows
```bash
ipconfig
```

### In Mac
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```
Put your IP address here.

![title](/images/docker-ipex.png "title")
Or connect with URI = mongodb://localhost:27017
