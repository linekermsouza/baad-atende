# baad-atende

Baad-atende project using node, typescript, express, lint, prettier, docker dev and prod.

Run development environment:

```
docker-compose -f docker-compose-dev.yml up
```

to test customer endpoint: curl --header "Content-Type: application/json" --request POST --data '{"name":"Lineker","password":"123456", "email":"linekermsouza@gmail.com","cep":"69077000","phone":"98765-4321"}' http://localhost:8080/customer

Run production environment:

```
npm run build
docker-compose -f docker-compose-prod.yml up
```

to force update images:

```console
docker images
docker rmi <your-image-id>
```

remove all images:

```console
docker stop $(docker ps -a -q)
docker rmi $(docker images -q)
docker rm  $(docker ps -a -q)
```
