# Networks

- Request
- DNS
- Server
- Response

# Scalability

## Web Hosts
## Vertical Scaling
## Horizontal Scaling
## Load Balancer
- Load Balancing through Round Robin Scheduling at DNS end - not suggested as one heavy user could occupy more resources and because of the nature of the round robin scheduling there could form a congestion queue at a single server.
- Cacheing DNS records on a browser will not give better results
- So using a load balancer which can select server based on load is a better approach
- But things like cookies and php sessions break as every server doesn't have the same session active
- Sticky sessions can used to tackle that
    - Cookies
    - Shared storage using MySQL, FC etc..,
        - MySQL Query Cache
        - MemCache
## RAID
## MYSQL Optimization
- MYSQL Storage engines
    - MyISamp
    - InoDB 
    - Archieve - when more reads are not needed like log data as it compresses to very small size
    - NDB - clustering - avoids single point failure (There are simper ways - Data replication)

- Replication
    - Master-Slave
    - Master-Master

- Load Balancing + Replication
    - active-active loadbalancer
    - active-passive loadbalancer

