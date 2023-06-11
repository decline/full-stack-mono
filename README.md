# Full Stack Monorepo Development with Nx

## Create an Nx workspace

```shell
npx create-nx-workspace --pm pnpm
```

## Plugins

```shell
# list all plugins
nx list
# list details of specific plugin
nx list @nx/angular
# get help for a specific generator
nx g @nx/angular:library --help
```

## Create a set of apps and libraries

Let's install some dependencies first:

```shell
pnpm add -D @nx/nest

```

You can append the `--dry-run` flag to test your commands first without creating any files

```shell
# api app
nx g @nx/nest:application --name=musx-api --frontendProject=musx  --strict --tags=scope:app
# feature library
nx g @nx/angular:library --name=concert/feature --standalone --prefix=fsm --strict --style=scss --tags=scope:concert,type:feature --routing
# data-access library
nx g @nx/angular:library --name=concert/data-access --standalone --prefix=fsm --strict --style=scss --tags=scope:concert,type:data-access
# ui library
nx g @nx/angular:library --name=concert/ui --standalone --prefix=fsm --strict --style=scss --tags=scope:concert,type:ui
# utility library
nx g @nx/angular:library --name=concert/utility --standalone --prefix=fsm --strict --style=scss --tags=scope:concert,type:utility
# api library
nx g @nx/nest:library --name=concert/api --strict --tags=scope:concert,type:api
# shared library
nx g @nx/js:library --name=concert/shared --strict --tags=scope:concert,type:shared --unitTestRunner=jest --bundler=none
```

## Add tailwind

```shell
npx nx g @nx/angular:setup-tailwind musx
```

## Create some services, controllers, etc.

```shell
# controller
nx g  @nx/nest:controller --project=concert-api --directory=lib
```
