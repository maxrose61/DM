#!/bin/bash

read src


cd ${src}

for file in *.m* ; do
ffmpeg -i "${file}" -r 1 -t 1 -ss 00:00:30 "${file}.jpg"
done
