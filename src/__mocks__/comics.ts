export const comicsMock = {
  code: 200,
  status: 'Ok',
  copyright: '© 2021 MARVEL',
  attributionText: 'Data provided by Marvel. © 2021 MARVEL',
  attributionHTML:
    '<a href="http://marvel.com">Data provided by Marvel. © 2021 MARVEL</a>',
  etag: '1ff05ecede5016a05db2a921f2528eae07e42ac3',
  data: {
    offset: 0,
    limit: 20,
    total: 3965,
    count: 20,
    results: [
      {
        id: 1308,
        digitalId: 0,
        title: 'Marvel Age Spider-Man Vol. 2: Everyday Hero (Digest)',
        issueNumber: 0,
        variantDescription: '',
        description:
          '"The Marvel Age of Comics continues! This time around, Spidey meets his match against such classic villains as Electro and the Lizard, and faces the return of one of his first foes: the Vulture! Plus: Spider-Man vs. the Living Brain, Peter Parker\'s fight with Flash Thompson, and the wall-crawler tackles the high-flying Human Torch!"',
        modified: '2018-01-22T15:42:11-0500',
        isbn: '0-7851-1451-3',
        upc: '5960611451-00111',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digest',
        pageCount: 96,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: '"The Marvel Age of Comics continues! This time around, Spidey meets his match against such classic villains as Electro and the Lizard, and faces the return of one of his first foes: the Vulture! Plus: Spider-Man vs. the Living Brain, Peter Parker\'s fight with Flash Thompson, and the wall-crawler tackles the high-flying Human Torch!"',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/1308',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/collection/1308/marvel_age_spider-man_vol_2_everyday_hero_digest?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/1242',
          name: 'Marvel Age Spider-Man Vol. 2: Everyday Hero (2004)',
        },
        variants: [],
        collections: [],
        collectedIssues: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/546',
            name: 'Marvel Age Spider-Man (2004) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/610',
            name: 'Marvel Age Spider-Man (2004) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/728',
            name: 'Marvel Age Spider-Man (2004) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/681',
            name: 'Marvel Age Spider-Man (2004) #5',
          },
        ],
        dates: [
          {
            type: 'onsaleDate',
            date: '2029-12-31T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 5.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/20/4bc665483c3aa',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/90/5a664c954a55b',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/80/5a6648f8aaccc',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/c0/5a6648efbc46c',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/4/00/5a6648c368f52',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/40/4bc689a4ce796',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/c0/4bc684889f8ed',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/50/4bc6809bdc81b',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/20/4bc665483c3aa',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 10,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/1308/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/694',
              name: 'Mark Brooks',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/434',
              name: 'Michael Ryan',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/424',
              name: 'Udon Comics',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/692',
              name: 'Pat Davidson',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/689',
              name: 'Derek Fridolfs',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/6743',
              name: 'Rich Perrotta',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/682',
              name: 'Todd Dezago',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/326',
              name: 'Daniel Quantz',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/691',
              name: 'Jonboy Meyers',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/688',
              name: 'Michael OHare',
              role: 'penciller',
            },
          ],
          returned: 10,
        },
        characters: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/1308/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 9,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/1308/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2759',
              name: 'Cover #2759',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2760',
              name: 'Interior #2760',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2763',
              name: 'Cover #2763',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2764',
              name: 'Interior #2764',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2769',
              name: 'Cover #2769',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2770',
              name: 'Interior #2770',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2771',
              name: 'Cover #2771',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2772',
              name: 'Interior #2772',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/65682',
              name: 'MARVEL AGE SPIDER-MAN VOL. 2: EVERYDAY HERO 0 cover',
              type: 'cover',
            },
          ],
          returned: 9,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/1308/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 21171,
        digitalId: 0,
        title: 'Amazing Spider-Man (1999) #558 (Turner Variant)',
        issueNumber: 558,
        variantDescription: 'Turner Variant',
        description:
          "The frighteningly funky and fearsome Freak returns, more powerful than ever! And this action-packed issue features the \r<br>gorgeous art of Barry Kitson - fresh from Marvel's THE ORDER!  Plus: Menace! Curt Connors!  Aunt May!  Lots of innocent bystanders!  Gale wrote it, Wacker edited it, and Marvel actually thought it was a good idea to publish it!\r<br>Rated A ...$2.99 \r<br>",
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '5960604716-55821',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "The frighteningly funky and fearsome Freak returns, more powerful than ever! And this action-packed issue features the \r<br>gorgeous art of Barry Kitson - fresh from Marvel's THE ORDER!  Plus: Menace! Curt Connors!  Aunt May!  Lots of innocent bystanders!  Gale wrote it, Wacker edited it, and Marvel actually thought it was a good idea to publish it!\r<br>Rated A ...$2.99 \r<br>",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/21171',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/21171/amazing_spider-man_1999_558_turner_variant/turner_variant?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/454',
          name: 'Amazing Spider-Man (1999 - 2013)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21172',
            name: 'Amazing Spider-Man (1999) #558',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2029-12-31T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 2.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        images: [],
        creators: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/21171/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4953',
              name: 'Bob Gale',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/481',
              name: 'Barry Kitson',
              role: 'artist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/856',
              name: 'Michael Turner',
              role: 'penciller (cover)',
            },
          ],
          returned: 3,
        },
        characters: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/21171/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/21171/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/46768',
              name: '1 of 1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/46769',
              name: '1 of 1',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/21171/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 89510,
        digitalId: 0,
        title: 'The Amazing Spider-Man (2018) #55',
        issueNumber: 55,
        variantDescription: '',
        description: null,
        modified: '2020-08-29T09:04:02-0400',
        isbn: '',
        upc: '75960608936905511',
        diamondCode: 'OCT200583',
        ean: '',
        issn: '2644-0539',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/89510',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/89510/the_amazing_spider-man_2018_55?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/The-Amazing-Spider-Man-55/digital-comic/55782?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/24396',
          name: 'The Amazing Spider-Man (2018 - Present)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/92328',
            name: 'The Amazing Spider-Man (2018) #55 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/92329',
            name: 'The Amazing Spider-Man (2018) #55 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/92579',
            name: 'The Amazing Spider-Man (2018) #55 (Variant)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2021-02-03T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2020-11-23T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/d0/5fda7db7509e5',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/d0/5fda7db7509e5',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/89510/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/430',
              name: 'Edgar Delgado',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5933',
              name: 'Patrick Gleason',
              role: 'inker (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4300',
              name: 'Nick Lowe',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11434',
              name: 'Nick Spencer',
              role: 'writer',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/89510/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/89510/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/199337',
              name: 'cover from The Amazing Spider-Man (2018) #55',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/199338',
              name: 'story from The Amazing Spider-Man (2018) #55',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/89510/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 89512,
        digitalId: 0,
        title: 'The Amazing Spider-Man (2018) #57',
        issueNumber: 57,
        variantDescription: '',
        description: null,
        modified: '2020-10-08T09:02:15-0400',
        isbn: '',
        upc: '75960608936905711',
        diamondCode: 'NOV200566',
        ean: '',
        issn: '2644-0539',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/89512',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/89512/the_amazing_spider-man_2018_57?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/24396',
          name: 'The Amazing Spider-Man (2018 - Present)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2021-01-13T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2020-12-14T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/70/5ff32d3c6e6d1',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/70/5ff32d3c6e6d1',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 7,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/89512/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/87',
              name: 'Mark Bagley',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13021',
              name: 'David Curiel',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/359',
              name: 'John Dell',
              role: 'inker (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/774',
              name: 'Morry Hollowell',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4300',
              name: 'Nick Lowe',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11434',
              name: 'Nick Spencer',
              role: 'writer',
            },
          ],
          returned: 7,
        },
        characters: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/89512/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009708',
              name: 'Mary Jane Watson',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man',
            },
          ],
          returned: 2,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/89512/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/199341',
              name: 'cover from The Amazing Spider-Man (2018) #57',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/199342',
              name: 'story from The Amazing Spider-Man (2018) #57',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/89512/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 89511,
        digitalId: 0,
        title: 'The Amazing Spider-Man (2018) #56',
        issueNumber: 56,
        variantDescription: '',
        description: null,
        modified: '2020-11-05T09:03:34-0500',
        isbn: '',
        upc: '75960608936905611',
        diamondCode: 'NOV200563',
        ean: '',
        issn: '2644-0539',
        format: 'Comic',
        pageCount: 40,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/89511',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/89511/the_amazing_spider-man_2018_56?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/The-Amazing-Spider-Man-56/digital-comic/56000?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/24396',
          name: 'The Amazing Spider-Man (2018 - Present)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/92656',
            name: 'The Amazing Spider-Man (2018) #56 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/92657',
            name: 'The Amazing Spider-Man (2018) #56 (Variant)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2021-01-06T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2020-12-07T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 4.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/20/5ff370f52d87f',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/20/5ff370f52d87f',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 7,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/89511/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/87',
              name: 'Mark Bagley',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13021',
              name: 'David Curiel',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/430',
              name: 'Edgar Delgado',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/359',
              name: 'John Dell',
              role: 'inker (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4300',
              name: 'Nick Lowe',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11434',
              name: 'Nick Spencer',
              role: 'writer',
            },
          ],
          returned: 7,
        },
        characters: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/89511/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009389',
              name: 'Kingpin',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man',
            },
          ],
          returned: 2,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/89511/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/199339',
              name: 'cover from The Amazing Spider-Man (2018) #56',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/199340',
              name: 'story from The Amazing Spider-Man (2018) #56',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/89511/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 85650,
        digitalId: 0,
        title: 'King in Black (2020) #2',
        issueNumber: 2,
        variantDescription: '',
        description: null,
        modified: '2020-08-29T09:07:32-0400',
        isbn: '',
        upc: '75960609863700211',
        diamondCode: 'OCT200510',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 40,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/85650',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/85650/king_in_black_2020_2?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/King-in-Black-2/digital-comic/55808?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/30150',
          name: 'King in Black (2020 - Present)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/92382',
            name: 'King in Black (2020) #2 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/92383',
            name: 'King in Black (2020) #2 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/92384',
            name: 'King in Black (2020) #2 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/92385',
            name: 'King in Black (2020) #2 (Variant)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2020-12-23T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2020-11-23T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 4.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/70/5fda7deae30d9',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/70/5fda7deae30d9',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 6,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/85650/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12712',
              name: 'Donny Cates',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/10172',
              name: 'Vc Clayton Cowles',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12457',
              name: 'Edward Devin Lewis',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4991',
              name: 'Frank Martin',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13260',
              name: 'Jp Mayer',
              role: 'inker (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1156',
              name: 'Ryan Stegman',
              role: 'penciler (cover)',
            },
          ],
          returned: 6,
        },
        characters: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/85650/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009165',
              name: 'Avengers',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1010787',
              name: 'Eddie Brock',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/85650/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/190262',
              name: 'cover from Venom: King in Black (2020) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/190263',
              name: 'story from Venom: King in Black (2020) #2',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/85650/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 91507,
        digitalId: 0,
        title: 'The Amazing Spider-Man (2018) #54.1',
        issueNumber: 54.1,
        variantDescription: '',
        description: null,
        modified: '2020-11-10T22:19:54-0500',
        isbn: '',
        upc: '75960609972605411',
        diamondCode: 'OCT200581',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/91507',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/91507/the_amazing_spider-man_2018_54.1?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/The-Amazing-Spider-Man-54-1/digital-comic/55783?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/24396',
          name: 'The Amazing Spider-Man (2018 - Present)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2020-12-23T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2020-11-23T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/04/5fda7dee519d8',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/04/5fda7dee519d8',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 9,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/91507/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13021',
              name: 'David Curiel',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13604',
              name: 'Marcelo Ferreira',
              role: 'inker (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4300',
              name: 'Nick Lowe',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/14075',
              name: 'Vc Ariana Maher',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13058',
              name: 'Marcio Menyz',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/495',
              name: 'Takeshi Miyazawa',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12771',
              name: 'Matthew Rosenberg',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11434',
              name: 'Nick Spencer',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13703',
              name: 'Federico Vicentini',
              role: 'inker',
            },
          ],
          returned: 9,
        },
        characters: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/91507/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009157',
              name: 'Spider-Girl (Anya Corazon)',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1017603',
              name: 'Spider-Gwen (Spider-Gwen)',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1016181',
              name: 'Spider-Man (Miles Morales)',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009608',
              name: 'Spider-Woman (Jessica Drew)',
            },
          ],
          returned: 5,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/91507/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/204096',
              name: 'cover from The Amazing Spider-Man (2020) #54.LR',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/204097',
              name: 'story from The Amazing Spider-Man (2020) #54.LR',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/91507/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 90119,
        digitalId: 0,
        title: 'Symbiote Spider-Man: King in Black (2020) #2',
        issueNumber: 2,
        variantDescription: '',
        description: null,
        modified: '2020-07-31T09:06:55-0400',
        isbn: '',
        upc: '75960609944300211',
        diamondCode: 'OCT200519',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/90119',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/90119/symbiote_spider-man_king_in_black_2020_2?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Symbiote-Spider-Man-King-in-Black-2/digital-comic/55832?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/31035',
          name: 'Symbiote Spider-Man: King in Black (2020 - Present)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/92409',
            name: 'Symbiote Spider-Man: King in Black (2020) #2 (Variant)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2020-12-16T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2020-11-16T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/0/04/5fcfb8708c8af',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/0/04/5fcfb8708c8af',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 6,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/90119/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8504',
              name: "Frank D'ARMATA",
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/121',
              name: 'Peter David',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/425',
              name: 'Greg Land',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/616',
              name: 'Jay Leisten',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12457',
              name: 'Edward Devin Lewis',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12974',
              name: 'Vc Joe Sabino',
              role: 'letterer',
            },
          ],
          returned: 6,
        },
        characters: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/90119/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/90119/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/200941',
              name: 'cover from Symbiote Spider-Man: King in Black (2020) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/200942',
              name: 'story from Symbiote Spider-Man: King in Black (2020) #2',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/90119/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 77122,
        digitalId: 0,
        title: 'The Amazing Spider-Man (2018) #54',
        issueNumber: 54,
        variantDescription: '',
        description: null,
        modified: '2020-08-29T09:03:54-0400',
        isbn: '',
        upc: '75960608936905411',
        diamondCode: 'OCT200577',
        ean: '',
        issn: '2644-0539',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/77122',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/77122/the_amazing_spider-man_2018_54?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/The-Amazing-Spider-Man-54/digital-comic/55781?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/24396',
          name: 'The Amazing Spider-Man (2018 - Present)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/92327',
            name: 'The Amazing Spider-Man (2018) #54 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/92150',
            name: 'The Amazing Spider-Man (2018) #54 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/92326',
            name: 'The Amazing Spider-Man (2018) #54 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/92578',
            name: 'The Amazing Spider-Man (2018) #54 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/93097',
            name: 'The Amazing Spider-Man (2018) #54 (Variant)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2020-12-09T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2020-11-09T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/a0/5fbd36c93fa27',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/a0/5fbd36c93fa27',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 8,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77122/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/87',
              name: 'Mark Bagley',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/430',
              name: 'Edgar Delgado',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/359',
              name: 'John Dell',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/548',
              name: 'Andrew Hennessy',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5933',
              name: 'Patrick Gleason',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4300',
              name: 'Nick Lowe',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11434',
              name: 'Nick Spencer',
              role: 'writer',
            },
          ],
          returned: 8,
        },
        characters: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77122/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77122/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/171116',
              name: 'cover from The Amazing Spider-Man (2018) #54',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/171117',
              name: 'story from The Amazing Spider-Man (2018) #54',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77122/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 75136,
        digitalId: 0,
        title: 'Spider-Man (2019) #5',
        issueNumber: 5,
        variantDescription: '',
        description: null,
        modified: '2020-11-26T09:09:48-0500',
        isbn: '',
        upc: '759606093541000511',
        diamondCode: 'NOV190910',
        ean: '',
        issn: '2574-5352',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/75136',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/75136/spider-man_2019_5?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Spider-Man-5/digital-comic/53588?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/27022',
          name: 'Spider-Man (2019 - Present)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2020-12-09T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2020-11-09T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/00/5f3ee0d58298c',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/00/5f3ee0d58298c',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 7,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/75136/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13984',
              name: 'Henry Abrams',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/14057',
              name: 'J.J Abrams',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/6170',
              name: 'Olivier Coipel',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4300',
              name: 'Nick Lowe',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/9408',
              name: 'Sara Pichelli',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/501',
              name: 'Dave Stewart',
              role: 'colorist (cover)',
            },
          ],
          returned: 7,
        },
        characters: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/75136/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/75136/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/167111',
              name: 'cover from Special Spider (2029) #5',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/167112',
              name: 'story from Special Spider (2029) #5',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/75136/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 90551,
        digitalId: 0,
        title: 'The Amazing Spider-Man (2018) #53.1',
        issueNumber: 53.1,
        variantDescription: '',
        description: null,
        modified: '2020-11-10T22:20:21-0500',
        isbn: '',
        upc: '75960609972605311',
        diamondCode: 'SEP200620',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/90551',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/90551/the_amazing_spider-man_2018_53.1?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/The-Amazing-Spider-Man-53-1/digital-comic/55677?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/24396',
          name: 'The Amazing Spider-Man (2018 - Present)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2020-11-25T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2020-11-02T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/30/5f4faf2270128',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/30/5f4faf2270128',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 7,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/90551/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13021',
              name: 'David Curiel',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13604',
              name: 'Marcelo Ferreira',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4300',
              name: 'Nick Lowe',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13058',
              name: 'Marcio Menyz',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12771',
              name: 'Matthew Rosenberg',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11434',
              name: 'Nick Spencer',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13703',
              name: 'Federico Vicentini',
              role: 'inker',
            },
          ],
          returned: 7,
        },
        characters: {
          available: 6,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/90551/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009282',
              name: 'Doctor Strange',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009157',
              name: 'Spider-Girl (Anya Corazon)',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1017603',
              name: 'Spider-Gwen (Spider-Gwen)',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1016181',
              name: 'Spider-Man (Miles Morales)',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009608',
              name: 'Spider-Woman (Jessica Drew)',
            },
          ],
          returned: 6,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/90551/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/202161',
              name: 'cover from The Amazing Spider-Man (2020) #53.LR',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/202162',
              name: 'story from The Amazing Spider-Man (2020) #53.LR',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/90551/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 77121,
        digitalId: 0,
        title: 'The Amazing Spider-Man (2018) #53',
        issueNumber: 53,
        variantDescription: '',
        description: null,
        modified: '2020-04-30T09:06:06-0400',
        isbn: '',
        upc: '75960608936905311',
        diamondCode: 'SEP200617',
        ean: '',
        issn: '2644-0539',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/77121',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/77121/the_amazing_spider-man_2018_53?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/The-Amazing-Spider-Man-53/digital-comic/55675?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/24396',
          name: 'The Amazing Spider-Man (2018 - Present)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/91643',
            name: 'The Amazing Spider-Man (2018) #53 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/92035',
            name: 'The Amazing Spider-Man (2018) #53 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/91642',
            name: 'The Amazing Spider-Man (2018) #53 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/92034',
            name: 'The Amazing Spider-Man (2018) #53 (Variant)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2020-11-18T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2020-10-26T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/d0/5faedc7538eec',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/d0/5faedc7538eec',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 7,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77121/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/87',
              name: 'Mark Bagley',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/430',
              name: 'Edgar Delgado',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/359',
              name: 'John Dell',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5933',
              name: 'Patrick Gleason',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4300',
              name: 'Nick Lowe',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11434',
              name: 'Nick Spencer',
              role: 'writer',
            },
          ],
          returned: 7,
        },
        characters: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77121/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77121/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/171114',
              name: 'cover from The Amazing Spider-Man (2018) #53',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/171115',
              name: 'story from The Amazing Spider-Man (2018) #53',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77121/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 90118,
        digitalId: 0,
        title: 'Symbiote Spider-Man: King in Black (2020) #1',
        issueNumber: 1,
        variantDescription: '',
        description: null,
        modified: '2020-07-31T09:06:50-0400',
        isbn: '',
        upc: '75960609944300111',
        diamondCode: 'SEP200664',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 40,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/90118',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/90118/symbiote_spider-man_king_in_black_2020_1?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Symbiote-Spider-Man-King-in-Black-1/digital-comic/55707?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/31035',
          name: 'Symbiote Spider-Man: King in Black (2020 - Present)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/91681',
            name: 'Symbiote Spider-Man: King in Black (2020) #1 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/91682',
            name: 'Symbiote Spider-Man: King in Black (2020) #1 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/91683',
            name: 'Symbiote Spider-Man: King in Black (2020) #1 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/92044',
            name: 'Symbiote Spider-Man: King in Black (2020) #1 (Variant)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2020-11-18T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2020-10-26T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 4.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/20/5faedc3ea6be3',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/20/5faedc3ea6be3',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 6,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/90118/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8504',
              name: "Frank D'ARMATA",
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/121',
              name: 'Peter David',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/425',
              name: 'Greg Land',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/616',
              name: 'Jay Leisten',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12457',
              name: 'Edward Devin Lewis',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12974',
              name: 'Vc Joe Sabino',
              role: 'letterer',
            },
          ],
          returned: 6,
        },
        characters: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/90118/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/90118/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/200939',
              name: 'cover from Symbiote Spider-Man: King in Black (2020) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/200940',
              name: 'story from Symbiote Spider-Man: King in Black (2020) #1',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/90118/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 77120,
        digitalId: 0,
        title: 'The Amazing Spider-Man (2018) #52',
        issueNumber: 52,
        variantDescription: '',
        description: null,
        modified: '2020-04-30T09:06:04-0400',
        isbn: '',
        upc: '75960608936905211',
        diamondCode: 'SEP200612',
        ean: '',
        issn: '2644-0539',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/77120',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/77120/the_amazing_spider-man_2018_52?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/The-Amazing-Spider-Man-52/digital-comic/55674?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/24396',
          name: 'The Amazing Spider-Man (2018 - Present)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/92067',
            name: 'The Amazing Spider-Man (2018) #52 (Variant)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2020-11-11T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2020-10-19T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/a0/5fa956fb4a6b4',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/a0/5fa956fb4a6b4',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77120/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/430',
              name: 'Edgar Delgado',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5933',
              name: 'Patrick Gleason',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4300',
              name: 'Nick Lowe',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11434',
              name: 'Nick Spencer',
              role: 'writer',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77120/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77120/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/171112',
              name: 'cover from The Amazing Spider-Man (2018) #52',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/171113',
              name: 'story from The Amazing Spider-Man (2018) #52',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77120/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 90550,
        digitalId: 0,
        title: 'The Amazing Spider-Man (2018) #52.1',
        issueNumber: 52.1,
        variantDescription: '',
        description: null,
        modified: '2020-11-10T22:20:10-0500',
        isbn: '',
        upc: '75960609972605211',
        diamondCode: 'SEP200615',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/90550',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/90550/the_amazing_spider-man_2018_52.1?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/The-Amazing-Spider-Man-52-1/digital-comic/55676?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/24396',
          name: 'The Amazing Spider-Man (2018 - Present)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2020-11-11T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2020-10-19T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/c0/5fa956e80df1c',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/c0/5fa956e80df1c',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 9,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/90550/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13162',
              name: 'Erick Arciniega',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13058',
              name: 'Marcio Menyz',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13021',
              name: 'David Curiel',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13604',
              name: 'Marcelo Ferreira',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4300',
              name: 'Nick Lowe',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/14075',
              name: 'Vc Ariana Maher',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12771',
              name: 'Matthew Rosenberg',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11434',
              name: 'Nick Spencer',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13703',
              name: 'Federico Vicentini',
              role: 'inker',
            },
          ],
          returned: 9,
        },
        characters: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/90550/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009282',
              name: 'Doctor Strange',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man',
            },
          ],
          returned: 2,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/90550/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/202159',
              name: 'cover from The Amazing Spider-Man (2020) #52.LR',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/202160',
              name: 'story from The Amazing Spider-Man (2020) #52.LR',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/90550/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 77119,
        digitalId: 0,
        title: 'The Amazing Spider-Man (2018) #51',
        issueNumber: 51,
        variantDescription: '',
        description: null,
        modified: '2020-04-30T09:06:03-0400',
        isbn: '',
        upc: '75960608936905111',
        diamondCode: 'AUG200645',
        ean: '',
        issn: '2644-0539',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/77119',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/77119/the_amazing_spider-man_2018_51?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/The-Amazing-Spider-Man-51/digital-comic/55542?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/24396',
          name: 'The Amazing Spider-Man (2018 - Present)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/91451',
            name: 'The Amazing Spider-Man (2018) #51 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/91450',
            name: 'The Amazing Spider-Man (2018) #51 (Variant)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2020-10-28T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2020-10-05T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/70/5f2da4cf3ba0a',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/70/5f2da4cf3ba0a',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77119/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/430',
              name: 'Edgar Delgado',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5933',
              name: 'Patrick Gleason',
              role: 'inker (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4300',
              name: 'Nick Lowe',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11434',
              name: 'Nick Spencer',
              role: 'writer',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77119/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77119/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/171110',
              name: 'cover from The Amazing Spider-Man (2018) #51',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/171111',
              name: 'story from The Amazing Spider-Man (2018) #51',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77119/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 77133,
        digitalId: 0,
        title: 'Daredevil (2019) #23',
        issueNumber: 23,
        variantDescription: '',
        description: null,
        modified: '2020-05-29T09:03:04-0400',
        isbn: '',
        upc: '75960609142302311',
        diamondCode: 'AUG200717',
        ean: '',
        issn: '2578-8779',
        format: 'Comic',
        pageCount: 32,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/77133',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/77133/daredevil_2019_23?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Daredevil-23/digital-comic/55549?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/26080',
          name: 'Daredevil (2019 - Present)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/90607',
            name: 'Daredevil (2019) #23 (Variant)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2020-10-21T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2020-09-28T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/90/5f2da4b6844fd',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/90/5f2da4b6844fd',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 6,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77133/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11748',
              name: 'Marco Checchetto',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/10172',
              name: 'Vc Clayton Cowles',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12457',
              name: 'Edward Devin Lewis',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13058',
              name: 'Marcio Menyz',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/10279',
              name: 'Matthew Wilson',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12494',
              name: 'Chip Zdarsky',
              role: 'writer',
            },
          ],
          returned: 6,
        },
        characters: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77133/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009262',
              name: 'Daredevil',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man',
            },
          ],
          returned: 2,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77133/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/171138',
              name: 'cover from Daredevil (2019) #23',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/171139',
              name: 'story from Daredevil (2019) #23',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77133/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 77118,
        digitalId: 0,
        title: 'The Amazing Spider-Man (2018) #50',
        issueNumber: 50,
        variantDescription: '',
        description: null,
        modified: '2020-08-02T09:02:26-0400',
        isbn: '',
        upc: '75960608936905011',
        diamondCode: 'AUG200636',
        ean: '',
        issn: '2644-0539',
        format: 'Comic',
        pageCount: 56,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/77118',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/77118/the_amazing_spider-man_2018_50?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/The-Amazing-Spider-Man-50/digital-comic/55541?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/24396',
          name: 'The Amazing Spider-Man (2018 - Present)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/91449',
            name: 'The Amazing Spider-Man (2018) #50 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/91445',
            name: 'The Amazing Spider-Man (2018) #50 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/91446',
            name: 'The Amazing Spider-Man (2018) #50 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/91366',
            name: 'The Amazing Spider-Man (2018) #50 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/91448',
            name: 'The Amazing Spider-Man (2018) #50 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/91583',
            name: 'The Amazing Spider-Man (2018) #50 (Variant)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2020-10-14T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2020-09-21T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 5.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/20/5f2d7d954e9d1',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/20/5f2d7d954e9d1',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 6,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77118/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/430',
              name: 'Edgar Delgado',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5933',
              name: 'Patrick Gleason',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/774',
              name: 'Morry Hollowell',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4300',
              name: 'Nick Lowe',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11434',
              name: 'Nick Spencer',
              role: 'writer',
            },
          ],
          returned: 6,
        },
        characters: {
          available: 4,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77118/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1017603',
              name: 'Spider-Gwen (Spider-Gwen)',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1016181',
              name: 'Spider-Man (Miles Morales)',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009608',
              name: 'Spider-Woman (Jessica Drew)',
            },
          ],
          returned: 4,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77118/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/171108',
              name: 'cover from The Amazing Spider-Man (2018) #50',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/171109',
              name: 'story from The Amazing Spider-Man (2018) #50',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77118/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 77117,
        digitalId: 55434,
        title: 'The Amazing Spider-Man (2018) #49',
        issueNumber: 49,
        variantDescription: '',
        description: null,
        modified: '2021-01-08T01:30:22-0500',
        isbn: '',
        upc: '75960608936904911',
        diamondCode: 'JUL200608',
        ean: '',
        issn: '2644-0539',
        format: 'Comic',
        pageCount: 96,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/77117',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/77117/the_amazing_spider-man_2018_49?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/The-Amazing-Spider-Man-49/digital-comic/55434?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=55434&utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/55434?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/24396',
          name: 'The Amazing Spider-Man (2018 - Present)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2020-10-07T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2020-09-07T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2021-01-11T00:00:00-0500',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2020-10-07T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 9.99,
          },
          {
            type: 'digitalPurchasePrice',
            price: 9.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/5f11ee848c407',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/5f11ee848c407',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 21,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77117/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13081',
              name: 'Saladin Ahmed',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1231',
              name: 'Kurt Busiek',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11434',
              name: 'Nick Spencer',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/232',
              name: 'Chris Bachalo',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12744',
              name: 'Tamra Bonvillain',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13021',
              name: 'David Curiel',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8504',
              name: "Frank D'ARMATA",
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/430',
              name: 'Edgar Delgado',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/87',
              name: 'Mark Bagley',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/72',
              name: 'Humberto Ramos',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/359',
              name: 'John Dell',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12979',
              name: 'Aaron Kuder',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11930',
              name: 'Tradd Moore',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/447',
              name: 'Victor Olazaba',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13320',
              name: 'Cliff Rathburn',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/427',
              name: 'Tim Townsend',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/10454',
              name: 'Nathan Fairbairn',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4300',
              name: 'Nick Lowe',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13296',
              name: 'Ryan Ottley',
              role: 'penciler (cover)',
            },
          ],
          returned: 20,
        },
        characters: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77117/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77117/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/171106',
              name: 'cover from The Amazing Spider-Man (2018) #49',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/171107',
              name: 'story from The Amazing Spider-Man (2018) #49',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/77117/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 78358,
        digitalId: 54924,
        title: 'Spider-Man: Marvels Snapshots (2020) #1',
        issueNumber: 1,
        variantDescription: '',
        description: null,
        modified: '2020-09-29T15:21:02-0400',
        isbn: '',
        upc: '759606096061000111',
        diamondCode: 'MAR200970',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 40,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/78358',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/78358/spider-man_marvels_snapshots_2020_1?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Spider-Man-Marvels-Snapshots-1/digital-comic/54924?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=54924&utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/54924?utm_campaign=apiRef&utm_source=d7b4e98a634b189f85cbf9a7d36d0319',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/27945',
          name: 'Spider-Man: Marvels Snapshots (2020)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2020-10-07T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2020-09-14T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2021-01-11T00:00:00-0500',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2020-10-07T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 4.99,
          },
          {
            type: 'digitalPurchasePrice',
            price: 4.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/70/5f735c4105ffc',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/70/5f735c4105ffc',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/78358/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11482',
              name: 'Jesus Aburtov',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1871',
              name: 'Ken Bruzenak',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/808',
              name: 'Howard Chaykin',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/63',
              name: 'Alex Ross',
              role: 'painter (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13027',
              name: 'Darren Shan',
              role: 'editor',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 1,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/78358/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/78358/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/173732',
              name: 'cover from Marvels Snapshots: TBD C (2029) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/173733',
              name: 'story from Marvels Snapshots: TBD C (2029) #1',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/78358/events',
          items: [],
          returned: 0,
        },
      },
    ],
  },
}
