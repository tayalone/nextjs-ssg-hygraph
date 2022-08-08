export interface HeroBanner {
  height: string
  url: string
  width: string
  __typename: string
}

export interface Blog {
  id: string
  title: string
  subtitle: string
  slug: string
  updatedAt: string
  heroBanner: HeroBanner
}
