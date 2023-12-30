---
title: 'Initial setup for ubuntu'
pubDate: 2023-12-30
description: 'Setup the ubuntu add user/remote login setup for local in vmbox.'
author: '236sec'
tags: ["resource", "study","code","docker","mongodb"]
---

## Setup Your Server Name

to see detail your server using command
```bash
hostnamectl
```
to change your server name using command
```bash
hostname <yournewname>
```

## Add User to Server

add new user
```bash
adduser <newuser>
```

add sudo command to user using command
```bash
usermod -aG sudo <newuser> 
```

set password for user
```bash
passwd <newuser>
```

see detail user in ubuntu system in `/etc/passwd`

disable root remote login in `/etc/ssh/sshd_config`
```bash
PermitRootLogin no
```

if you login to `newuser` use this command to get root permission
```bash
sudo su -
```
