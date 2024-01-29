---
title: 'Setup DNS Server for Ubuntu'
pubDate: 2024-01-29
description: 'Setup the dns server for ubuntu .'
author: '236sec'
tags: ["resource", "study","code","docker","mongodb"]
---

## Prerequisites
- initial setup ubuntu
- setup static ip

## Install BIND

update
```bash
apt update
```

install bind
```bash
apt install bind9 bind9utils bind9-doc
```

edit setup to use ipv4 in `/etc/default/named`
```bash
OPTIONS="-u bind -4"
```

to use the setting use command
```bash
systemctl restart bind9
```

in `/etc/bind/named.conf.options`
```bash
vi /etc/bind/named.conf.options
```

```bash
acl "trusted" {
        10.128.10.11;    # ns1 
        10.128.20.12;    # ns2
        10.128.100.101;  # host1
        10.128.200.102;  # host2
};

options {
        recursion yes;                 # enables recursive queries
        allow-recursion { trusted; };  # allows recursive queries from "trusted" clients
        listen-on { 10.128.10.11; };   # ns1 private IP address - listen on private network only
        allow-transfer { none; };      # disable zone transfers by default

        forwarders {
                8.8.8.8;
                8.8.4.4;
        };
...
}
```

```bash
vi /etc/bind/named.conf.local
```

```bash
zone "nyc3.example.com" {
    type primary;
    file "/etc/bind/zones/db.nyc3.example.com"; # zone file path
    allow-transfer { 10.128.20.12; };           # ns2 private IP address - secondary
};

zone "128.10.in-addr.arpa" {
    type primary;
    file "/etc/bind/zones/db.10.128";  # 10.128.0.0/16 subnet
    allow-transfer { 10.128.20.12; };  # ns2 private IP address - secondary
};
```

```bash
mkdir /etc/bind/zones
cp /etc/bind/db.local /etc/bind/zones/db.nyc3.example.com
vi nano /etc/bind/zones/db.nyc3.example.com
```

```bash
$TTL    604800
@       IN      SOA     ns1.nyc3.example.com. admin.nyc3.example.com. (
                  3     ; Serial
             604800     ; Refresh
              86400     ; Retry
            2419200     ; Expire
             604800 )   ; Negative Cache TTL
;
; name servers - NS records
     IN      NS      ns1.nyc3.example.com.
     IN      NS      ns2.nyc3.example.com.

; name servers - A records
ns1.nyc3.example.com.          IN      A       10.128.10.11
ns2.nyc3.example.com.          IN      A       10.128.20.12

; 10.128.0.0/16 - A records
host1.nyc3.example.com.        IN      A      10.128.100.101
host2.nyc3.example.com.        IN      A      10.128.200.102
```

```bash
cp /etc/bind/db.127 /etc/bind/zones/db.10.128
vi /etc/bind/zones/db.10.128
```

```bash
$TTL    604800
@       IN      SOA     nyc3.example.com. admin.nyc3.example.com. (
                              3         ; Serial
                         604800         ; Refresh
                          86400         ; Retry
                        2419200         ; Expire
                         604800 )       ; Negative Cache TTL
; name servers
      IN      NS      ns1.nyc3.example.com.
      IN      NS      ns2.nyc3.example.com.

; PTR Records
11.10   IN      PTR     ns1.nyc3.example.com.    ; 10.128.10.11
12.20   IN      PTR     ns2.nyc3.example.com.    ; 10.128.20.12
101.100 IN      PTR     host1.nyc3.example.com.  ; 10.128.100.101
102.200 IN      PTR     host2.nyc3.example.com.  ; 10.128.200.102
```

Check config file
```bash
named-checkconf
```

```bash
systemctl restart bind9
```


