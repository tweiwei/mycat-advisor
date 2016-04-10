#!/bin/bash

ver='3.4.6'
pkg="zookeeper-${ver}.tar.gz"
dest='/opt/zookeeper'

[ -f "../cache/${pkg}" ] && pkg="../cache/${pkg}" || wget http://dl.mycat.io/${pkg}

tar zxf ${pkg} -C /opt
mv ${dest}-${ver} ${dest}
rm -rf ${dest}/src
cp zoo.cfg ${dest}/conf
mkdir -p /opt/data/zookeeper

cat > /etc/supervisord.d/zookeeper.conf << EOF
[program:zookeeper]
command=/opt/zookeeper/bin/zkServer.sh start-foreground
stopsignal=KILL
autorestart=true
EOF