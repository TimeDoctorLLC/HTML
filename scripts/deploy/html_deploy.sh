#!/bin/bash

chown -R  www-data: $1
echo "Syncing to web root..."
rsync -aP  $1/ /var/www/html/  --exclude /scripts --stats
