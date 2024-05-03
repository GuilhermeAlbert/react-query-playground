.PHONY: help
.DEFAULT_GOAL := help
-include .env

args = `arg="$(filter-out $@,$(MAKECMDGOALS))" && echo $${arg:-${1}}`

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[32m%-25s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

build: ## Build image
	docker build . --tag  $(CONTAINER_NAME):latest

run:  ## run container for the first time
	make build
	docker run --rm -it -a stdin -a stdout --volume=.:/app -p $(PORT):$(PORT) -p 4173:4173 --env-file .env --name=$(CONTAINER_NAME) $(CONTAINER_NAME):latest yarn dev --host
remove: ## remove container
	docker container rm $(CONTAINER_NAME)

start:  ## start a container that already exists
	docker start -ai  $(CONTAINER_NAME)

stop:  ## stops the running container
	docker stop $(CONTAINER_NAME)

bash: ## attach on container terminal
	docker container exec -it $(CONTAINER_NAME) sh
	
logs: ## attach on container logs
	docker logs -f -n 130 $(CONTAINER_NAME)

sort_file: ## sort requirements file
	sort requirements.txt -o requirements.txt