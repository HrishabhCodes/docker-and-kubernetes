# Docker Commands

- docker ps -a **(lists down all the processes/containers)**
- docker run -it node **(for an interactive session)**
- docker start <name> **(restarts the container but it's non-interactive/detached mode)**
- docker build -t feedback-node:latest . **(creates an image)**
- docker rmi feedback-node:volumes **(removes the image)**
- docker run -p 80:3000 -d --name feedback-app --rm feedback-node **(creates and runs a container)**
- docker run -p 80:3000 -d --name feedback-app --rm -v feedback:/app/feedback feedback-node **(named volunme)**
- docker stop feedback-app **(stops the running container)**
- docker ps **(List containers, all containers -> -a or --all)**
- docker rm feedback-app **(manually remove a container)**
- docker logs feedback-app **(to see the output of the container, we can add an -f flag to see future logs)**
- docker volume ls **(lists volumes)**
- docker images **(lists down all the images)**
