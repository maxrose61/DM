#!/bin/sh

#### Reads a directory of mp4 music videos and exports a thumbnail
#### taken at 30 seconds into the video from the 235 or 257 encode.
#### Requires QT_Tools (qt_export) to be installed on machine running this script.
#### Requires SSH key pair allowing access to Akamai via RSYNC
#### Max Rose 3/15/12 V1
#### Max Rose 7/7/12 V2
#### Max Rose 1/18/13 V3 Accept multiple source directories.

#SAVEIFS=$IFS
#IFS=$(echo -en "\n\b")

echo -n "Enter the source directories:"
read sources
for jobdir in ${sources}; do
cd ${jobdir}

# Make thumbs from 700k video files (397.jpg)
for i in *.mp4; do
filename=`echo ${i} | sed 's/\_235//g;s/\_257//g;s/\.mp4//g'`
qt_export ${i} "${filename}.jpg" --duration=30.01,30.02 --replacefile -1
done
done