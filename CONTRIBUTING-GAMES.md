# How to add your boardgame to the catalog

Adding a new boardgame is as simply as creating a new folder, at `content/games`, with an `index.md` markdown file describing it inside.

To help bootstrap your new game, an example structure is provided as the `boardgame-bootsrap-example` folder on the root of this repository, which can be copied to the `content/games`, naming it with the name of your game.

> [!NOTE]
> Use dashes to replace spaces on the name.

Inside the new copied folder you have a markdown file, `index.md`, that should be updated to include a proper description and characteristics of the game you wish to add. It includes tips on where to find some of the required characteristics.

> [!NOTE]
> We are only supporting Portuguese descriptions for now, with intent to soon allow multi language support on this site.

The bootstrap markdown file is composed of three sections, that should be properly filled.

## Boardgame page properties

On the top of the page there is a section surrounded by dashes that is not part of the boardgame page content but
is used to specific features of the website:

- The **title** property sets what names the game on the list pages. It also sets the title of the boardgame own page.
- The **featured_image** sets the image that gives a visual cue of the gameplay and will be rendered on the list pages. This image should be included in the boardgame folder created and named appropriately.
- The **mode** property defines if it is a *cooperative* or *competitive* game. It is used for tagging the game in list pages.
- The **difficulty** property defines if it is a *low*, *medium* or *high* difficulty game. It is used for tagging the game in list pages (refer to the game [bgg](https://boardgamegeek.com) page find an appropriate value).
- The **duration** property defines the average duration of the gameplay. It is used for tagging the game in list pages .
- The **featured** property defines if the game should appear on the home page as a featured boardgame.

```yaml
title: 'Boardgame Name'
featured_image: 'boardgame-name.jpg'
mode: 'competetive | cooperative'
difficulty: 'low | medium | high'
duration: 40
featured: true
```

## Boardgame page content

The boardgame page content structure is well defined in the bootstrap files. It has:

- A **brief presentation** that will be present on the list pages.
- A **detailed description** that feeds visitors with information that describes the game.
- A **brief conclusion** that dictates the target players and best use cases to play the game.

To ensure that the brief presentation paragraph is the only text present on the pages with boardgames list, ensure
that the following text is present and splitting that presentation from the detailed information of the game.

```html
<!--more-->
```

## Boardgame characteristics

Still part of the page content, there is a section that presents the game characteristics presented by the creators and players:


- **Duration**, with the interval of time that the gameplay takes.
- **Players**, the different number of players supported, alongside what is considered the number providing the best experience (normally found at the game's BGG page).
- **Age**, the advised minimum age to play.
- **Complexity**, representing the complexity evaluation of the game (normally found at the game's BGG page).
- **Resources**, with links for any extra resource describing the game (for example BGG).
- **Owner**, who has the game in order to request it.

## Adding a game to the catalog

Adding a game requires the creation of a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) following the presented instructions.

The PR will be reviewed by the boardgames club organizers and, upon approval and merged, automatic deployment will kick in and make it public available.
