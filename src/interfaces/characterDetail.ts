interface Url {
  type: string
  url: string
}

interface Thumbnail {
  path: string
  extension: string
}

interface Item {
  resourceURI: string
  name: string
  type?: string
}

interface Collection {
  available: number
  returned: number
  collectionURI: string
  items: Item[]
}

interface Result {
  id: number
  name: string
  description: string
  modified: Date
  resourceURI: string
  urls: Url[]
  thumbnail: Thumbnail
  comics: Collection
  stories: Collection
  events: Collection
  series: Collection
}

interface Data {
  offset: number
  limit: number
  total: number
  count: number
  results: Result[]
}

export interface CharacterDetailResponse {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  data: Data
  etag: string
}
