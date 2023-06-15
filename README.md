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

Let's setup some dependencies first:

```shell
pnpm add -D @nx/nest && nx g @nx/angular:setup-tailwind musx
```

You can also omit the flags, the Nx CLI will then ask you for the necessary values. You can append the `--dry-run` flag to test your commands first without creating any files. There are also IDE integrations for the CLI.

```shell
# feature library
nx g @nx/angular:library --name=concert/feature --standalone --prefix=fsm --strict --style=scss --tags=scope:concert,type:feature --routing
# data-access library
nx g @nx/angular:library --name=concert/data-access --standalone --prefix=fsm --strict --style=scss --tags=scope:concert,type:data-access
# ui library
nx g @nx/angular:library --name=concert/ui --standalone --prefix=fsm --strict --style=scss --tags=scope:concert,type:ui
# utility library
nx g @nx/angular:library --name=concert/utility --standalone --prefix=fsm --strict --style=scss --tags=scope:concert,type:utility
# api app
nx g @nx/nest:application --name=musx-api --frontendProject=musx  --strict --tags=type:app
# api library
nx g @nx/nest:library --name=concert/api --strict --tags=scope:concert,type:api
# shared library
nx g @nx/js:library --name=concert/shared --strict --tags=scope:concert,type:shared --unitTestRunner=jest --bundler=none
```

## Visualize our workspace

```shell
nx graph --watch
```

## Create some services, controllers, etc.

```shell
# service
nx g @nx/angular:service --project=concert-data-access --name=services/concert
# controller
nx g  @nx/nest:controller --project=concert-api --directory=lib --name=concert
# interface
nx g @schematics/angular:interface --project=concert-shared --name=interfaces/concert --type=interface
```

## Serve many

```shell
nx run-many -t serve -p musx,musx-api
```

## Generators

```shell
# install @nx/plugin
pnpm add @nx/plugin
# create a plugin
nx g @nx/plugin:plugin
# create a generator
nx g @nx/plugin:generator
```
