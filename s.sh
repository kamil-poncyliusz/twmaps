#!/bin/bash
mkdir -p s172
cd s172
dzien=$(date '+%-j')
((dzien+=65))
mkdir $dzien
cd $dzien
wget https://pl172.plemiona.pl/map/village.txt.gz
wget https://pl172.plemiona.pl/map/player.txt.gz
wget https://pl172.plemiona.pl/map/ally.txt.gz
wget https://pl172.plemiona.pl/map/conquer.txt.gz
ls
cd ..
cd ..
mkdir -p s174
cd s174
dzien=$(date '+%-j')
((dzien-=6))
mkdir $dzien
cd $dzien
wget https://pl174.plemiona.pl/map/village.txt.gz
wget https://pl174.plemiona.pl/map/player.txt.gz
wget https://pl174.plemiona.pl/map/ally.txt.gz
wget https://pl174.plemiona.pl/map/conquer.txt.gz
ls
cd ..
cd ..
mkdir -p s176
cd s176
dzien=$(date '+%-j')
((dzien-=62))
mkdir $dzien
cd $dzien
wget https://pl176.plemiona.pl/map/village.txt.gz
wget https://pl176.plemiona.pl/map/player.txt.gz
wget https://pl176.plemiona.pl/map/ally.txt.gz
wget https://pl176.plemiona.pl/map/conquer.txt.gz
ls
cd ..
cd ..
mkdir -p s178
cd s178
dzien=$(date '+%-j')
((dzien-=125))
mkdir $dzien
cd $dzien
wget https://pl178.plemiona.pl/map/village.txt.gz
wget https://pl178.plemiona.pl/map/player.txt.gz
wget https://pl178.plemiona.pl/map/ally.txt.gz
wget https://pl178.plemiona.pl/map/conquer.txt.gz
ls
cd ..
cd ..
mkdir -p s180
cd s180
dzien=$(date '+%-j')
((dzien-=181))
mkdir $dzien
cd $dzien
wget https://pl180.plemiona.pl/map/village.txt.gz
wget https://pl180.plemiona.pl/map/player.txt.gz
wget https://pl180.plemiona.pl/map/ally.txt.gz
wget https://pl180.plemiona.pl/map/conquer.txt.gz
ls
