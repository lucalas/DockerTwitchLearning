rem command to execute to run the container with a new volume

cd TwitchBot

docker container stop twitchbot
docker container rm twitchbot
docker volume rm test-vol
docker image rm testbot
docker build . --tag testbot

docker volume create test-vol
docker run -d --name twitchbot --mount source=test-vol,target=/app testbot:latest

cd %~dp0