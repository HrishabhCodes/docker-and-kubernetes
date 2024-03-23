# Docker Commands and Flags

## Commands

- docker exec -it <container_name> bash **(get into the container)**
- docker login **(logs in your docker hub account)**
- docker logout **(logs out from your docker hub account)**

### Images

- docker build -t feedback-node:latest . **(creates an image with a tag [name:tag(version)])**
- docker rmi feedback-node:volumes **(removes the image)**
- docker rmi prune **(removes all the unused images)**
- docker rmi prune -a **(removes all the unused images inlcuding tagged images)**
- docker images **(lists down all the images)**
- docker image inspect {imageId} **(details of an image)**
- docker tag node-demo:latest hrishabh/hello-world **(renames and clones an image)**
- docker push hrishabh/hello-world **(pushes the image to docker hub)**
- docker pull hrishabh/hello-world **(pulls the image from docker hub)**

### Containers

- docker ps -a **(lists down all the processes/containers)**
- docker run -it node **(for an interactive session)**
- docker start {name} **(restarts the container but it's non-interactive/detached mode)**
- docker stop feedback-app **(stops the running container)**
- docker logs feedback-app **(to see the output of the container, we can add an -f flag to see future logs)**
- docker run -p 80:3000 -d --name feedback-app --rm feedback-node **(creates and runs a container with a name)**
- docker cp {from}(intelligent_chatelet:/test/.) {to}(dummy) **(copies files/folders from/to containers)**

### Volumes

- docker run -p 80:3000 -d --name feedback-app --rm -v feedback:/app/feedback feedback-node **(named volume)**
- docker ps **(List containers, all containers -> -a or --all)**
- docker rm feedback-app **(manually remove a container)**
- docker volume ls **(lists volumes)**

### Network

- docker network create {name} **(creates a new docker network)**
- docker network ls **(lists down all the networks)**
- docker run -d --name mongodb --network favorites-net mongo **(created container is a part of the specified network)**

### Compose

- docker compose up
- docker compose down

## Flags

- **-a** -> Attach mode
- **-d** -> Detach mode
- **-i** -> Interactive mode
- **-t** -> Allocate a pseudo-TTY (terminal)
- **-rm** -> Automatically remove containers on getting exited
- **-p** -> Publish a container's port(s) to the host
- **--env** -> Listing env variables
- **--env-file** -> Adding env file
- **--build-arg** -> Add values to arguments

## Notes

- Use "host.docker.internal" to connect your container with anything running on your local machine
- For communicating with another container, we can use the IP address of the other container which we can get by running docker inspect {container_name} [Obviously this is not an efficient way of creating a network as we need to create an image each time we change the IP address in the code. We can use --network flag, which is a much better alternative]
- If 2 or more containers are of same network, then we can simply use the name of the container to communicate between them instead of using its IP
