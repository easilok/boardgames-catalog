# AddRoll Boardgames Catalog

This repository contains an [Hugo](https://gohugo.io/) based static website used as the Homepage of a boardgames club.

It can be used by anyone by simply forking it and replace the contents of `content/games` with one owns boardgames.

> [!WARNING]
> This site is still under development. Refer to the [Tasks](#tasks) section on the next planned actions

## Development

As this website is based on the Hugo static site generator, it requires Hugo to be installed. The official documentation provides [different setup instructions](https://gohugo.io/installation/linux/) that can be followed.

This repository also provides a [mise](https://mise.jdx.dev/getting-started.html) configuration, that will properly setup your environment to work with this application, by simply run:

```shell
mise install
```

After installing all requirements, running the following command will start the Hugo development server on [localhost:1313](http:localhost:1313).

## Adding Games

Adding games is as simply as creating a markdown file, with the game name, on the `content/games`. 

These kind of markdown files need to follow some specific rules, in order for proper information to be show to the user.

If you want to add a boardgame to the catalog, create a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) following the instructions on the [CONTRIBUTING-GAMES.md file](./CONTRIBUTING-GAMES.md).

## Development resourses

As this website is built on top of Hugo, its [official documentation](https://gohugo.io/documentation/) is the most important resource.

This website has customizations of the [ananke theme for Hugo](https://github.com/theNewDynamic/gohugo-theme-ananke), the official getting started theme.

For styling, and inherited from the *ananke theme*, the [tachyons CSS framework](https://tachyons.io/docs/) is used.

### Tasks

- [ ] Improve layout of game metrics on lists
- [ ] Improve image sizing on game card/article
- [ ] Improve [pagination buttons](https://gohugo.io/templates/pagination/#navigation) (centered and better buttons)
- [ ] Add countdown to next event
- [ ] Add card like style to lists
- [ ] Improve site navbar
- [ ] Improve sizing/position of feature image to the home page
- [ ] Add filters by playing modes and difficulty in game list
- [ ] Add search bar on game list/everywhere 
