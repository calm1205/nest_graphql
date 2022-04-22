
args=hoge

up:
	docker compose up -d

run:
	npm run start:run

bash-node:
	docker compose exec node bash

bash-postgres:
	docker compose exec postgres bash

migration-gen:
	npx typeorm migration:generate -n $(args)

migration-run:
	npm run build
	npx typeorm migration:run

seed:
	npm run seed:run

db-drop:
	npx typeorm schema:drop

sample: 
	@echo 'args is $(args).'