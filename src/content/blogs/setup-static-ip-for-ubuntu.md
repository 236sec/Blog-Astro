---
title: 'Setup Static IP for Ubuntu'
pubDate: 2023-12-30
description: 'Setup the static ip for ubuntu .'
author: '236sec'
tags: ["resource", "study","code","docker","mongodb"]
---

## Setup Your Static IP

to see your ip address using command
```bash
ip a
```

to set your static ip have to setting in `/etc/netplan/00-installer-config.yaml` for example I use ip `192.168.1.182` and network mask is `24`
```bash
network:
  version: 2
  ethernets:
    enp0s3:
      addresses:
        - 192.168.1.182/24
      gateway4: 192.168.1.1
      nameservers:
        addresses: [192.168.1.182,8.8.8.8,8.8.4.4,1.1.1.1]
```

to use your setting using command
```bash
netplan try
```