import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  PrismicImageThumbnailsType: any;
};

export type Query = {
  __typename?: 'Query';
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  prismicIndexPage?: Maybe<PrismicIndexPage>;
  allPrismicIndexPage: PrismicIndexPageConnection;
  prismicTest?: Maybe<PrismicTest>;
  allPrismicTest: PrismicTestConnection;
  prismicFaqPage?: Maybe<PrismicFaqPage>;
  allPrismicFaqPage: PrismicFaqPageConnection;
  prismicFaqEntry?: Maybe<PrismicFaqEntry>;
  allPrismicFaqEntry: PrismicFaqEntryConnection;
  faqJson?: Maybe<FaqJson>;
  allFaqJson: FaqJsonConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  childFaqJson?: Maybe<FaqJsonFilterInput>;
};

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<DateQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicIndexPageArgs = {
  data?: Maybe<PrismicIndexPageDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllPrismicIndexPageArgs = {
  filter?: Maybe<PrismicIndexPageFilterInput>;
  sort?: Maybe<PrismicIndexPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicTestArgs = {
  data?: Maybe<PrismicTestDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllPrismicTestArgs = {
  filter?: Maybe<PrismicTestFilterInput>;
  sort?: Maybe<PrismicTestSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicFaqPageArgs = {
  data?: Maybe<PrismicFaqPageDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllPrismicFaqPageArgs = {
  filter?: Maybe<PrismicFaqPageFilterInput>;
  sort?: Maybe<PrismicFaqPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicFaqEntryArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  slugs?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<PrismicFaqEntryDataFilterInput>;
  prismicId?: Maybe<StringQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  dataRaw?: Maybe<PrismicFaqEntryDataRawFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
  _previewable?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllPrismicFaqEntryArgs = {
  filter?: Maybe<PrismicFaqEntryFilterInput>;
  sort?: Maybe<PrismicFaqEntrySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryFaqJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  section_main?: Maybe<FaqJsonSection_MainFilterInput>;
};

export type QueryAllFaqJsonArgs = {
  filter?: Maybe<FaqJsonFilterInput>;
  sort?: Maybe<FaqJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type FaqJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  section_main?: Maybe<FaqJsonSection_MainFilterInput>;
};

export type FaqJsonSection_MainFilterInput = {
  headline?: Maybe<FaqJsonSection_MainHeadlineFilterInput>;
  texts?: Maybe<FaqJsonSection_MainTextsFilterInput>;
  sections?: Maybe<FaqJsonSection_MainSectionsFilterListInput>;
};

export type FaqJsonSection_MainHeadlineFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type FaqJsonSection_MainTextsFilterInput = {
  permalink?: Maybe<StringQueryOperatorInput>;
  search?: Maybe<StringQueryOperatorInput>;
  questions?: Maybe<StringQueryOperatorInput>;
  to_top?: Maybe<StringQueryOperatorInput>;
};

export type FaqJsonSection_MainSectionsFilterListInput = {
  elemMatch?: Maybe<FaqJsonSection_MainSectionsFilterInput>;
};

export type FaqJsonSection_MainSectionsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  active?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  accordion?: Maybe<FaqJsonSection_MainSectionsAccordionFilterListInput>;
};

export type FaqJsonSection_MainSectionsAccordionFilterListInput = {
  elemMatch?: Maybe<FaqJsonSection_MainSectionsAccordionFilterInput>;
};

export type FaqJsonSection_MainSectionsAccordionFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  anchor?: Maybe<StringQueryOperatorInput>;
  active?: Maybe<BooleanQueryOperatorInput>;
  textblock?: Maybe<StringQueryOperatorInput>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
  childFaqJson?: Maybe<FaqJson>;
};

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
}

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION',
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE',
}

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizes = {
  __typename?: 'ImageSharpSizes';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark';
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  fields?: Maybe<MarkdownRemarkFields>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};

export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};

export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};

export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatter = {
  __typename?: 'MarkdownRemarkFrontmatter';
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export enum MarkdownExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
  Markdown = 'MARKDOWN',
}

export type MarkdownRemarkFields = {
  __typename?: 'MarkdownRemarkFields';
  slug?: Maybe<Scalars['String']>;
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type FaqJson = Node & {
  __typename?: 'FaqJson';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  section_main?: Maybe<FaqJsonSection_Main>;
};

export type FaqJsonSection_Main = {
  __typename?: 'FaqJsonSection_main';
  headline?: Maybe<FaqJsonSection_MainHeadline>;
  texts?: Maybe<FaqJsonSection_MainTexts>;
  sections?: Maybe<Array<Maybe<FaqJsonSection_MainSections>>>;
};

export type FaqJsonSection_MainHeadline = {
  __typename?: 'FaqJsonSection_mainHeadline';
  title?: Maybe<Scalars['String']>;
};

export type FaqJsonSection_MainTexts = {
  __typename?: 'FaqJsonSection_mainTexts';
  permalink?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  questions?: Maybe<Scalars['String']>;
  to_top?: Maybe<Scalars['String']>;
};

export type FaqJsonSection_MainSections = {
  __typename?: 'FaqJsonSection_mainSections';
  title?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  accordion?: Maybe<Array<Maybe<FaqJsonSection_MainSectionsAccordion>>>;
};

export type FaqJsonSection_MainSectionsAccordion = {
  __typename?: 'FaqJsonSection_mainSectionsAccordion';
  title?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  textblock?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  childFaqJson?: Maybe<FaqJsonFilterInput>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  PublicUrl = 'publicURL',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
  ChildMarkdownRemarkFrontmatterDescription = 'childMarkdownRemark___frontmatter___description',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
  ChildFaqJsonId = 'childFaqJson___id',
  ChildFaqJsonParentId = 'childFaqJson___parent___id',
  ChildFaqJsonParentParentId = 'childFaqJson___parent___parent___id',
  ChildFaqJsonParentParentChildren = 'childFaqJson___parent___parent___children',
  ChildFaqJsonParentChildren = 'childFaqJson___parent___children',
  ChildFaqJsonParentChildrenId = 'childFaqJson___parent___children___id',
  ChildFaqJsonParentChildrenChildren = 'childFaqJson___parent___children___children',
  ChildFaqJsonParentInternalContent = 'childFaqJson___parent___internal___content',
  ChildFaqJsonParentInternalContentDigest = 'childFaqJson___parent___internal___contentDigest',
  ChildFaqJsonParentInternalDescription = 'childFaqJson___parent___internal___description',
  ChildFaqJsonParentInternalFieldOwners = 'childFaqJson___parent___internal___fieldOwners',
  ChildFaqJsonParentInternalIgnoreType = 'childFaqJson___parent___internal___ignoreType',
  ChildFaqJsonParentInternalMediaType = 'childFaqJson___parent___internal___mediaType',
  ChildFaqJsonParentInternalOwner = 'childFaqJson___parent___internal___owner',
  ChildFaqJsonParentInternalType = 'childFaqJson___parent___internal___type',
  ChildFaqJsonChildren = 'childFaqJson___children',
  ChildFaqJsonChildrenId = 'childFaqJson___children___id',
  ChildFaqJsonChildrenParentId = 'childFaqJson___children___parent___id',
  ChildFaqJsonChildrenParentChildren = 'childFaqJson___children___parent___children',
  ChildFaqJsonChildrenChildren = 'childFaqJson___children___children',
  ChildFaqJsonChildrenChildrenId = 'childFaqJson___children___children___id',
  ChildFaqJsonChildrenChildrenChildren = 'childFaqJson___children___children___children',
  ChildFaqJsonChildrenInternalContent = 'childFaqJson___children___internal___content',
  ChildFaqJsonChildrenInternalContentDigest = 'childFaqJson___children___internal___contentDigest',
  ChildFaqJsonChildrenInternalDescription = 'childFaqJson___children___internal___description',
  ChildFaqJsonChildrenInternalFieldOwners = 'childFaqJson___children___internal___fieldOwners',
  ChildFaqJsonChildrenInternalIgnoreType = 'childFaqJson___children___internal___ignoreType',
  ChildFaqJsonChildrenInternalMediaType = 'childFaqJson___children___internal___mediaType',
  ChildFaqJsonChildrenInternalOwner = 'childFaqJson___children___internal___owner',
  ChildFaqJsonChildrenInternalType = 'childFaqJson___children___internal___type',
  ChildFaqJsonInternalContent = 'childFaqJson___internal___content',
  ChildFaqJsonInternalContentDigest = 'childFaqJson___internal___contentDigest',
  ChildFaqJsonInternalDescription = 'childFaqJson___internal___description',
  ChildFaqJsonInternalFieldOwners = 'childFaqJson___internal___fieldOwners',
  ChildFaqJsonInternalIgnoreType = 'childFaqJson___internal___ignoreType',
  ChildFaqJsonInternalMediaType = 'childFaqJson___internal___mediaType',
  ChildFaqJsonInternalOwner = 'childFaqJson___internal___owner',
  ChildFaqJsonInternalType = 'childFaqJson___internal___type',
  ChildFaqJsonSectionMainHeadlineTitle = 'childFaqJson___section_main___headline___title',
  ChildFaqJsonSectionMainTextsPermalink = 'childFaqJson___section_main___texts___permalink',
  ChildFaqJsonSectionMainTextsSearch = 'childFaqJson___section_main___texts___search',
  ChildFaqJsonSectionMainTextsQuestions = 'childFaqJson___section_main___texts___questions',
  ChildFaqJsonSectionMainTextsToTop = 'childFaqJson___section_main___texts___to_top',
  ChildFaqJsonSectionMainSections = 'childFaqJson___section_main___sections',
  ChildFaqJsonSectionMainSectionsTitle = 'childFaqJson___section_main___sections___title',
  ChildFaqJsonSectionMainSectionsActive = 'childFaqJson___section_main___sections___active',
  ChildFaqJsonSectionMainSectionsId = 'childFaqJson___section_main___sections___id',
  ChildFaqJsonSectionMainSectionsAccordion = 'childFaqJson___section_main___sections___accordion',
}

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  previous?: Maybe<SitePageContextPreviousFilterInput>;
  next?: Maybe<SitePageContextNextFilterInput>;
};

export type SitePageContextPreviousFilterInput = {
  fields?: Maybe<SitePageContextPreviousFieldsFilterInput>;
  frontmatter?: Maybe<SitePageContextPreviousFrontmatterFilterInput>;
};

export type SitePageContextPreviousFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPreviousFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNextFilterInput = {
  fields?: Maybe<SitePageContextNextFieldsFilterInput>;
  frontmatter?: Maybe<SitePageContextNextFrontmatterFilterInput>;
};

export type SitePageContextNextFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNextFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  path?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  wrapperStyle?: Maybe<StringQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  showCaptions?: Maybe<BooleanQueryOperatorInput>;
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
  disableBgImage?: Maybe<BooleanQueryOperatorInput>;
  ignoreFileExtensions?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  displayName?: Maybe<BooleanQueryOperatorInput>;
  repositoryName?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  schemas?: Maybe<SitePluginPluginOptionsSchemasFilterInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  wrapperStyle?: Maybe<StringQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  showCaptions?: Maybe<BooleanQueryOperatorInput>;
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
  disableBgImage?: Maybe<BooleanQueryOperatorInput>;
  ignoreFileExtensions?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasFilterInput = {
  index_page?: Maybe<SitePluginPluginOptionsSchemasIndex_PageFilterInput>;
  test?: Maybe<SitePluginPluginOptionsSchemasTestFilterInput>;
  faq_page?: Maybe<SitePluginPluginOptionsSchemasFaq_PageFilterInput>;
};

export type SitePluginPluginOptionsSchemasIndex_PageFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasIndex_PageMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasIndex_PageMainFilterInput = {
  uid?: Maybe<SitePluginPluginOptionsSchemasIndex_PageMainUidFilterInput>;
  title?: Maybe<SitePluginPluginOptionsSchemasIndex_PageMainTitleFilterInput>;
  description?: Maybe<SitePluginPluginOptionsSchemasIndex_PageMainDescriptionFilterInput>;
};

export type SitePluginPluginOptionsSchemasIndex_PageMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasIndex_PageMainUidConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasIndex_PageMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasIndex_PageMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasIndex_PageMainTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasIndex_PageMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasIndex_PageMainDescriptionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasIndex_PageMainDescriptionConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasIndex_PageMainDescriptionConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasTestFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasTestMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasTestMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasTestMainTitleFilterInput>;
  text?: Maybe<SitePluginPluginOptionsSchemasTestMainTextFilterInput>;
  image?: Maybe<SitePluginPluginOptionsSchemasTestMainImageFilterInput>;
};

export type SitePluginPluginOptionsSchemasTestMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasTestMainTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasTestMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasTestMainTextFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasTestMainTextConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasTestMainTextConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasTestMainImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasTestMainImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasTestMainImageConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasFaq_PageFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMainTitleFilterInput>;
  description?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMainDescriptionFilterInput>;
  title_group_1?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMainTitle_Group_1FilterInput>;
  entries?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMainEntriesFilterInput>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMainTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainDescriptionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMainDescriptionConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainDescriptionConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainTitle_Group_1FilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMainTitle_Group_1ConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainTitle_Group_1ConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainEntriesFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFilterInput = {
  fields?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsFilterInput = {
  question?: Maybe<
    SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsQuestionFilterInput
  >;
  answer?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsAnswerFilterInput>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsQuestionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsQuestionConfigFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsQuestionConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsAnswerFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<
    SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsAnswerConfigFilterInput
  >;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsAnswerConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  slug?: Maybe<Scalars['String']>;
  previous?: Maybe<SitePageContextPrevious>;
  next?: Maybe<SitePageContextNext>;
};

export type SitePageContextPrevious = {
  __typename?: 'SitePageContextPrevious';
  fields?: Maybe<SitePageContextPreviousFields>;
  frontmatter?: Maybe<SitePageContextPreviousFrontmatter>;
};

export type SitePageContextPreviousFields = {
  __typename?: 'SitePageContextPreviousFields';
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextPreviousFrontmatter = {
  __typename?: 'SitePageContextPreviousFrontmatter';
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextNext = {
  __typename?: 'SitePageContextNext';
  fields?: Maybe<SitePageContextNextFields>;
  frontmatter?: Maybe<SitePageContextNextFrontmatter>;
};

export type SitePageContextNextFields = {
  __typename?: 'SitePageContextNextFields';
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextNextFrontmatter = {
  __typename?: 'SitePageContextNextFrontmatter';
  title?: Maybe<Scalars['String']>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  path?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  maxWidth?: Maybe<Scalars['Int']>;
  pathPrefix?: Maybe<Scalars['String']>;
  wrapperStyle?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  showCaptions?: Maybe<Scalars['Boolean']>;
  markdownCaptions?: Maybe<Scalars['Boolean']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  tracedSVG?: Maybe<Scalars['Boolean']>;
  loading?: Maybe<Scalars['String']>;
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
  disableBgImage?: Maybe<Scalars['Boolean']>;
  ignoreFileExtensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['Boolean']>;
  repositoryName?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  schemas?: Maybe<SitePluginPluginOptionsSchemas>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsPlugins = {
  __typename?: 'SitePluginPluginOptionsPlugins';
  resolve?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  __typename?: 'SitePluginPluginOptionsPluginsPluginOptions';
  maxWidth?: Maybe<Scalars['Int']>;
  pathPrefix?: Maybe<Scalars['String']>;
  wrapperStyle?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  showCaptions?: Maybe<Scalars['Boolean']>;
  markdownCaptions?: Maybe<Scalars['Boolean']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  tracedSVG?: Maybe<Scalars['Boolean']>;
  loading?: Maybe<Scalars['String']>;
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
  disableBgImage?: Maybe<Scalars['Boolean']>;
  ignoreFileExtensions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsSchemas = {
  __typename?: 'SitePluginPluginOptionsSchemas';
  index_page?: Maybe<SitePluginPluginOptionsSchemasIndex_Page>;
  test?: Maybe<SitePluginPluginOptionsSchemasTest>;
  faq_page?: Maybe<SitePluginPluginOptionsSchemasFaq_Page>;
};

export type SitePluginPluginOptionsSchemasIndex_Page = {
  __typename?: 'SitePluginPluginOptionsSchemasIndex_page';
  Main?: Maybe<SitePluginPluginOptionsSchemasIndex_PageMain>;
};

export type SitePluginPluginOptionsSchemasIndex_PageMain = {
  __typename?: 'SitePluginPluginOptionsSchemasIndex_pageMain';
  uid?: Maybe<SitePluginPluginOptionsSchemasIndex_PageMainUid>;
  title?: Maybe<SitePluginPluginOptionsSchemasIndex_PageMainTitle>;
  description?: Maybe<SitePluginPluginOptionsSchemasIndex_PageMainDescription>;
};

export type SitePluginPluginOptionsSchemasIndex_PageMainUid = {
  __typename?: 'SitePluginPluginOptionsSchemasIndex_pageMainUid';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasIndex_PageMainUidConfig>;
};

export type SitePluginPluginOptionsSchemasIndex_PageMainUidConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasIndex_pageMainUidConfig';
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasIndex_PageMainTitle = {
  __typename?: 'SitePluginPluginOptionsSchemasIndex_pageMainTitle';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasIndex_PageMainTitleConfig>;
};

export type SitePluginPluginOptionsSchemasIndex_PageMainTitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasIndex_pageMainTitleConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasIndex_PageMainDescription = {
  __typename?: 'SitePluginPluginOptionsSchemasIndex_pageMainDescription';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasIndex_PageMainDescriptionConfig>;
};

export type SitePluginPluginOptionsSchemasIndex_PageMainDescriptionConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasIndex_pageMainDescriptionConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasTest = {
  __typename?: 'SitePluginPluginOptionsSchemasTest';
  Main?: Maybe<SitePluginPluginOptionsSchemasTestMain>;
};

export type SitePluginPluginOptionsSchemasTestMain = {
  __typename?: 'SitePluginPluginOptionsSchemasTestMain';
  title?: Maybe<SitePluginPluginOptionsSchemasTestMainTitle>;
  text?: Maybe<SitePluginPluginOptionsSchemasTestMainText>;
  image?: Maybe<SitePluginPluginOptionsSchemasTestMainImage>;
};

export type SitePluginPluginOptionsSchemasTestMainTitle = {
  __typename?: 'SitePluginPluginOptionsSchemasTestMainTitle';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasTestMainTitleConfig>;
};

export type SitePluginPluginOptionsSchemasTestMainTitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasTestMainTitleConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasTestMainText = {
  __typename?: 'SitePluginPluginOptionsSchemasTestMainText';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasTestMainTextConfig>;
};

export type SitePluginPluginOptionsSchemasTestMainTextConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasTestMainTextConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasTestMainImage = {
  __typename?: 'SitePluginPluginOptionsSchemasTestMainImage';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasTestMainImageConfig>;
};

export type SitePluginPluginOptionsSchemasTestMainImageConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasTestMainImageConfig';
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasFaq_Page = {
  __typename?: 'SitePluginPluginOptionsSchemasFaq_page';
  Main?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMain>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMain = {
  __typename?: 'SitePluginPluginOptionsSchemasFaq_pageMain';
  title?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMainTitle>;
  description?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMainDescription>;
  title_group_1?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMainTitle_Group_1>;
  entries?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMainEntries>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainTitle = {
  __typename?: 'SitePluginPluginOptionsSchemasFaq_pageMainTitle';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMainTitleConfig>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainTitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasFaq_pageMainTitleConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainDescription = {
  __typename?: 'SitePluginPluginOptionsSchemasFaq_pageMainDescription';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMainDescriptionConfig>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainDescriptionConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasFaq_pageMainDescriptionConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainTitle_Group_1 = {
  __typename?: 'SitePluginPluginOptionsSchemasFaq_pageMainTitle_group_1';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMainTitle_Group_1Config>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainTitle_Group_1Config = {
  __typename?: 'SitePluginPluginOptionsSchemasFaq_pageMainTitle_group_1Config';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainEntries = {
  __typename?: 'SitePluginPluginOptionsSchemasFaq_pageMainEntries';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfig>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfig';
  fields?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFields>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFields = {
  __typename?: 'SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFields';
  question?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsQuestion>;
  answer?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsAnswer>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsQuestion = {
  __typename?: 'SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsQuestion';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsQuestionConfig>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsQuestionConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsQuestionConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsAnswer = {
  __typename?: 'SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsAnswer';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsAnswerConfig>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsAnswerConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsAnswerConfig';
  multi?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextSlug = 'context___slug',
  ContextPreviousFieldsSlug = 'context___previous___fields___slug',
  ContextPreviousFrontmatterTitle = 'context___previous___frontmatter___title',
  ContextNextFieldsSlug = 'context___next___fields___slug',
  ContextNextFrontmatterTitle = 'context___next___frontmatter___title',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
  PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
  PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
  PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
  PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
  PluginCreatorPluginOptionsPluginsBrowserApIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
  PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsMaxWidth = 'pluginCreator___pluginOptions___maxWidth',
  PluginCreatorPluginOptionsPathPrefix = 'pluginCreator___pluginOptions___pathPrefix',
  PluginCreatorPluginOptionsWrapperStyle = 'pluginCreator___pluginOptions___wrapperStyle',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___backgroundColor',
  PluginCreatorPluginOptionsLinkImagesToOriginal = 'pluginCreator___pluginOptions___linkImagesToOriginal',
  PluginCreatorPluginOptionsShowCaptions = 'pluginCreator___pluginOptions___showCaptions',
  PluginCreatorPluginOptionsMarkdownCaptions = 'pluginCreator___pluginOptions___markdownCaptions',
  PluginCreatorPluginOptionsWithWebp = 'pluginCreator___pluginOptions___withWebp',
  PluginCreatorPluginOptionsTracedSvg = 'pluginCreator___pluginOptions___tracedSVG',
  PluginCreatorPluginOptionsLoading = 'pluginCreator___pluginOptions___loading',
  PluginCreatorPluginOptionsDisableBgImageOnAlpha = 'pluginCreator___pluginOptions___disableBgImageOnAlpha',
  PluginCreatorPluginOptionsDisableBgImage = 'pluginCreator___pluginOptions___disableBgImage',
  PluginCreatorPluginOptionsIgnoreFileExtensions = 'pluginCreator___pluginOptions___ignoreFileExtensions',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
  PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
  PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
  PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
  PluginCreatorPluginOptionsCacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
  PluginCreatorPluginOptionsDisplayName = 'pluginCreator___pluginOptions___displayName',
  PluginCreatorPluginOptionsRepositoryName = 'pluginCreator___pluginOptions___repositoryName',
  PluginCreatorPluginOptionsAccessToken = 'pluginCreator___pluginOptions___accessToken',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
}

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<SiteSiteMetadataAuthorFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  social?: Maybe<SiteSiteMetadataSocialFilterInput>;
  copyright?: Maybe<SiteSiteMetadataCopyrightFilterInput>;
  mainNavEntries?: Maybe<SiteSiteMetadataMainNavEntriesFilterListInput>;
  footerNavEntries?: Maybe<SiteSiteMetadataFooterNavEntriesFilterListInput>;
  githubLink?: Maybe<SiteSiteMetadataGithubLinkFilterInput>;
};

export type SiteSiteMetadataAuthorFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  summary?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataSocialFilterInput = {
  twitter?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataCopyrightFilterInput = {
  text?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataMainNavEntriesFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataMainNavEntriesFilterInput>;
};

export type SiteSiteMetadataMainNavEntriesFilterInput = {
  link?: Maybe<StringQueryOperatorInput>;
  names?: Maybe<SiteSiteMetadataMainNavEntriesNamesFilterInput>;
};

export type SiteSiteMetadataMainNavEntriesNamesFilterInput = {
  en?: Maybe<StringQueryOperatorInput>;
  de?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataFooterNavEntriesFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataFooterNavEntriesFilterInput>;
};

export type SiteSiteMetadataFooterNavEntriesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  titles?: Maybe<SiteSiteMetadataFooterNavEntriesTitlesFilterInput>;
  links?: Maybe<SiteSiteMetadataFooterNavEntriesLinksFilterListInput>;
};

export type SiteSiteMetadataFooterNavEntriesTitlesFilterInput = {
  en?: Maybe<StringQueryOperatorInput>;
  de?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataFooterNavEntriesLinksFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataFooterNavEntriesLinksFilterInput>;
};

export type SiteSiteMetadataFooterNavEntriesLinksFilterInput = {
  link?: Maybe<StringQueryOperatorInput>;
  names?: Maybe<SiteSiteMetadataFooterNavEntriesLinksNamesFilterInput>;
};

export type SiteSiteMetadataFooterNavEntriesLinksNamesFilterInput = {
  en?: Maybe<StringQueryOperatorInput>;
  de?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataGithubLinkFilterInput = {
  link?: Maybe<StringQueryOperatorInput>;
  names?: Maybe<SiteSiteMetadataGithubLinkNamesFilterInput>;
};

export type SiteSiteMetadataGithubLinkNamesFilterInput = {
  en?: Maybe<StringQueryOperatorInput>;
  de?: Maybe<StringQueryOperatorInput>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Date']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SitePortArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
  author?: Maybe<SiteSiteMetadataAuthor>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  social?: Maybe<SiteSiteMetadataSocial>;
  copyright?: Maybe<SiteSiteMetadataCopyright>;
  mainNavEntries?: Maybe<Array<Maybe<SiteSiteMetadataMainNavEntries>>>;
  footerNavEntries?: Maybe<Array<Maybe<SiteSiteMetadataFooterNavEntries>>>;
  githubLink?: Maybe<SiteSiteMetadataGithubLink>;
};

export type SiteSiteMetadataAuthor = {
  __typename?: 'SiteSiteMetadataAuthor';
  name?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataSocial = {
  __typename?: 'SiteSiteMetadataSocial';
  twitter?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataCopyright = {
  __typename?: 'SiteSiteMetadataCopyright';
  text?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataMainNavEntries = {
  __typename?: 'SiteSiteMetadataMainNavEntries';
  link?: Maybe<Scalars['String']>;
  names?: Maybe<SiteSiteMetadataMainNavEntriesNames>;
};

export type SiteSiteMetadataMainNavEntriesNames = {
  __typename?: 'SiteSiteMetadataMainNavEntriesNames';
  en?: Maybe<Scalars['String']>;
  de?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFooterNavEntries = {
  __typename?: 'SiteSiteMetadataFooterNavEntries';
  id?: Maybe<Scalars['String']>;
  titles?: Maybe<SiteSiteMetadataFooterNavEntriesTitles>;
  links?: Maybe<Array<Maybe<SiteSiteMetadataFooterNavEntriesLinks>>>;
};

export type SiteSiteMetadataFooterNavEntriesTitles = {
  __typename?: 'SiteSiteMetadataFooterNavEntriesTitles';
  en?: Maybe<Scalars['String']>;
  de?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFooterNavEntriesLinks = {
  __typename?: 'SiteSiteMetadataFooterNavEntriesLinks';
  link?: Maybe<Scalars['String']>;
  names?: Maybe<SiteSiteMetadataFooterNavEntriesLinksNames>;
};

export type SiteSiteMetadataFooterNavEntriesLinksNames = {
  __typename?: 'SiteSiteMetadataFooterNavEntriesLinksNames';
  en?: Maybe<Scalars['String']>;
  de?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataGithubLink = {
  __typename?: 'SiteSiteMetadataGithubLink';
  link?: Maybe<Scalars['String']>;
  names?: Maybe<SiteSiteMetadataGithubLinkNames>;
};

export type SiteSiteMetadataGithubLinkNames = {
  __typename?: 'SiteSiteMetadataGithubLinkNames';
  en?: Maybe<Scalars['String']>;
  de?: Maybe<Scalars['String']>;
};

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<DateQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataAuthorName = 'siteMetadata___author___name',
  SiteMetadataAuthorSummary = 'siteMetadata___author___summary',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataSocialTwitter = 'siteMetadata___social___twitter',
  SiteMetadataCopyrightText = 'siteMetadata___copyright___text',
  SiteMetadataMainNavEntries = 'siteMetadata___mainNavEntries',
  SiteMetadataMainNavEntriesLink = 'siteMetadata___mainNavEntries___link',
  SiteMetadataMainNavEntriesNamesEn = 'siteMetadata___mainNavEntries___names___en',
  SiteMetadataMainNavEntriesNamesDe = 'siteMetadata___mainNavEntries___names___de',
  SiteMetadataFooterNavEntries = 'siteMetadata___footerNavEntries',
  SiteMetadataFooterNavEntriesId = 'siteMetadata___footerNavEntries___id',
  SiteMetadataFooterNavEntriesTitlesEn = 'siteMetadata___footerNavEntries___titles___en',
  SiteMetadataFooterNavEntriesTitlesDe = 'siteMetadata___footerNavEntries___titles___de',
  SiteMetadataFooterNavEntriesLinks = 'siteMetadata___footerNavEntries___links',
  SiteMetadataFooterNavEntriesLinksLink = 'siteMetadata___footerNavEntries___links___link',
  SiteMetadataGithubLinkLink = 'siteMetadata___githubLink___link',
  SiteMetadataGithubLinkNamesEn = 'siteMetadata___githubLink___names___en',
  SiteMetadataGithubLinkNamesDe = 'siteMetadata___githubLink___names___de',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum MarkdownRemarkFieldsEnum {
  Id = 'id',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterDescription = 'frontmatter___description',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FieldsSlug = 'fields___slug',
  Html = 'html',
  HtmlAst = 'htmlAst',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  HeadingsId = 'headings___id',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};

export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge';
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicIndexPageDataTypeFilterInput = {
  title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  description?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicStructuredTextTypeFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<JsonQueryOperatorInput>;
};

export type PrismicLinkTypeFilterListInput = {
  elemMatch?: Maybe<PrismicLinkTypeFilterInput>;
};

export type PrismicLinkTypeFilterInput = {
  link_type?: Maybe<PrismicLinkTypesQueryOperatorInput>;
  isBroken?: Maybe<BooleanQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  target?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<IdQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<JsonQueryOperatorInput>;
};

export type PrismicLinkTypesQueryOperatorInput = {
  eq?: Maybe<PrismicLinkTypes>;
  ne?: Maybe<PrismicLinkTypes>;
  in?: Maybe<Array<Maybe<PrismicLinkTypes>>>;
  nin?: Maybe<Array<Maybe<PrismicLinkTypes>>>;
};

/** Types of links. */
export enum PrismicLinkTypes {
  /** Any of the other types */
  Any = 'Any',
  /** Internal content */
  Document = 'Document',
  /** Internal media content */
  Media = 'Media',
  /** URL */
  Web = 'Web',
}

export type IdQueryOperatorInput = {
  eq?: Maybe<Scalars['ID']>;
  ne?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type PrismicIndexPage = PrismicDocument &
  Node & {
    __typename?: 'PrismicIndexPage';
    data?: Maybe<PrismicIndexPageDataType>;
    dataRaw: Scalars['JSON'];
    dataString: Scalars['String'];
    first_publication_date: Scalars['Date'];
    href: Scalars['String'];
    url?: Maybe<Scalars['String']>;
    lang: Scalars['String'];
    last_publication_date: Scalars['Date'];
    tags: Array<Scalars['String']>;
    alternate_languages: Array<PrismicLinkType>;
    type: Scalars['String'];
    prismicId: Scalars['ID'];
    _previewable: Scalars['ID'];
    uid?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

export type PrismicIndexPageFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicIndexPageLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicDocument = {
  /** The document's data object without transformations exactly as it comes from the Prismic API. */
  dataRaw: Scalars['JSON'];
  /**
   * The document's data object without transformations. The object is stringified via `JSON.stringify` to eliminate the need to declare subfields.
   * @deprecated Use `dataRaw` instead which returns JSON.
   */
  dataString?: Maybe<Scalars['String']>;
  /** The document's initial publication date. */
  first_publication_date?: Maybe<Scalars['Date']>;
  /** The document's Prismic API URL. */
  href?: Maybe<Scalars['String']>;
  /** The document's URL derived via the link resolver. */
  url?: Maybe<Scalars['String']>;
  /** Globally unique identifier. Note that this differs from the `prismicID` field. */
  id: Scalars['ID'];
  /** The document's language. */
  lang: Scalars['String'];
  /** The document's most recent publication date */
  last_publication_date?: Maybe<Scalars['Date']>;
  /** The document's list of tags. */
  tags: Array<Scalars['String']>;
  /** Alternate languages for the document. */
  alternate_languages: Array<PrismicLinkType>;
  /** The document's Prismic API ID type. */
  type: Scalars['String'];
  /** The document's Prismic ID. */
  prismicId: Scalars['ID'];
  /** Marks the document as previewable using Prismic's preview system. Include this field if updates to the document should be previewable by content editors before publishing. **Note: the value of this field is not stable and should not be used directly**. */
  _previewable: Scalars['ID'];
};

export type PrismicDocumentFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicDocumentLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Link to web, media, and internal content. */
export type PrismicLinkType = {
  __typename?: 'PrismicLinkType';
  /** The type of link. */
  link_type: PrismicLinkTypes;
  /** If a Document link, `true` if linked document does not exist, `false` otherwise. */
  isBroken?: Maybe<Scalars['Boolean']>;
  /** The document's URL derived via the link resolver. */
  url?: Maybe<Scalars['String']>;
  /** The link's target. */
  target?: Maybe<Scalars['String']>;
  /** If a Media link, the size of the file. */
  size?: Maybe<Scalars['Int']>;
  /** If a Document link, the linked document's Prismic ID. */
  id?: Maybe<Scalars['ID']>;
  /** If a Document link, the linked document's Prismic custom type API ID */
  type?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's list of tags. */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** If a Document link, the linked document's language. */
  lang?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's slug. */
  slug?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's UID. */
  uid?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document. */
  document?: Maybe<PrismicAllDocumentTypes>;
  /** The field's value without transformations exactly as it comes from the Prismic API. */
  raw?: Maybe<Scalars['JSON']>;
};

export type PrismicAllDocumentTypes = PrismicIndexPage | PrismicTest | PrismicFaqPage;

export type PrismicTest = PrismicDocument &
  Node & {
    __typename?: 'PrismicTest';
    data?: Maybe<PrismicTestDataType>;
    dataRaw: Scalars['JSON'];
    dataString: Scalars['String'];
    first_publication_date: Scalars['Date'];
    href: Scalars['String'];
    url?: Maybe<Scalars['String']>;
    lang: Scalars['String'];
    last_publication_date: Scalars['Date'];
    tags: Array<Scalars['String']>;
    alternate_languages: Array<PrismicLinkType>;
    type: Scalars['String'];
    prismicId: Scalars['ID'];
    _previewable: Scalars['ID'];
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

export type PrismicTestFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicTestLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicTestDataType = {
  __typename?: 'PrismicTestDataType';
  title?: Maybe<PrismicStructuredTextType>;
  text?: Maybe<PrismicStructuredTextType>;
  image?: Maybe<PrismicImageType>;
};

/** A text field with formatting options. */
export type PrismicStructuredTextType = {
  __typename?: 'PrismicStructuredTextType';
  /** The HTML value of the text using `prismic-dom` and the HTML serializer. */
  html?: Maybe<Scalars['String']>;
  /** The plain text value of the text using `prismic-dom`. */
  text?: Maybe<Scalars['String']>;
  /** The field's value without transformations exactly as it comes from the Prismic API. */
  raw?: Maybe<Scalars['JSON']>;
};

/** An image field with optional constrained thumbnails. */
export type PrismicImageType = PrismicImageInterface & {
  __typename?: 'PrismicImageType';
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<PrismicImageDimensionsType>;
  url?: Maybe<Scalars['String']>;
  fixed?: Maybe<PrismicImageFixedType>;
  fluid?: Maybe<PrismicImageFluidType>;
  localFile?: Maybe<File>;
  thumbnails?: Maybe<Scalars['PrismicImageThumbnailsType']>;
};

/** An image field with optional constrained thumbnails. */
export type PrismicImageTypeUrlArgs = {
  imgixParams?: Maybe<ImgixUrlParamsInput>;
};

/** An image field with optional constrained thumbnails. */
export type PrismicImageTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};

/** An image field with optional constrained thumbnails. */
export type PrismicImageTypeFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};

export type PrismicImageInterface = {
  /** The image's alternative text. */
  alt?: Maybe<Scalars['String']>;
  /** The image's copyright text. */
  copyright?: Maybe<Scalars['String']>;
  /** The image's dimensions. */
  dimensions?: Maybe<PrismicImageDimensionsType>;
  /** The image's URL on Prismic's CDN. */
  url?: Maybe<Scalars['String']>;
  /** The locally downloaded image if `shouldNormalizeImage` returns true. */
  localFile?: Maybe<File>;
  fixed?: Maybe<PrismicImageFixedType>;
  fluid?: Maybe<PrismicImageFluidType>;
};

/** Dimensions for images. */
export type PrismicImageDimensionsType = {
  __typename?: 'PrismicImageDimensionsType';
  /** Width of the image in pixels. */
  width: Scalars['Int'];
  /** Height of the image in pixels. */
  height: Scalars['Int'];
};

export type PrismicImageFixedType = {
  __typename?: 'PrismicImageFixedType';
  base64: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Scalars['String'];
  srcSetWebp: Scalars['String'];
  sizes: Scalars['String'];
  width: Scalars['Int'];
  height: Scalars['Int'];
};

export type PrismicImageFluidType = {
  __typename?: 'PrismicImageFluidType';
  base64: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Scalars['String'];
  srcSetWebp: Scalars['String'];
  sizes: Scalars['String'];
  aspectRatio: Scalars['Float'];
};

export type ImgixUrlParamsInput = {
  /** Specifies an aspect ratio to maintain when resizing and cropping the image. [See docs](https://docs.imgix.com/apis/url/size/ar). */
  ar?: Maybe<Scalars['String']>;
  /** Applies automatic enhancements to images. [See docs](https://docs.imgix.com/apis/url/auto). */
  auto?: Maybe<Scalars['String']>;
  /** Colors the background of padded and partially-transparent images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/bg). */
  bg?: Maybe<Scalars['String']>;
  /** Changes the blend alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/blending/blend-align). */
  blendAlign?: Maybe<Scalars['String']>;
  /** Alias for `blendAlign`. */
  blendalign?: Maybe<Scalars['String']>;
  /** Alias for `blendAlign`. */
  ba?: Maybe<Scalars['String']>;
  /** Changes the alpha of the blend image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/blending/blend-alpha). */
  blendAlpha?: Maybe<Scalars['Int']>;
  /** Alias for `blendAlpha`. */
  blendalpha?: Maybe<Scalars['Int']>;
  /** Alias for `blendAlpha`. */
  balph?: Maybe<Scalars['Int']>;
  /** Specifies a color to use when applying the blend. [See docs](https://docs.imgix.com/apis/url/blending/blend-color). */
  blendColor?: Maybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  blendcolor?: Maybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  blendClr?: Maybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  blendclr?: Maybe<Scalars['String']>;
  /** Specifies the type of crop for blend images. [See docs](https://docs.imgix.com/apis/url/blending/blend-crop). */
  blendCrop?: Maybe<Scalars['String']>;
  /** Alias for `blendCrop`. */
  blendcrop?: Maybe<Scalars['String']>;
  /** Alias for `blendCrop`. */
  bc?: Maybe<Scalars['String']>;
  /** Specifies the fit mode for blend images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/blending/blend-fit). */
  blendFit?: Maybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  blendfit?: Maybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  bf?: Maybe<Scalars['String']>;
  /** Adjusts the height of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-h). */
  blendH?: Maybe<Scalars['Int']>;
  /** Alias for `blendH`. */
  blendh?: Maybe<Scalars['Int']>;
  /** Alias for `blendH`. */
  bh?: Maybe<Scalars['Int']>;
  /** Sets the blend mode for a blend image. Default: `overlay`. [See docs](https://docs.imgix.com/apis/url/blending/blend-mode). */
  blendMode?: Maybe<Scalars['String']>;
  /** Alias for `blendMode`. */
  blendmode?: Maybe<Scalars['String']>;
  /** Alias for `blendMode`. */
  bm?: Maybe<Scalars['String']>;
  /** Applies padding to the blend image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-pad). */
  blendPad?: Maybe<Scalars['Int']>;
  /** Alias for `blendPad`. */
  blendpad?: Maybe<Scalars['Int']>;
  /** Alias for `blendPad`. */
  bp?: Maybe<Scalars['Int']>;
  /** Adjusts the size of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-size). */
  blendSize?: Maybe<Scalars['String']>;
  /** Alias for `blendSize`. */
  blendsize?: Maybe<Scalars['String']>;
  /** Alias for `blendSize`. */
  bs?: Maybe<Scalars['String']>;
  /** Adjusts the width of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-w). */
  blendW?: Maybe<Scalars['Int']>;
  /** Alias for `blendW`. */
  blendw?: Maybe<Scalars['Int']>;
  /** Alias for `blendW`. */
  bw?: Maybe<Scalars['Int']>;
  /** Adjusts the x-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-x). */
  blendX?: Maybe<Scalars['Int']>;
  /** Alias for `blendX`. */
  blendx?: Maybe<Scalars['Int']>;
  /** Alias for `blendX`. */
  bx?: Maybe<Scalars['Int']>;
  /** Adjusts the y-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-y). */
  blendY?: Maybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  blendy?: Maybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  by?: Maybe<Scalars['Int']>;
  /** Specifies the location of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend). */
  blend?: Maybe<Scalars['String']>;
  /** Alias for `blend`. */
  b?: Maybe<Scalars['String']>;
  /** Applies a gaussian blur to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/blur). */
  blur?: Maybe<Scalars['Int']>;
  /** Sets bottom border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-bottom). */
  borderBottom?: Maybe<Scalars['Int']>;
  /** Sets left border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-left). */
  borderLeft?: Maybe<Scalars['Int']>;
  /** Sets the inner radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner). */
  borderRadiusInner?: Maybe<Scalars['String']>;
  /** Sets the outer radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius). */
  borderRadius?: Maybe<Scalars['String']>;
  /** Sets right border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-right). */
  borderRight?: Maybe<Scalars['Int']>;
  /** Sets top border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-top). */
  borderTop?: Maybe<Scalars['Int']>;
  /** Applies a border to an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border). */
  border?: Maybe<Scalars['String']>;
  /** Adjusts the brightness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/bri). */
  bri?: Maybe<Scalars['Int']>;
  /** Sets one or more Client-Hints headers. [See docs](https://docs.imgix.com/apis/url/format/ch). */
  ch?: Maybe<Scalars['String']>;
  /** Specifies the output chroma subsampling rate. Default: `420`. [See docs](https://docs.imgix.com/apis/url/format/chromasub). */
  chromasub?: Maybe<Scalars['Int']>;
  /** Limits the number of unique colors in an image. [See docs](https://docs.imgix.com/apis/url/format/colorquant). */
  colorquant?: Maybe<Scalars['Int']>;
  /** Specifies how many colors to include in a palette-extraction response. Default: `6`. [See docs](https://docs.imgix.com/apis/url/color-palette/colors). */
  colors?: Maybe<Scalars['Int']>;
  /** Adjusts the contrast of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/con). */
  con?: Maybe<Scalars['Int']>;
  /** Specifies the radius value for a rounded corner mask. [See docs](https://docs.imgix.com/apis/url/mask/corner-radius). */
  cornerRadius?: Maybe<Scalars['String']>;
  /** Specifies how to crop an image. [See docs](https://docs.imgix.com/apis/url/size/crop). */
  crop?: Maybe<Scalars['String']>;
  /** Specifies the color space of the output image. [See docs](https://docs.imgix.com/apis/url/format/cs). */
  cs?: Maybe<Scalars['String']>;
  /** Forces a URL to use send-file in its response. [See docs](https://docs.imgix.com/apis/url/format/dl). */
  dl?: Maybe<Scalars['String']>;
  /** Sets the DPI value in the EXIF header. [See docs](https://docs.imgix.com/apis/url/format/dpi). */
  dpi?: Maybe<Scalars['Int']>;
  /** Adjusts the device-pixel ratio of the output image. Default: `1`. [See docs](https://docs.imgix.com/apis/url/dpr). */
  dpr?: Maybe<Scalars['Float']>;
  /** Changes the alpha of the duotone effect atop the source image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/stylize/duotone-alpha). */
  duotoneAlpha?: Maybe<Scalars['Int']>;
  /** Applies a duotone effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/duotone). */
  duotone?: Maybe<Scalars['String']>;
  /** Adjusts the exposure of the output image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/exp). */
  exp?: Maybe<Scalars['Int']>;
  /** A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code. [See docs](https://docs.imgix.com/apis/url/expires). */
  expires?: Maybe<Scalars['String']>;
  /** Selects a face to crop to. [See docs](https://docs.imgix.com/apis/url/face-detection/faceindex). */
  faceindex?: Maybe<Scalars['Int']>;
  /** Adjusts padding around a selected face. Default: `1`. [See docs](https://docs.imgix.com/apis/url/face-detection/facepad). */
  facepad?: Maybe<Scalars['Float']>;
  /** Specifies that face data should be included in output when combined with `fm=json`. [See docs](https://docs.imgix.com/apis/url/face-detection/faces). */
  faces?: Maybe<Scalars['Int']>;
  /** Sets the fill color for images with additional space created by the fit setting. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/fill/fill-color). */
  fillColor?: Maybe<Scalars['String']>;
  /** Alias for `fillColor`. */
  fillcolor?: Maybe<Scalars['String']>;
  /** Determines how to fill in additional space created by the fit setting. [See docs](https://docs.imgix.com/apis/url/fill/fill). */
  fill?: Maybe<Scalars['String']>;
  /** Specifies how to map the source image to the output image dimensions. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/size/fit). */
  fit?: Maybe<Scalars['String']>;
  /** Alias for `fit`. */
  f?: Maybe<Scalars['String']>;
  /** Flips an image on a specified axis. [See docs](https://docs.imgix.com/apis/url/rotation/flip). */
  flip?: Maybe<Scalars['String']>;
  /** Changes the format of the output image. [See docs](https://docs.imgix.com/apis/url/format/fm). */
  fm?: Maybe<Scalars['String']>;
  /** Displays crosshairs identifying the location of the set focal point. Default: `false`. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug). */
  fpDebug?: Maybe<Scalars['Boolean']>;
  /** Sets the relative horizontal value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x). */
  fpX?: Maybe<Scalars['Int']>;
  /** Sets the relative vertical value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y). */
  fpY?: Maybe<Scalars['Int']>;
  /** Sets the relative zoom value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z). */
  fpZ?: Maybe<Scalars['Float']>;
  /** Adjusts the gamma of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/gam). */
  gam?: Maybe<Scalars['Int']>;
  /** Sets grid colors for the transparency checkerboard grid. */
  gridColors?: Maybe<Scalars['String']>;
  /** Sets grid size for the transparency checkerboard grid. */
  gridSize?: Maybe<Scalars['Int']>;
  /** Adjusts the height of the output image. [See docs](https://docs.imgix.com/apis/url/size/h). */
  h?: Maybe<Scalars['Int']>;
  /** Alias for `h`. */
  height?: Maybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/high). */
  high?: Maybe<Scalars['Int']>;
  /** Applies a half-tone effect to the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/htn). */
  htn?: Maybe<Scalars['Int']>;
  /** Adjusts the hue of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/hue). */
  hue?: Maybe<Scalars['Int']>;
  /** Inverts the colors on the source image. Default: `false`. [See docs](https://docs.imgix.com/apis/url/adjustment/invert). */
  invert?: Maybe<Scalars['Boolean']>;
  /** Alias for `invert`. */
  inv?: Maybe<Scalars['Boolean']>;
  /** Specifies that the output image should be a lossless variant. Default: `false`. [See docs](https://docs.imgix.com/apis/url/format/lossless). */
  lossless?: Maybe<Scalars['Boolean']>;
  /** Changes the watermark alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-align). */
  markAlign?: Maybe<Scalars['String']>;
  /** Alias for `markAlign`. */
  ma?: Maybe<Scalars['String']>;
  /** Alias for `markAlign`. */
  markalign?: Maybe<Scalars['String']>;
  /** Changes the alpha of the watermark image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-alpha). */
  markAlpha?: Maybe<Scalars['Int']>;
  /** Alias for `markAlpha`. */
  markalpha?: Maybe<Scalars['Int']>;
  /** Alias for `markAlpha`. */
  malph?: Maybe<Scalars['Int']>;
  /** Changes base URL of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-base). */
  markBase?: Maybe<Scalars['String']>;
  /** Alias for `markBase`. */
  mb?: Maybe<Scalars['String']>;
  /** Alias for `markBase`. */
  markbase?: Maybe<Scalars['String']>;
  /** Specifies the fit mode for watermark images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-fit). */
  markFit?: Maybe<Scalars['String']>;
  /** Alias for `markFit`. */
  mf?: Maybe<Scalars['String']>;
  /** Alias for `markFit`. */
  markfit?: Maybe<Scalars['String']>;
  /** Adjusts the height of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-h). */
  markH?: Maybe<Scalars['Int']>;
  /** Alias for `markH`. */
  mh?: Maybe<Scalars['Int']>;
  /** Alias for `markH`. */
  markh?: Maybe<Scalars['Int']>;
  /** Applies padding to the watermark image. Default: `5`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-pad). */
  markPad?: Maybe<Scalars['Int']>;
  /** Alias for `markPad`. */
  mp?: Maybe<Scalars['Int']>;
  /** Alias for `markPad`. */
  markpad?: Maybe<Scalars['Int']>;
  /** Rotates a watermark or tiled watermarks by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-rot). */
  markRot?: Maybe<Scalars['Float']>;
  /** Adjusts the scale of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-scale). */
  markScale?: Maybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  ms?: Maybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  markscale?: Maybe<Scalars['Int']>;
  /** Adds tiled watermark. [See docs](https://docs.imgix.com/apis/url/watermark/mark-tile). */
  markTile?: Maybe<Scalars['String']>;
  /** Alias for `markTile`. */
  mtile?: Maybe<Scalars['String']>;
  /** Alias for `markTile`. */
  marktile?: Maybe<Scalars['String']>;
  /** Adjusts the width of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-w). */
  markW?: Maybe<Scalars['Int']>;
  /** Alias for `markW`. */
  mw?: Maybe<Scalars['Int']>;
  /** Alias for `markW`. */
  markw?: Maybe<Scalars['Int']>;
  /** Adjusts the x-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-x). */
  markX?: Maybe<Scalars['Int']>;
  /** Alias for `markX`. */
  mx?: Maybe<Scalars['Int']>;
  /** Alias for `markX`. */
  markx?: Maybe<Scalars['Int']>;
  /** Adjusts the y-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-y). */
  markY?: Maybe<Scalars['Int']>;
  /** Alias for `markY`. */
  my?: Maybe<Scalars['Int']>;
  /** Alias for `markY`. */
  marky?: Maybe<Scalars['Int']>;
  /** Specifies the location of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark). */
  mark?: Maybe<Scalars['String']>;
  /** Alias for `mark`. */
  m?: Maybe<Scalars['String']>;
  /** Colors the background of the transparent mask area of images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/mask/mask-bg). */
  maskBg?: Maybe<Scalars['String']>;
  /** Alias for `maskBg`. */
  maskbg?: Maybe<Scalars['String']>;
  /** Defines the type of mask and specifies the URL if that type is selected. [See docs](https://docs.imgix.com/apis/url/mask). */
  mask?: Maybe<Scalars['String']>;
  /** Specifies the maximum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-height). */
  maxH?: Maybe<Scalars['Int']>;
  /** Alias for `maxH`. */
  maxHeight?: Maybe<Scalars['Int']>;
  /** Specifies the maximum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-width). */
  maxW?: Maybe<Scalars['Int']>;
  /** Alias for `maxW`. */
  maxWidth?: Maybe<Scalars['Int']>;
  /** Specifies the minimum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-height). */
  minH?: Maybe<Scalars['Int']>;
  /** Alias for `minH`. */
  minHeight?: Maybe<Scalars['Int']>;
  /** Specifies the minimum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-width). */
  minW?: Maybe<Scalars['Int']>;
  /** Alias for `minW`. */
  minWidth?: Maybe<Scalars['Int']>;
  /** Applies a monochrome effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/monochrome). */
  monochrome?: Maybe<Scalars['String']>;
  /** Alias for `monochrome`. */
  mono?: Maybe<Scalars['String']>;
  /** Reduces the noise in an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nr). */
  nr?: Maybe<Scalars['Int']>;
  /** Provides a threshold by which to sharpen an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nrs). */
  nrs?: Maybe<Scalars['Int']>;
  /** Changes the image orientation. [See docs](https://docs.imgix.com/apis/url/rotation/orient). */
  orient?: Maybe<Scalars['Int']>;
  /** Alias for `orient`. */
  or?: Maybe<Scalars['Int']>;
  /** Sets bottom padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom). */
  padBottom?: Maybe<Scalars['Int']>;
  /** Sets left padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-left). */
  padLeft?: Maybe<Scalars['Int']>;
  /** Sets right padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-right). */
  padRight?: Maybe<Scalars['Int']>;
  /** Sets top padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-top). */
  padTop?: Maybe<Scalars['Int']>;
  /** Pads an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad). */
  pad?: Maybe<Scalars['Int']>;
  /** Selects a page from a PDF for display. Default: `1`. [See docs](https://docs.imgix.com/apis/url/pdf/page). */
  page?: Maybe<Scalars['Int']>;
  /** Specifies an output format for palette-extraction. [See docs](https://docs.imgix.com/apis/url/color-palette/palette). */
  palette?: Maybe<Scalars['String']>;
  /** Enables or disables PDF annotation. Default: `true`. [See docs](https://docs.imgix.com/apis/url/pdf/pdf-annotation). */
  pdfAnnotation?: Maybe<Scalars['Boolean']>;
  /** Alias for `pdfAnnotation`. */
  annotation?: Maybe<Scalars['Boolean']>;
  /** Specifies a CSS prefix for all classes in palette-extraction. Default: `image`. [See docs](https://docs.imgix.com/apis/url/color-palette/prefix). */
  prefix?: Maybe<Scalars['String']>;
  /** Applies a pixelation effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/px). */
  px?: Maybe<Scalars['Int']>;
  /** Adjusts the quality of an output image. Default: `75`. [See docs](https://docs.imgix.com/apis/url/format/q). */
  q?: Maybe<Scalars['Int']>;
  /** Crops an image to a specified rectangle. [See docs](https://docs.imgix.com/apis/url/size/rect). */
  rect?: Maybe<Scalars['String']>;
  /** Rotates an image by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/rotation/rot). */
  rot?: Maybe<Scalars['Float']>;
  /** Adjusts the saturation of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sat). */
  sat?: Maybe<Scalars['Int']>;
  /** Applies a sepia effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/sepia). */
  sepia?: Maybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/shad). */
  shad?: Maybe<Scalars['Float']>;
  /** Adjusts the sharpness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sharp). */
  sharp?: Maybe<Scalars['Float']>;
  /** Adds checkerboard behind images which support transparency. [See docs](https://docs.imgix.com/apis/url/fill/transparency). */
  transparency?: Maybe<Scalars['String']>;
  /** Specifies a trim color on a trim operation. [See docs](https://docs.imgix.com/apis/url/trim/trim-color). */
  trimColor?: Maybe<Scalars['String']>;
  /** Alias for `trimColor`. */
  trimcolor?: Maybe<Scalars['String']>;
  /** Specifies the mean difference on a trim operation. Default: `11`. [See docs](https://docs.imgix.com/apis/url/trim/trim-md). */
  trimMd?: Maybe<Scalars['Float']>;
  /** Alias for `trimMd`. */
  trimmd?: Maybe<Scalars['Float']>;
  /** Pads the area of the source image before trimming. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-pad). */
  trimPad?: Maybe<Scalars['Int']>;
  /** Alias for `trimPad`. */
  trimpad?: Maybe<Scalars['Int']>;
  /** Specifies the standard deviation on a trim operation. Default: `10`. [See docs](https://docs.imgix.com/apis/url/trim/trim-sd). */
  trimSd?: Maybe<Scalars['Float']>;
  /** Alias for `trimSd`. */
  trimsd?: Maybe<Scalars['Float']>;
  /** Specifies the tolerance on a trim operation. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-tol). */
  trimTol?: Maybe<Scalars['Float']>;
  /** Alias for `trimTol`. */
  trimtol?: Maybe<Scalars['Float']>;
  /** Trims the source image. [See docs](https://docs.imgix.com/apis/url/trim/trim). */
  trim?: Maybe<Scalars['String']>;
  /** Sets the vertical and horizontal alignment of rendered text relative to the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-align). */
  txtAlign?: Maybe<Scalars['String']>;
  /** Alias for `txtAlign`. */
  txtalign?: Maybe<Scalars['String']>;
  /** Alias for `txtAlign`. */
  ta?: Maybe<Scalars['String']>;
  /** Sets the clipping properties of rendered text. Default: `end`. [See docs](https://docs.imgix.com/apis/url/text/txt-clip). */
  txtClip?: Maybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  txtclip?: Maybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  tcl?: Maybe<Scalars['String']>;
  /** Specifies the color of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-color). */
  txtColor?: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  txtcolor?: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  txtClr?: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  txtclr?: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  tc?: Maybe<Scalars['String']>;
  /** Specifies the fit approach for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-fit). */
  txtFit?: Maybe<Scalars['String']>;
  /** Alias for `txtFit`. */
  txtfit?: Maybe<Scalars['String']>;
  /** Selects a font for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-font). */
  txtFont?: Maybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  tf?: Maybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  txtfont?: Maybe<Scalars['String']>;
  /** Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-lead). */
  txtLead?: Maybe<Scalars['Int']>;
  /** Alias for `txtLead`. */
  txtlead?: Maybe<Scalars['Int']>;
  /** Controls the level of ligature substitution. [See docs](https://docs.imgix.com/apis/url/text/txt-lig). */
  txtLig?: Maybe<Scalars['Int']>;
  /** Alias for `txtLig`. */
  txtlig?: Maybe<Scalars['Int']>;
  /** Specifies a text outline color. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/text/txt-line-color). */
  txtLineColor?: Maybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  txtlinecolor?: Maybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  txtLineClr?: Maybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  txtlineclr?: Maybe<Scalars['String']>;
  /** Outlines the rendered text with a specified color. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-line). */
  txtLine?: Maybe<Scalars['Int']>;
  /** Alias for `txtLine`. */
  txtline?: Maybe<Scalars['Int']>;
  /** Alias for `txtLine`. */
  tl?: Maybe<Scalars['Int']>;
  /** Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-pad). */
  txtPad?: Maybe<Scalars['Int']>;
  /** Alias for `txtPad`. */
  txtpad?: Maybe<Scalars['Int']>;
  /** Alias for `txtPad`. */
  tp?: Maybe<Scalars['Int']>;
  /** Applies a shadow to rendered text. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-shad). */
  txtShad?: Maybe<Scalars['Float']>;
  /** Alias for `txtShad`. */
  txtshad?: Maybe<Scalars['Float']>;
  /** Alias for `txtShad`. */
  tsh?: Maybe<Scalars['Float']>;
  /** Sets the font size of rendered text. Default: `12`. [See docs](https://docs.imgix.com/apis/url/text/txt-size). */
  txtSize?: Maybe<Scalars['Int']>;
  /** Alias for `txtSize`. */
  tsz?: Maybe<Scalars['Int']>;
  /** Alias for `txtSize`. */
  txtsize?: Maybe<Scalars['Int']>;
  /** Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-track). */
  txtTrack?: Maybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  txttrack?: Maybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  tt?: Maybe<Scalars['Int']>;
  /** Sets the width of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-width). */
  txtWidth?: Maybe<Scalars['Int']>;
  /** Alias for `txtWidth`. */
  txtwidth?: Maybe<Scalars['Int']>;
  /** Sets the text string to render. [See docs](https://docs.imgix.com/apis/url/text/txt). */
  txt?: Maybe<Scalars['String']>;
  /** Alias for `txt`. */
  t?: Maybe<Scalars['String']>;
  /** Sharpens the source image using an unsharp mask. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/usm). */
  usm?: Maybe<Scalars['Int']>;
  /** Specifies the radius for an unsharp mask operation. Default: `2.5`. [See docs](https://docs.imgix.com/apis/url/adjustment/usmrad). */
  usmrad?: Maybe<Scalars['Float']>;
  /** Adjusts the vibrance of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/vib). */
  vib?: Maybe<Scalars['Int']>;
  /** Adjusts the width of the output image. [See docs](https://docs.imgix.com/apis/url/size/w). */
  w?: Maybe<Scalars['Int']>;
  /** Alias for `w`. */
  width?: Maybe<Scalars['Int']>;
};

export type PrismicFaqPage = PrismicDocument &
  Node & {
    __typename?: 'PrismicFaqPage';
    data?: Maybe<PrismicFaqPageDataType>;
    dataRaw: Scalars['JSON'];
    dataString: Scalars['String'];
    first_publication_date: Scalars['Date'];
    href: Scalars['String'];
    url?: Maybe<Scalars['String']>;
    lang: Scalars['String'];
    last_publication_date: Scalars['Date'];
    tags: Array<Scalars['String']>;
    alternate_languages: Array<PrismicLinkType>;
    type: Scalars['String'];
    prismicId: Scalars['ID'];
    _previewable: Scalars['ID'];
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

export type PrismicFaqPageFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicFaqPageLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicFaqPageDataType = {
  __typename?: 'PrismicFaqPageDataType';
  title?: Maybe<PrismicStructuredTextType>;
  description?: Maybe<PrismicStructuredTextType>;
  title_group_1?: Maybe<PrismicStructuredTextType>;
  entries?: Maybe<Array<Maybe<PrismicFaqPageEntriesGroupType>>>;
};

export type PrismicFaqPageEntriesGroupType = {
  __typename?: 'PrismicFaqPageEntriesGroupType';
  question?: Maybe<PrismicStructuredTextType>;
  answer?: Maybe<PrismicStructuredTextType>;
};

export type PrismicIndexPageDataType = {
  __typename?: 'PrismicIndexPageDataType';
  title?: Maybe<PrismicStructuredTextType>;
  description?: Maybe<PrismicStructuredTextType>;
};

export type PrismicIndexPageFilterInput = {
  data?: Maybe<PrismicIndexPageDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicIndexPageSortInput = {
  fields?: Maybe<Array<Maybe<PrismicIndexPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum PrismicIndexPageFieldsEnum {
  DataTitleHtml = 'data___title___html',
  DataTitleText = 'data___title___text',
  DataTitleRaw = 'data___title___raw',
  DataDescriptionHtml = 'data___description___html',
  DataDescriptionText = 'data___description___text',
  DataDescriptionRaw = 'data___description___raw',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Uid = 'uid',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicIndexPageConnection = {
  __typename?: 'PrismicIndexPageConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicIndexPageEdge>;
  nodes: Array<PrismicIndexPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicIndexPageGroupConnection>;
};

export type PrismicIndexPageConnectionDistinctArgs = {
  field: PrismicIndexPageFieldsEnum;
};

export type PrismicIndexPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicIndexPageFieldsEnum;
};

export type PrismicIndexPageEdge = {
  __typename?: 'PrismicIndexPageEdge';
  next?: Maybe<PrismicIndexPage>;
  node: PrismicIndexPage;
  previous?: Maybe<PrismicIndexPage>;
};

export type PrismicIndexPageGroupConnection = {
  __typename?: 'PrismicIndexPageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicIndexPageEdge>;
  nodes: Array<PrismicIndexPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicTestDataTypeFilterInput = {
  title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  text?: Maybe<PrismicStructuredTextTypeFilterInput>;
  image?: Maybe<PrismicImageTypeFilterInput>;
};

export type PrismicImageTypeFilterInput = {
  alt?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  dimensions?: Maybe<PrismicImageDimensionsTypeFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<PrismicImageFixedTypeFilterInput>;
  fluid?: Maybe<PrismicImageFluidTypeFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  thumbnails?: Maybe<PrismicImageThumbnailsTypeQueryOperatorInput>;
};

export type PrismicImageDimensionsTypeFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type PrismicImageFixedTypeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type PrismicImageFluidTypeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type PrismicImageThumbnailsTypeQueryOperatorInput = {
  eq?: Maybe<Scalars['PrismicImageThumbnailsType']>;
  ne?: Maybe<Scalars['PrismicImageThumbnailsType']>;
  in?: Maybe<Array<Maybe<Scalars['PrismicImageThumbnailsType']>>>;
  nin?: Maybe<Array<Maybe<Scalars['PrismicImageThumbnailsType']>>>;
};

export type PrismicTestFilterInput = {
  data?: Maybe<PrismicTestDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicTestSortInput = {
  fields?: Maybe<Array<Maybe<PrismicTestFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum PrismicTestFieldsEnum {
  DataTitleHtml = 'data___title___html',
  DataTitleText = 'data___title___text',
  DataTitleRaw = 'data___title___raw',
  DataTextHtml = 'data___text___html',
  DataTextText = 'data___text___text',
  DataTextRaw = 'data___text___raw',
  DataImageAlt = 'data___image___alt',
  DataImageCopyright = 'data___image___copyright',
  DataImageDimensionsWidth = 'data___image___dimensions___width',
  DataImageDimensionsHeight = 'data___image___dimensions___height',
  DataImageUrl = 'data___image___url',
  DataImageFixedBase64 = 'data___image___fixed___base64',
  DataImageFixedSrc = 'data___image___fixed___src',
  DataImageFixedSrcSet = 'data___image___fixed___srcSet',
  DataImageFixedSrcWebp = 'data___image___fixed___srcWebp',
  DataImageFixedSrcSetWebp = 'data___image___fixed___srcSetWebp',
  DataImageFixedSizes = 'data___image___fixed___sizes',
  DataImageFixedWidth = 'data___image___fixed___width',
  DataImageFixedHeight = 'data___image___fixed___height',
  DataImageFluidBase64 = 'data___image___fluid___base64',
  DataImageFluidSrc = 'data___image___fluid___src',
  DataImageFluidSrcSet = 'data___image___fluid___srcSet',
  DataImageFluidSrcWebp = 'data___image___fluid___srcWebp',
  DataImageFluidSrcSetWebp = 'data___image___fluid___srcSetWebp',
  DataImageFluidSizes = 'data___image___fluid___sizes',
  DataImageFluidAspectRatio = 'data___image___fluid___aspectRatio',
  DataImageLocalFileSourceInstanceName = 'data___image___localFile___sourceInstanceName',
  DataImageLocalFileAbsolutePath = 'data___image___localFile___absolutePath',
  DataImageLocalFileRelativePath = 'data___image___localFile___relativePath',
  DataImageLocalFileExtension = 'data___image___localFile___extension',
  DataImageLocalFileSize = 'data___image___localFile___size',
  DataImageLocalFilePrettySize = 'data___image___localFile___prettySize',
  DataImageLocalFileModifiedTime = 'data___image___localFile___modifiedTime',
  DataImageLocalFileAccessTime = 'data___image___localFile___accessTime',
  DataImageLocalFileChangeTime = 'data___image___localFile___changeTime',
  DataImageLocalFileBirthTime = 'data___image___localFile___birthTime',
  DataImageLocalFileRoot = 'data___image___localFile___root',
  DataImageLocalFileDir = 'data___image___localFile___dir',
  DataImageLocalFileBase = 'data___image___localFile___base',
  DataImageLocalFileExt = 'data___image___localFile___ext',
  DataImageLocalFileName = 'data___image___localFile___name',
  DataImageLocalFileRelativeDirectory = 'data___image___localFile___relativeDirectory',
  DataImageLocalFileDev = 'data___image___localFile___dev',
  DataImageLocalFileMode = 'data___image___localFile___mode',
  DataImageLocalFileNlink = 'data___image___localFile___nlink',
  DataImageLocalFileUid = 'data___image___localFile___uid',
  DataImageLocalFileGid = 'data___image___localFile___gid',
  DataImageLocalFileRdev = 'data___image___localFile___rdev',
  DataImageLocalFileIno = 'data___image___localFile___ino',
  DataImageLocalFileAtimeMs = 'data___image___localFile___atimeMs',
  DataImageLocalFileMtimeMs = 'data___image___localFile___mtimeMs',
  DataImageLocalFileCtimeMs = 'data___image___localFile___ctimeMs',
  DataImageLocalFileAtime = 'data___image___localFile___atime',
  DataImageLocalFileMtime = 'data___image___localFile___mtime',
  DataImageLocalFileCtime = 'data___image___localFile___ctime',
  DataImageLocalFileBirthtime = 'data___image___localFile___birthtime',
  DataImageLocalFileBirthtimeMs = 'data___image___localFile___birthtimeMs',
  DataImageLocalFileBlksize = 'data___image___localFile___blksize',
  DataImageLocalFileBlocks = 'data___image___localFile___blocks',
  DataImageLocalFilePublicUrl = 'data___image___localFile___publicURL',
  DataImageLocalFileId = 'data___image___localFile___id',
  DataImageLocalFileChildren = 'data___image___localFile___children',
  DataImageThumbnails = 'data___image___thumbnails',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicTestConnection = {
  __typename?: 'PrismicTestConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicTestEdge>;
  nodes: Array<PrismicTest>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicTestGroupConnection>;
};

export type PrismicTestConnectionDistinctArgs = {
  field: PrismicTestFieldsEnum;
};

export type PrismicTestConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicTestFieldsEnum;
};

export type PrismicTestEdge = {
  __typename?: 'PrismicTestEdge';
  next?: Maybe<PrismicTest>;
  node: PrismicTest;
  previous?: Maybe<PrismicTest>;
};

export type PrismicTestGroupConnection = {
  __typename?: 'PrismicTestGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicTestEdge>;
  nodes: Array<PrismicTest>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicFaqPageDataTypeFilterInput = {
  title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  description?: Maybe<PrismicStructuredTextTypeFilterInput>;
  title_group_1?: Maybe<PrismicStructuredTextTypeFilterInput>;
  entries?: Maybe<PrismicFaqPageEntriesGroupTypeFilterListInput>;
};

export type PrismicFaqPageEntriesGroupTypeFilterListInput = {
  elemMatch?: Maybe<PrismicFaqPageEntriesGroupTypeFilterInput>;
};

export type PrismicFaqPageEntriesGroupTypeFilterInput = {
  question?: Maybe<PrismicStructuredTextTypeFilterInput>;
  answer?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicFaqPageFilterInput = {
  data?: Maybe<PrismicFaqPageDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicFaqPageSortInput = {
  fields?: Maybe<Array<Maybe<PrismicFaqPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum PrismicFaqPageFieldsEnum {
  DataTitleHtml = 'data___title___html',
  DataTitleText = 'data___title___text',
  DataTitleRaw = 'data___title___raw',
  DataDescriptionHtml = 'data___description___html',
  DataDescriptionText = 'data___description___text',
  DataDescriptionRaw = 'data___description___raw',
  DataTitleGroup_1Html = 'data___title_group_1___html',
  DataTitleGroup_1Text = 'data___title_group_1___text',
  DataTitleGroup_1Raw = 'data___title_group_1___raw',
  DataEntries = 'data___entries',
  DataEntriesQuestionHtml = 'data___entries___question___html',
  DataEntriesQuestionText = 'data___entries___question___text',
  DataEntriesQuestionRaw = 'data___entries___question___raw',
  DataEntriesAnswerHtml = 'data___entries___answer___html',
  DataEntriesAnswerText = 'data___entries___answer___text',
  DataEntriesAnswerRaw = 'data___entries___answer___raw',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicFaqPageConnection = {
  __typename?: 'PrismicFaqPageConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicFaqPageEdge>;
  nodes: Array<PrismicFaqPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicFaqPageGroupConnection>;
};

export type PrismicFaqPageConnectionDistinctArgs = {
  field: PrismicFaqPageFieldsEnum;
};

export type PrismicFaqPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicFaqPageFieldsEnum;
};

export type PrismicFaqPageEdge = {
  __typename?: 'PrismicFaqPageEdge';
  next?: Maybe<PrismicFaqPage>;
  node: PrismicFaqPage;
  previous?: Maybe<PrismicFaqPage>;
};

export type PrismicFaqPageGroupConnection = {
  __typename?: 'PrismicFaqPageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicFaqPageEdge>;
  nodes: Array<PrismicFaqPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicFaqEntryDataFilterInput = {
  title?: Maybe<PrismicFaqEntryDataTitleFilterListInput>;
  question?: Maybe<PrismicFaqEntryDataQuestionFilterListInput>;
  answer?: Maybe<PrismicFaqEntryDataAnswerFilterListInput>;
};

export type PrismicFaqEntryDataTitleFilterListInput = {
  elemMatch?: Maybe<PrismicFaqEntryDataTitleFilterInput>;
};

export type PrismicFaqEntryDataTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicFaqEntryDataQuestionFilterListInput = {
  elemMatch?: Maybe<PrismicFaqEntryDataQuestionFilterInput>;
};

export type PrismicFaqEntryDataQuestionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicFaqEntryDataAnswerFilterListInput = {
  elemMatch?: Maybe<PrismicFaqEntryDataAnswerFilterInput>;
};

export type PrismicFaqEntryDataAnswerFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicFaqEntryDataRawFilterInput = {
  title?: Maybe<PrismicFaqEntryDataRawTitleFilterListInput>;
  question?: Maybe<PrismicFaqEntryDataRawQuestionFilterListInput>;
  answer?: Maybe<PrismicFaqEntryDataRawAnswerFilterListInput>;
};

export type PrismicFaqEntryDataRawTitleFilterListInput = {
  elemMatch?: Maybe<PrismicFaqEntryDataRawTitleFilterInput>;
};

export type PrismicFaqEntryDataRawTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicFaqEntryDataRawQuestionFilterListInput = {
  elemMatch?: Maybe<PrismicFaqEntryDataRawQuestionFilterInput>;
};

export type PrismicFaqEntryDataRawQuestionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicFaqEntryDataRawAnswerFilterListInput = {
  elemMatch?: Maybe<PrismicFaqEntryDataRawAnswerFilterInput>;
};

export type PrismicFaqEntryDataRawAnswerFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicFaqEntry = Node & {
  __typename?: 'PrismicFaqEntry';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  type?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  first_publication_date?: Maybe<Scalars['Date']>;
  last_publication_date?: Maybe<Scalars['Date']>;
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  lang?: Maybe<Scalars['String']>;
  data?: Maybe<PrismicFaqEntryData>;
  prismicId?: Maybe<Scalars['String']>;
  dataString?: Maybe<Scalars['String']>;
  dataRaw?: Maybe<PrismicFaqEntryDataRaw>;
  url?: Maybe<Scalars['String']>;
  _previewable?: Maybe<Scalars['String']>;
};

export type PrismicFaqEntryFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicFaqEntryLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicFaqEntryData = {
  __typename?: 'PrismicFaqEntryData';
  title?: Maybe<Array<Maybe<PrismicFaqEntryDataTitle>>>;
  question?: Maybe<Array<Maybe<PrismicFaqEntryDataQuestion>>>;
  answer?: Maybe<Array<Maybe<PrismicFaqEntryDataAnswer>>>;
};

export type PrismicFaqEntryDataTitle = {
  __typename?: 'PrismicFaqEntryDataTitle';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicFaqEntryDataQuestion = {
  __typename?: 'PrismicFaqEntryDataQuestion';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicFaqEntryDataAnswer = {
  __typename?: 'PrismicFaqEntryDataAnswer';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicFaqEntryDataRaw = {
  __typename?: 'PrismicFaqEntryDataRaw';
  title?: Maybe<Array<Maybe<PrismicFaqEntryDataRawTitle>>>;
  question?: Maybe<Array<Maybe<PrismicFaqEntryDataRawQuestion>>>;
  answer?: Maybe<Array<Maybe<PrismicFaqEntryDataRawAnswer>>>;
};

export type PrismicFaqEntryDataRawTitle = {
  __typename?: 'PrismicFaqEntryDataRawTitle';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicFaqEntryDataRawQuestion = {
  __typename?: 'PrismicFaqEntryDataRawQuestion';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicFaqEntryDataRawAnswer = {
  __typename?: 'PrismicFaqEntryDataRawAnswer';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicFaqEntryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  slugs?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<PrismicFaqEntryDataFilterInput>;
  prismicId?: Maybe<StringQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  dataRaw?: Maybe<PrismicFaqEntryDataRawFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
  _previewable?: Maybe<StringQueryOperatorInput>;
};

export type PrismicFaqEntrySortInput = {
  fields?: Maybe<Array<Maybe<PrismicFaqEntryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum PrismicFaqEntryFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataTitle = 'data___title',
  DataTitleType = 'data___title___type',
  DataTitleText = 'data___title___text',
  DataQuestion = 'data___question',
  DataQuestionType = 'data___question___type',
  DataQuestionText = 'data___question___text',
  DataAnswer = 'data___answer',
  DataAnswerType = 'data___answer___type',
  DataAnswerText = 'data___answer___text',
  PrismicId = 'prismicId',
  DataString = 'dataString',
  DataRawTitle = 'dataRaw___title',
  DataRawTitleType = 'dataRaw___title___type',
  DataRawTitleText = 'dataRaw___title___text',
  DataRawQuestion = 'dataRaw___question',
  DataRawQuestionType = 'dataRaw___question___type',
  DataRawQuestionText = 'dataRaw___question___text',
  DataRawAnswer = 'dataRaw___answer',
  DataRawAnswerType = 'dataRaw___answer___type',
  DataRawAnswerText = 'dataRaw___answer___text',
  Url = 'url',
  Previewable = '_previewable',
}

export type PrismicFaqEntryConnection = {
  __typename?: 'PrismicFaqEntryConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicFaqEntryEdge>;
  nodes: Array<PrismicFaqEntry>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicFaqEntryGroupConnection>;
};

export type PrismicFaqEntryConnectionDistinctArgs = {
  field: PrismicFaqEntryFieldsEnum;
};

export type PrismicFaqEntryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicFaqEntryFieldsEnum;
};

export type PrismicFaqEntryEdge = {
  __typename?: 'PrismicFaqEntryEdge';
  next?: Maybe<PrismicFaqEntry>;
  node: PrismicFaqEntry;
  previous?: Maybe<PrismicFaqEntry>;
};

export type PrismicFaqEntryGroupConnection = {
  __typename?: 'PrismicFaqEntryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicFaqEntryEdge>;
  nodes: Array<PrismicFaqEntry>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FaqJsonSortInput = {
  fields?: Maybe<Array<Maybe<FaqJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum FaqJsonFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SectionMainHeadlineTitle = 'section_main___headline___title',
  SectionMainTextsPermalink = 'section_main___texts___permalink',
  SectionMainTextsSearch = 'section_main___texts___search',
  SectionMainTextsQuestions = 'section_main___texts___questions',
  SectionMainTextsToTop = 'section_main___texts___to_top',
  SectionMainSections = 'section_main___sections',
  SectionMainSectionsTitle = 'section_main___sections___title',
  SectionMainSectionsActive = 'section_main___sections___active',
  SectionMainSectionsId = 'section_main___sections___id',
  SectionMainSectionsAccordion = 'section_main___sections___accordion',
  SectionMainSectionsAccordionTitle = 'section_main___sections___accordion___title',
  SectionMainSectionsAccordionAnchor = 'section_main___sections___accordion___anchor',
  SectionMainSectionsAccordionActive = 'section_main___sections___accordion___active',
  SectionMainSectionsAccordionTextblock = 'section_main___sections___accordion___textblock',
}

export type FaqJsonConnection = {
  __typename?: 'FaqJsonConnection';
  totalCount: Scalars['Int'];
  edges: Array<FaqJsonEdge>;
  nodes: Array<FaqJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FaqJsonGroupConnection>;
};

export type FaqJsonConnectionDistinctArgs = {
  field: FaqJsonFieldsEnum;
};

export type FaqJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FaqJsonFieldsEnum;
};

export type FaqJsonEdge = {
  __typename?: 'FaqJsonEdge';
  next?: Maybe<FaqJson>;
  node: FaqJson;
  previous?: Maybe<FaqJson>;
};

export type FaqJsonGroupConnection = {
  __typename?: 'FaqJsonGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FaqJsonEdge>;
  nodes: Array<FaqJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime',
}

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
  PluginOptionsPluginsId = 'pluginOptions___plugins___id',
  PluginOptionsPluginsName = 'pluginOptions___plugins___name',
  PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
  PluginOptionsPluginsPluginOptionsMaxWidth = 'pluginOptions___plugins___pluginOptions___maxWidth',
  PluginOptionsPluginsPluginOptionsPathPrefix = 'pluginOptions___plugins___pluginOptions___pathPrefix',
  PluginOptionsPluginsPluginOptionsWrapperStyle = 'pluginOptions___plugins___pluginOptions___wrapperStyle',
  PluginOptionsPluginsPluginOptionsBackgroundColor = 'pluginOptions___plugins___pluginOptions___backgroundColor',
  PluginOptionsPluginsPluginOptionsLinkImagesToOriginal = 'pluginOptions___plugins___pluginOptions___linkImagesToOriginal',
  PluginOptionsPluginsPluginOptionsShowCaptions = 'pluginOptions___plugins___pluginOptions___showCaptions',
  PluginOptionsPluginsPluginOptionsMarkdownCaptions = 'pluginOptions___plugins___pluginOptions___markdownCaptions',
  PluginOptionsPluginsPluginOptionsWithWebp = 'pluginOptions___plugins___pluginOptions___withWebp',
  PluginOptionsPluginsPluginOptionsTracedSvg = 'pluginOptions___plugins___pluginOptions___tracedSVG',
  PluginOptionsPluginsPluginOptionsLoading = 'pluginOptions___plugins___pluginOptions___loading',
  PluginOptionsPluginsPluginOptionsDisableBgImageOnAlpha = 'pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha',
  PluginOptionsPluginsPluginOptionsDisableBgImage = 'pluginOptions___plugins___pluginOptions___disableBgImage',
  PluginOptionsPluginsPluginOptionsIgnoreFileExtensions = 'pluginOptions___plugins___pluginOptions___ignoreFileExtensions',
  PluginOptionsPluginsBrowserApIs = 'pluginOptions___plugins___browserAPIs',
  PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
  PluginOptionsPathPrefix = 'pluginOptions___pathPrefix',
  PluginOptionsWrapperStyle = 'pluginOptions___wrapperStyle',
  PluginOptionsBackgroundColor = 'pluginOptions___backgroundColor',
  PluginOptionsLinkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  PluginOptionsShowCaptions = 'pluginOptions___showCaptions',
  PluginOptionsMarkdownCaptions = 'pluginOptions___markdownCaptions',
  PluginOptionsWithWebp = 'pluginOptions___withWebp',
  PluginOptionsTracedSvg = 'pluginOptions___tracedSVG',
  PluginOptionsLoading = 'pluginOptions___loading',
  PluginOptionsDisableBgImageOnAlpha = 'pluginOptions___disableBgImageOnAlpha',
  PluginOptionsDisableBgImage = 'pluginOptions___disableBgImage',
  PluginOptionsIgnoreFileExtensions = 'pluginOptions___ignoreFileExtensions',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsCacheDigest = 'pluginOptions___cacheDigest',
  PluginOptionsDisplayName = 'pluginOptions___displayName',
  PluginOptionsRepositoryName = 'pluginOptions___repositoryName',
  PluginOptionsAccessToken = 'pluginOptions___accessToken',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
}

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

/** An image thumbnail with constraints. */
export type PrismicImageThumbnailType = PrismicImageInterface & {
  __typename?: 'PrismicImageThumbnailType';
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<PrismicImageDimensionsType>;
  url?: Maybe<Scalars['String']>;
  fixed?: Maybe<PrismicImageFixedType>;
  fluid?: Maybe<PrismicImageFluidType>;
  localFile?: Maybe<File>;
};

/** An image thumbnail with constraints. */
export type PrismicImageThumbnailTypeUrlArgs = {
  imgixParams?: Maybe<ImgixUrlParamsInput>;
};

/** An image thumbnail with constraints. */
export type PrismicImageThumbnailTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};

/** An image thumbnail with constraints. */
export type PrismicImageThumbnailTypeFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};

/** A field for storing geo-coordinates. */
export type PrismicGeoPointType = {
  __typename?: 'PrismicGeoPointType';
  /** The latitude value of the geo-coordinate. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude value of the geo-coordinate. */
  longitude?: Maybe<Scalars['Float']>;
};

/** Embed videos, songs, tweets, slices, etc. */
export type PrismicEmbedType = {
  __typename?: 'PrismicEmbedType';
  /** The ID of the resource author. Fetched via oEmbed data. */
  author_id?: Maybe<Scalars['ID']>;
  /** The name of the author/owner of the resource. Fetched via oEmbed data. */
  author_name?: Maybe<Scalars['String']>;
  /** A URL for the author/owner of the resource. Fetched via oEmbed data. */
  author_url?: Maybe<Scalars['String']>;
  /** The suggested cache lifetime for this resource, in seconds. Consumers may choose to use this value or not. Fetched via oEmbed data. */
  cache_age?: Maybe<Scalars['String']>;
  /** The URL of the resource. */
  embed_url?: Maybe<Scalars['String']>;
  /** The HTML required to display the resource. The HTML should have no padding or margins. Consumers may wish to load the HTML in an off-domain iframe to avoid XSS vulnerabilities. Fetched via oEmbed data. */
  html?: Maybe<Scalars['String']>;
  /** The name of the resource. */
  name?: Maybe<Scalars['String']>;
  /** The name of the resource provider. Fetched via oEmbed data. */
  provider_name?: Maybe<Scalars['String']>;
  /** The URL of the resource provider. Fetched via oEmbed data. */
  provider_url?: Maybe<Scalars['String']>;
  /** The width of the resource's thumbnail. Fetched via oEmbed data. */
  thumbnail_height?: Maybe<Scalars['Int']>;
  /** A URL to a thumbnail image representing the resource. Fetched via oEmbed data. */
  thumbnail_url?: Maybe<Scalars['String']>;
  /** The width of the resource's thumbnail. Fetched via oEmbed data. */
  thumbnail_width?: Maybe<Scalars['Int']>;
  /** A text title, describing the resource. Fetched via oEmbed data. */
  title?: Maybe<Scalars['String']>;
  /** The resource type. Fetched via oEmbed data. */
  type?: Maybe<Scalars['String']>;
  /** The oEmbed version number. */
  version?: Maybe<Scalars['String']>;
  /** The source URL of the resource. Fetched via oEmbed data. */
  url?: Maybe<Scalars['String']>;
  /** The width in pixel of the resource. Fetched via oEmbed data. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixel of the resource. Fetched via oEmbed data. */
  height?: Maybe<Scalars['Int']>;
  /** The ID of the resource media. Fetched via oEmbed data. */
  media_id?: Maybe<Scalars['ID']>;
  /** A description for the resource. */
  description?: Maybe<Scalars['String']>;
};

export type PrismicSliceType = {
  /** The slice type API ID. */
  slice_type: Scalars['String'];
  /** The slice label. */
  slice_label?: Maybe<Scalars['String']>;
};

export type GatsbyImageSharpFixedFragment = { __typename?: 'ImageSharpFixed' } & Pick<
  ImageSharpFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpFixed_TracedSvgFragment = { __typename?: 'ImageSharpFixed' } & Pick<
  ImageSharpFixed,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpFixed_WithWebpFragment = { __typename?: 'ImageSharpFixed' } & Pick<
  ImageSharpFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpFixed';
} & Pick<
  ImageSharpFixed,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFixed_NoBase64Fragment = { __typename?: 'ImageSharpFixed' } & Pick<
  ImageSharpFixed,
  'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpFixed';
} & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = { __typename?: 'ImageSharpFluid' } & Pick<
  ImageSharpFluid,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
  __typename?: 'ImageSharpFluid';
} & {
  maxHeight: ImageSharpFluid['presentationHeight'];
  maxWidth: ImageSharpFluid['presentationWidth'];
};

export type GatsbyImageSharpFluid_TracedSvgFragment = { __typename?: 'ImageSharpFluid' } & Pick<
  ImageSharpFluid,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpFluid_WithWebpFragment = { __typename?: 'ImageSharpFluid' } & Pick<
  ImageSharpFluid,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpFluid';
} & Pick<
  ImageSharpFluid,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpFluid_NoBase64Fragment = { __typename?: 'ImageSharpFluid' } & Pick<
  ImageSharpFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpFluid';
} & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = { __typename?: 'ImageSharpResolutions' } & Pick<
  ImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = {
  __typename?: 'ImageSharpResolutions';
} & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = {
  __typename?: 'ImageSharpResolutions';
} & Pick<
  ImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpResolutions';
} & Pick<
  ImageSharpResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = {
  __typename?: 'ImageSharpResolutions';
} & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpResolutions';
} & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = { __typename?: 'ImageSharpSizes' } & Pick<
  ImageSharpSizes,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpSizes_TracedSvgFragment = { __typename?: 'ImageSharpSizes' } & Pick<
  ImageSharpSizes,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpSizes_WithWebpFragment = { __typename?: 'ImageSharpSizes' } & Pick<
  ImageSharpSizes,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpSizes';
} & Pick<
  ImageSharpSizes,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpSizes_NoBase64Fragment = { __typename?: 'ImageSharpSizes' } & Pick<
  ImageSharpSizes,
  'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpSizes';
} & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type PagesQueryQueryVariables = Exact<{ [key: string]: never }>;

export type PagesQueryQuery = { __typename?: 'Query' } & {
  allSitePage: { __typename?: 'SitePageConnection' } & {
    nodes: Array<{ __typename?: 'SitePage' } & Pick<SitePage, 'path'>>;
  };
};

export type SiteFooterQueryQueryVariables = Exact<{ [key: string]: never }>;

export type SiteFooterQueryQuery = { __typename?: 'Query' } & {
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<
        { __typename?: 'SiteSiteMetadata' } & {
          copyright?: Maybe<
            { __typename?: 'SiteSiteMetadataCopyright' } & Pick<SiteSiteMetadataCopyright, 'text'>
          >;
        }
      >;
    }
  >;
};

export type LogoQueryQueryVariables = Exact<{ [key: string]: never }>;

export type LogoQueryQuery = { __typename?: 'Query' } & {
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<
        { __typename?: 'SiteSiteMetadata' } & {
          mainNavEntries?: Maybe<
            Array<
              Maybe<
                { __typename?: 'SiteSiteMetadataMainNavEntries' } & Pick<
                  SiteSiteMetadataMainNavEntries,
                  'link'
                > & {
                    names?: Maybe<
                      { __typename?: 'SiteSiteMetadataMainNavEntriesNames' } & Pick<
                        SiteSiteMetadataMainNavEntriesNames,
                        'en' | 'de'
                      >
                    >;
                  }
              >
            >
          >;
        }
      >;
    }
  >;
  allFile: { __typename?: 'FileConnection' } & {
    edges: Array<
      { __typename?: 'FileEdge' } & {
        node: { __typename?: 'File' } & Pick<
          File,
          'id' | 'relativePath' | 'publicURL' | 'name' | 'root' | 'extension'
        >;
      }
    >;
  };
};

export type GithubQueryQueryVariables = Exact<{ [key: string]: never }>;

export type GithubQueryQuery = { __typename?: 'Query' } & {
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<
        { __typename?: 'SiteSiteMetadata' } & {
          githubLink?: Maybe<
            { __typename?: 'SiteSiteMetadataGithubLink' } & Pick<
              SiteSiteMetadataGithubLink,
              'link'
            > & {
                names?: Maybe<
                  { __typename?: 'SiteSiteMetadataGithubLinkNames' } & Pick<
                    SiteSiteMetadataGithubLinkNames,
                    'de' | 'en'
                  >
                >;
              }
          >;
        }
      >;
    }
  >;
  allFile: { __typename?: 'FileConnection' } & {
    edges: Array<
      { __typename?: 'FileEdge' } & {
        node: { __typename?: 'File' } & Pick<
          File,
          'id' | 'relativePath' | 'publicURL' | 'name' | 'root' | 'extension'
        >;
      }
    >;
  };
};

export type SiteFooterNavigationQueryQueryVariables = Exact<{ [key: string]: never }>;

export type SiteFooterNavigationQueryQuery = { __typename?: 'Query' } & {
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<
        { __typename?: 'SiteSiteMetadata' } & {
          footerNavEntries?: Maybe<
            Array<
              Maybe<
                { __typename?: 'SiteSiteMetadataFooterNavEntries' } & Pick<
                  SiteSiteMetadataFooterNavEntries,
                  'id'
                > & {
                    links?: Maybe<
                      Array<
                        Maybe<
                          { __typename?: 'SiteSiteMetadataFooterNavEntriesLinks' } & Pick<
                            SiteSiteMetadataFooterNavEntriesLinks,
                            'link'
                          > & {
                              names?: Maybe<
                                {
                                  __typename?: 'SiteSiteMetadataFooterNavEntriesLinksNames';
                                } & Pick<SiteSiteMetadataFooterNavEntriesLinksNames, 'de' | 'en'>
                              >;
                            }
                        >
                      >
                    >;
                    titles?: Maybe<
                      { __typename?: 'SiteSiteMetadataFooterNavEntriesTitles' } & Pick<
                        SiteSiteMetadataFooterNavEntriesTitles,
                        'de' | 'en'
                      >
                    >;
                  }
              >
            >
          >;
        }
      >;
    }
  >;
  allFile: { __typename?: 'FileConnection' } & {
    edges: Array<
      { __typename?: 'FileEdge' } & {
        node: { __typename?: 'File' } & Pick<
          File,
          'id' | 'relativePath' | 'publicURL' | 'name' | 'root' | 'extension'
        >;
      }
    >;
  };
};

export type SiteMainNavQueryQueryVariables = Exact<{ [key: string]: never }>;

export type SiteMainNavQueryQuery = { __typename?: 'Query' } & {
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<
        { __typename?: 'SiteSiteMetadata' } & {
          mainNavEntries?: Maybe<
            Array<
              Maybe<
                { __typename?: 'SiteSiteMetadataMainNavEntries' } & Pick<
                  SiteSiteMetadataMainNavEntries,
                  'link'
                > & {
                    names?: Maybe<
                      { __typename?: 'SiteSiteMetadataMainNavEntriesNames' } & Pick<
                        SiteSiteMetadataMainNavEntriesNames,
                        'en' | 'de'
                      >
                    >;
                  }
              >
            >
          >;
        }
      >;
    }
  >;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_1_Query = { __typename?: 'Query' } & {
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<{ __typename?: 'SiteSiteMetadata' } & Pick<SiteSiteMetadata, 'title'>>;
    }
  >;
};

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_2_Query = { __typename?: 'Query' } & {
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<{ __typename?: 'SiteSiteMetadata' } & Pick<SiteSiteMetadata, 'title'>>;
    }
  >;
  allMarkdownRemark: { __typename?: 'MarkdownRemarkConnection' } & {
    edges: Array<
      { __typename?: 'MarkdownRemarkEdge' } & {
        node: { __typename?: 'MarkdownRemark' } & Pick<MarkdownRemark, 'excerpt'> & {
            fields?: Maybe<
              { __typename?: 'MarkdownRemarkFields' } & Pick<MarkdownRemarkFields, 'slug'>
            >;
            frontmatter?: Maybe<
              { __typename?: 'MarkdownRemarkFrontmatter' } & Pick<
                MarkdownRemarkFrontmatter,
                'date' | 'title' | 'description'
              >
            >;
          };
      }
    >;
  };
};

export type PrismicFaqPageQueryVariables = Exact<{ [key: string]: never }>;

export type PrismicFaqPageQuery = { __typename?: 'Query' } & {
  prismicFaqPage?: Maybe<
    { __typename?: 'PrismicFaqPage' } & {
      data?: Maybe<
        { __typename?: 'PrismicFaqPageDataType' } & {
          title?: Maybe<
            { __typename?: 'PrismicStructuredTextType' } & Pick<PrismicStructuredTextType, 'raw'>
          >;
          description?: Maybe<
            { __typename?: 'PrismicStructuredTextType' } & Pick<PrismicStructuredTextType, 'raw'>
          >;
          title_group_1?: Maybe<
            { __typename?: 'PrismicStructuredTextType' } & Pick<PrismicStructuredTextType, 'raw'>
          >;
          entries?: Maybe<
            Array<
              Maybe<
                { __typename?: 'PrismicFaqPageEntriesGroupType' } & {
                  answer?: Maybe<
                    { __typename?: 'PrismicStructuredTextType' } & Pick<
                      PrismicStructuredTextType,
                      'html' | 'text' | 'raw'
                    >
                  >;
                  question?: Maybe<
                    { __typename?: 'PrismicStructuredTextType' } & Pick<
                      PrismicStructuredTextType,
                      'html' | 'raw' | 'text'
                    >
                  >;
                }
              >
            >
          >;
        }
      >;
    }
  >;
};

export type Unnamed_3_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_3_Query = { __typename?: 'Query' } & {
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<{ __typename?: 'SiteSiteMetadata' } & Pick<SiteSiteMetadata, 'title'>>;
    }
  >;
  allMarkdownRemark: { __typename?: 'MarkdownRemarkConnection' } & {
    edges: Array<
      { __typename?: 'MarkdownRemarkEdge' } & {
        node: { __typename?: 'MarkdownRemark' } & Pick<MarkdownRemark, 'excerpt'> & {
            fields?: Maybe<
              { __typename?: 'MarkdownRemarkFields' } & Pick<MarkdownRemarkFields, 'slug'>
            >;
            frontmatter?: Maybe<
              { __typename?: 'MarkdownRemarkFrontmatter' } & Pick<
                MarkdownRemarkFrontmatter,
                'date' | 'title' | 'description'
              >
            >;
          };
      }
    >;
  };
  allFile: { __typename?: 'FileConnection' } & {
    edges: Array<
      { __typename?: 'FileEdge' } & {
        node: { __typename?: 'File' } & Pick<File, 'id' | 'name' | 'sourceInstanceName'> & {
            childFaqJson?: Maybe<
              { __typename?: 'FaqJson' } & {
                section_main?: Maybe<
                  { __typename?: 'FaqJsonSection_main' } & {
                    sections?: Maybe<
                      Array<
                        Maybe<
                          { __typename?: 'FaqJsonSection_mainSections' } & Pick<
                            FaqJsonSection_MainSections,
                            'id' | 'title'
                          > & {
                              accordion?: Maybe<
                                Array<
                                  Maybe<
                                    { __typename?: 'FaqJsonSection_mainSectionsAccordion' } & Pick<
                                      FaqJsonSection_MainSectionsAccordion,
                                      'title' | 'textblock'
                                    >
                                  >
                                >
                              >;
                            }
                        >
                      >
                    >;
                    headline?: Maybe<
                      { __typename?: 'FaqJsonSection_mainHeadline' } & Pick<
                        FaqJsonSection_MainHeadline,
                        'title'
                      >
                    >;
                  }
                >;
              }
            >;
          };
      }
    >;
  };
};

export type PageQueryQueryVariables = Exact<{ [key: string]: never }>;

export type PageQueryQuery = { __typename?: 'Query' } & {
  allPrismicIndexPage: { __typename?: 'PrismicIndexPageConnection' } & {
    nodes: Array<
      { __typename?: 'PrismicIndexPage' } & {
        data?: Maybe<
          { __typename?: 'PrismicIndexPageDataType' } & {
            description?: Maybe<
              { __typename?: 'PrismicStructuredTextType' } & Pick<
                PrismicStructuredTextType,
                'html' | 'raw' | 'text'
              >
            >;
            title?: Maybe<
              { __typename?: 'PrismicStructuredTextType' } & Pick<
                PrismicStructuredTextType,
                'html' | 'raw' | 'text'
              >
            >;
          }
        >;
      }
    >;
    edges: Array<
      { __typename?: 'PrismicIndexPageEdge' } & {
        node: { __typename?: 'PrismicIndexPage' } & {
          data?: Maybe<
            { __typename?: 'PrismicIndexPageDataType' } & {
              description?: Maybe<
                { __typename?: 'PrismicStructuredTextType' } & Pick<
                  PrismicStructuredTextType,
                  'html' | 'raw' | 'text'
                >
              >;
              title?: Maybe<
                { __typename?: 'PrismicStructuredTextType' } & Pick<
                  PrismicStructuredTextType,
                  'html' | 'raw' | 'text'
                >
              >;
            }
          >;
        };
      }
    >;
  };
  allPrismicTest: { __typename?: 'PrismicTestConnection' } & {
    nodes: Array<
      { __typename?: 'PrismicTest' } & {
        data?: Maybe<
          { __typename?: 'PrismicTestDataType' } & {
            image?: Maybe<
              { __typename?: 'PrismicImageType' } & Pick<
                PrismicImageType,
                'alt' | 'copyright' | 'url' | 'thumbnails'
              >
            >;
            text?: Maybe<
              { __typename?: 'PrismicStructuredTextType' } & Pick<
                PrismicStructuredTextType,
                'html' | 'raw' | 'text'
              >
            >;
          }
        >;
      }
    >;
  };
};

export type Unnamed_4_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_4_Query = { __typename?: 'Query' } & {
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<{ __typename?: 'SiteSiteMetadata' } & Pick<SiteSiteMetadata, 'title'>>;
    }
  >;
  allMarkdownRemark: { __typename?: 'MarkdownRemarkConnection' } & {
    edges: Array<
      { __typename?: 'MarkdownRemarkEdge' } & {
        node: { __typename?: 'MarkdownRemark' } & Pick<MarkdownRemark, 'excerpt'> & {
            fields?: Maybe<
              { __typename?: 'MarkdownRemarkFields' } & Pick<MarkdownRemarkFields, 'slug'>
            >;
            frontmatter?: Maybe<
              { __typename?: 'MarkdownRemarkFrontmatter' } & Pick<
                MarkdownRemarkFrontmatter,
                'date' | 'title' | 'description'
              >
            >;
          };
      }
    >;
  };
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  StringQueryOperatorInput: StringQueryOperatorInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  IntQueryOperatorInput: IntQueryOperatorInput;
  DateQueryOperatorInput: DateQueryOperatorInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  FloatQueryOperatorInput: FloatQueryOperatorInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ImageSharpFilterInput: ImageSharpFilterInput;
  ImageSharpFixedFilterInput: ImageSharpFixedFilterInput;
  ImageSharpResolutionsFilterInput: ImageSharpResolutionsFilterInput;
  ImageSharpFluidFilterInput: ImageSharpFluidFilterInput;
  ImageSharpSizesFilterInput: ImageSharpSizesFilterInput;
  ImageSharpOriginalFilterInput: ImageSharpOriginalFilterInput;
  ImageSharpResizeFilterInput: ImageSharpResizeFilterInput;
  NodeFilterInput: NodeFilterInput;
  NodeFilterListInput: NodeFilterListInput;
  InternalFilterInput: InternalFilterInput;
  BooleanQueryOperatorInput: BooleanQueryOperatorInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  MarkdownRemarkFilterInput: MarkdownRemarkFilterInput;
  MarkdownRemarkFrontmatterFilterInput: MarkdownRemarkFrontmatterFilterInput;
  MarkdownRemarkFieldsFilterInput: MarkdownRemarkFieldsFilterInput;
  JSONQueryOperatorInput: JsonQueryOperatorInput;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  MarkdownHeadingFilterListInput: MarkdownHeadingFilterListInput;
  MarkdownHeadingFilterInput: MarkdownHeadingFilterInput;
  MarkdownWordCountFilterInput: MarkdownWordCountFilterInput;
  FaqJsonFilterInput: FaqJsonFilterInput;
  FaqJsonSection_mainFilterInput: FaqJsonSection_MainFilterInput;
  FaqJsonSection_mainHeadlineFilterInput: FaqJsonSection_MainHeadlineFilterInput;
  FaqJsonSection_mainTextsFilterInput: FaqJsonSection_MainTextsFilterInput;
  FaqJsonSection_mainSectionsFilterListInput: FaqJsonSection_MainSectionsFilterListInput;
  FaqJsonSection_mainSectionsFilterInput: FaqJsonSection_MainSectionsFilterInput;
  FaqJsonSection_mainSectionsAccordionFilterListInput: FaqJsonSection_MainSectionsAccordionFilterListInput;
  FaqJsonSection_mainSectionsAccordionFilterInput: FaqJsonSection_MainSectionsAccordionFilterInput;
  File: ResolverTypeWrapper<File>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Node:
    | ResolversTypes['File']
    | ResolversTypes['ImageSharp']
    | ResolversTypes['MarkdownRemark']
    | ResolversTypes['FaqJson']
    | ResolversTypes['Directory']
    | ResolversTypes['SitePage']
    | ResolversTypes['SitePlugin']
    | ResolversTypes['Site']
    | ResolversTypes['PrismicIndexPage']
    | ResolversTypes['PrismicTest']
    | ResolversTypes['PrismicFaqPage']
    | ResolversTypes['PrismicFaqEntry']
    | ResolversTypes['SiteBuildMetadata'];
  Internal: ResolverTypeWrapper<Internal>;
  ImageSharp: ResolverTypeWrapper<ImageSharp>;
  DuotoneGradient: DuotoneGradient;
  Potrace: Potrace;
  PotraceTurnPolicy: PotraceTurnPolicy;
  ImageFormat: ImageFormat;
  ImageCropFocus: ImageCropFocus;
  ImageFit: ImageFit;
  ImageSharpFixed: ResolverTypeWrapper<ImageSharpFixed>;
  ImageSharpResolutions: ResolverTypeWrapper<ImageSharpResolutions>;
  ImageSharpFluid: ResolverTypeWrapper<ImageSharpFluid>;
  ImageSharpSizes: ResolverTypeWrapper<ImageSharpSizes>;
  ImageSharpOriginal: ResolverTypeWrapper<ImageSharpOriginal>;
  ImageSharpResize: ResolverTypeWrapper<ImageSharpResize>;
  MarkdownRemark: ResolverTypeWrapper<MarkdownRemark>;
  MarkdownRemarkFrontmatter: ResolverTypeWrapper<MarkdownRemarkFrontmatter>;
  MarkdownExcerptFormats: MarkdownExcerptFormats;
  MarkdownRemarkFields: ResolverTypeWrapper<MarkdownRemarkFields>;
  MarkdownHeadingLevels: MarkdownHeadingLevels;
  MarkdownHeading: ResolverTypeWrapper<MarkdownHeading>;
  MarkdownWordCount: ResolverTypeWrapper<MarkdownWordCount>;
  FaqJson: ResolverTypeWrapper<FaqJson>;
  FaqJsonSection_main: ResolverTypeWrapper<FaqJsonSection_Main>;
  FaqJsonSection_mainHeadline: ResolverTypeWrapper<FaqJsonSection_MainHeadline>;
  FaqJsonSection_mainTexts: ResolverTypeWrapper<FaqJsonSection_MainTexts>;
  FaqJsonSection_mainSections: ResolverTypeWrapper<FaqJsonSection_MainSections>;
  FaqJsonSection_mainSectionsAccordion: ResolverTypeWrapper<FaqJsonSection_MainSectionsAccordion>;
  FileFilterInput: FileFilterInput;
  FileSortInput: FileSortInput;
  FileFieldsEnum: FileFieldsEnum;
  SortOrderEnum: SortOrderEnum;
  FileConnection: ResolverTypeWrapper<FileConnection>;
  FileEdge: ResolverTypeWrapper<FileEdge>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  FileGroupConnection: ResolverTypeWrapper<FileGroupConnection>;
  Directory: ResolverTypeWrapper<Directory>;
  DirectoryFilterInput: DirectoryFilterInput;
  DirectorySortInput: DirectorySortInput;
  DirectoryFieldsEnum: DirectoryFieldsEnum;
  DirectoryConnection: ResolverTypeWrapper<DirectoryConnection>;
  DirectoryEdge: ResolverTypeWrapper<DirectoryEdge>;
  DirectoryGroupConnection: ResolverTypeWrapper<DirectoryGroupConnection>;
  SitePageContextFilterInput: SitePageContextFilterInput;
  SitePageContextPreviousFilterInput: SitePageContextPreviousFilterInput;
  SitePageContextPreviousFieldsFilterInput: SitePageContextPreviousFieldsFilterInput;
  SitePageContextPreviousFrontmatterFilterInput: SitePageContextPreviousFrontmatterFilterInput;
  SitePageContextNextFilterInput: SitePageContextNextFilterInput;
  SitePageContextNextFieldsFilterInput: SitePageContextNextFieldsFilterInput;
  SitePageContextNextFrontmatterFilterInput: SitePageContextNextFrontmatterFilterInput;
  SitePluginFilterInput: SitePluginFilterInput;
  SitePluginPluginOptionsFilterInput: SitePluginPluginOptionsFilterInput;
  SitePluginPluginOptionsPluginsFilterListInput: SitePluginPluginOptionsPluginsFilterListInput;
  SitePluginPluginOptionsPluginsFilterInput: SitePluginPluginOptionsPluginsFilterInput;
  SitePluginPluginOptionsPluginsPluginOptionsFilterInput: SitePluginPluginOptionsPluginsPluginOptionsFilterInput;
  SitePluginPluginOptionsSchemasFilterInput: SitePluginPluginOptionsSchemasFilterInput;
  SitePluginPluginOptionsSchemasIndex_pageFilterInput: SitePluginPluginOptionsSchemasIndex_PageFilterInput;
  SitePluginPluginOptionsSchemasIndex_pageMainFilterInput: SitePluginPluginOptionsSchemasIndex_PageMainFilterInput;
  SitePluginPluginOptionsSchemasIndex_pageMainUidFilterInput: SitePluginPluginOptionsSchemasIndex_PageMainUidFilterInput;
  SitePluginPluginOptionsSchemasIndex_pageMainUidConfigFilterInput: SitePluginPluginOptionsSchemasIndex_PageMainUidConfigFilterInput;
  SitePluginPluginOptionsSchemasIndex_pageMainTitleFilterInput: SitePluginPluginOptionsSchemasIndex_PageMainTitleFilterInput;
  SitePluginPluginOptionsSchemasIndex_pageMainTitleConfigFilterInput: SitePluginPluginOptionsSchemasIndex_PageMainTitleConfigFilterInput;
  SitePluginPluginOptionsSchemasIndex_pageMainDescriptionFilterInput: SitePluginPluginOptionsSchemasIndex_PageMainDescriptionFilterInput;
  SitePluginPluginOptionsSchemasIndex_pageMainDescriptionConfigFilterInput: SitePluginPluginOptionsSchemasIndex_PageMainDescriptionConfigFilterInput;
  SitePluginPluginOptionsSchemasTestFilterInput: SitePluginPluginOptionsSchemasTestFilterInput;
  SitePluginPluginOptionsSchemasTestMainFilterInput: SitePluginPluginOptionsSchemasTestMainFilterInput;
  SitePluginPluginOptionsSchemasTestMainTitleFilterInput: SitePluginPluginOptionsSchemasTestMainTitleFilterInput;
  SitePluginPluginOptionsSchemasTestMainTitleConfigFilterInput: SitePluginPluginOptionsSchemasTestMainTitleConfigFilterInput;
  SitePluginPluginOptionsSchemasTestMainTextFilterInput: SitePluginPluginOptionsSchemasTestMainTextFilterInput;
  SitePluginPluginOptionsSchemasTestMainTextConfigFilterInput: SitePluginPluginOptionsSchemasTestMainTextConfigFilterInput;
  SitePluginPluginOptionsSchemasTestMainImageFilterInput: SitePluginPluginOptionsSchemasTestMainImageFilterInput;
  SitePluginPluginOptionsSchemasTestMainImageConfigFilterInput: SitePluginPluginOptionsSchemasTestMainImageConfigFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageFilterInput: SitePluginPluginOptionsSchemasFaq_PageFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainTitleFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainTitleFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainTitleConfigFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainTitleConfigFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainDescriptionFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainDescriptionFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainDescriptionConfigFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainDescriptionConfigFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainTitle_group_1FilterInput: SitePluginPluginOptionsSchemasFaq_PageMainTitle_Group_1FilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainTitle_group_1ConfigFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainTitle_Group_1ConfigFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainEntriesFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsQuestionFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsQuestionFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsQuestionConfigFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsQuestionConfigFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsAnswerFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsAnswerFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsAnswerConfigFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsAnswerConfigFilterInput;
  SitePluginPackageJsonFilterInput: SitePluginPackageJsonFilterInput;
  SitePluginPackageJsonDependenciesFilterListInput: SitePluginPackageJsonDependenciesFilterListInput;
  SitePluginPackageJsonDependenciesFilterInput: SitePluginPackageJsonDependenciesFilterInput;
  SitePluginPackageJsonDevDependenciesFilterListInput: SitePluginPackageJsonDevDependenciesFilterListInput;
  SitePluginPackageJsonDevDependenciesFilterInput: SitePluginPackageJsonDevDependenciesFilterInput;
  SitePluginPackageJsonPeerDependenciesFilterListInput: SitePluginPackageJsonPeerDependenciesFilterListInput;
  SitePluginPackageJsonPeerDependenciesFilterInput: SitePluginPackageJsonPeerDependenciesFilterInput;
  SitePage: ResolverTypeWrapper<SitePage>;
  SitePageContext: ResolverTypeWrapper<SitePageContext>;
  SitePageContextPrevious: ResolverTypeWrapper<SitePageContextPrevious>;
  SitePageContextPreviousFields: ResolverTypeWrapper<SitePageContextPreviousFields>;
  SitePageContextPreviousFrontmatter: ResolverTypeWrapper<SitePageContextPreviousFrontmatter>;
  SitePageContextNext: ResolverTypeWrapper<SitePageContextNext>;
  SitePageContextNextFields: ResolverTypeWrapper<SitePageContextNextFields>;
  SitePageContextNextFrontmatter: ResolverTypeWrapper<SitePageContextNextFrontmatter>;
  SitePlugin: ResolverTypeWrapper<SitePlugin>;
  SitePluginPluginOptions: ResolverTypeWrapper<SitePluginPluginOptions>;
  SitePluginPluginOptionsPlugins: ResolverTypeWrapper<SitePluginPluginOptionsPlugins>;
  SitePluginPluginOptionsPluginsPluginOptions: ResolverTypeWrapper<
    SitePluginPluginOptionsPluginsPluginOptions
  >;
  SitePluginPluginOptionsSchemas: ResolverTypeWrapper<SitePluginPluginOptionsSchemas>;
  SitePluginPluginOptionsSchemasIndex_page: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasIndex_Page
  >;
  SitePluginPluginOptionsSchemasIndex_pageMain: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasIndex_PageMain
  >;
  SitePluginPluginOptionsSchemasIndex_pageMainUid: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasIndex_PageMainUid
  >;
  SitePluginPluginOptionsSchemasIndex_pageMainUidConfig: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasIndex_PageMainUidConfig
  >;
  SitePluginPluginOptionsSchemasIndex_pageMainTitle: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasIndex_PageMainTitle
  >;
  SitePluginPluginOptionsSchemasIndex_pageMainTitleConfig: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasIndex_PageMainTitleConfig
  >;
  SitePluginPluginOptionsSchemasIndex_pageMainDescription: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasIndex_PageMainDescription
  >;
  SitePluginPluginOptionsSchemasIndex_pageMainDescriptionConfig: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasIndex_PageMainDescriptionConfig
  >;
  SitePluginPluginOptionsSchemasTest: ResolverTypeWrapper<SitePluginPluginOptionsSchemasTest>;
  SitePluginPluginOptionsSchemasTestMain: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasTestMain
  >;
  SitePluginPluginOptionsSchemasTestMainTitle: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasTestMainTitle
  >;
  SitePluginPluginOptionsSchemasTestMainTitleConfig: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasTestMainTitleConfig
  >;
  SitePluginPluginOptionsSchemasTestMainText: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasTestMainText
  >;
  SitePluginPluginOptionsSchemasTestMainTextConfig: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasTestMainTextConfig
  >;
  SitePluginPluginOptionsSchemasTestMainImage: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasTestMainImage
  >;
  SitePluginPluginOptionsSchemasTestMainImageConfig: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasTestMainImageConfig
  >;
  SitePluginPluginOptionsSchemasFaq_page: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasFaq_Page
  >;
  SitePluginPluginOptionsSchemasFaq_pageMain: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasFaq_PageMain
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainTitle: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasFaq_PageMainTitle
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainTitleConfig: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasFaq_PageMainTitleConfig
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainDescription: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasFaq_PageMainDescription
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainDescriptionConfig: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasFaq_PageMainDescriptionConfig
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainTitle_group_1: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasFaq_PageMainTitle_Group_1
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainTitle_group_1Config: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasFaq_PageMainTitle_Group_1Config
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainEntries: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasFaq_PageMainEntries
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfig: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfig
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFields: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFields
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsQuestion: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsQuestion
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsQuestionConfig: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsQuestionConfig
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsAnswer: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsAnswer
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsAnswerConfig: ResolverTypeWrapper<
    SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsAnswerConfig
  >;
  SitePluginPackageJson: ResolverTypeWrapper<SitePluginPackageJson>;
  SitePluginPackageJsonDependencies: ResolverTypeWrapper<SitePluginPackageJsonDependencies>;
  SitePluginPackageJsonDevDependencies: ResolverTypeWrapper<SitePluginPackageJsonDevDependencies>;
  SitePluginPackageJsonPeerDependencies: ResolverTypeWrapper<SitePluginPackageJsonPeerDependencies>;
  SitePageFilterInput: SitePageFilterInput;
  SitePageSortInput: SitePageSortInput;
  SitePageFieldsEnum: SitePageFieldsEnum;
  SitePageConnection: ResolverTypeWrapper<SitePageConnection>;
  SitePageEdge: ResolverTypeWrapper<SitePageEdge>;
  SitePageGroupConnection: ResolverTypeWrapper<SitePageGroupConnection>;
  SiteSiteMetadataFilterInput: SiteSiteMetadataFilterInput;
  SiteSiteMetadataAuthorFilterInput: SiteSiteMetadataAuthorFilterInput;
  SiteSiteMetadataSocialFilterInput: SiteSiteMetadataSocialFilterInput;
  SiteSiteMetadataCopyrightFilterInput: SiteSiteMetadataCopyrightFilterInput;
  SiteSiteMetadataMainNavEntriesFilterListInput: SiteSiteMetadataMainNavEntriesFilterListInput;
  SiteSiteMetadataMainNavEntriesFilterInput: SiteSiteMetadataMainNavEntriesFilterInput;
  SiteSiteMetadataMainNavEntriesNamesFilterInput: SiteSiteMetadataMainNavEntriesNamesFilterInput;
  SiteSiteMetadataFooterNavEntriesFilterListInput: SiteSiteMetadataFooterNavEntriesFilterListInput;
  SiteSiteMetadataFooterNavEntriesFilterInput: SiteSiteMetadataFooterNavEntriesFilterInput;
  SiteSiteMetadataFooterNavEntriesTitlesFilterInput: SiteSiteMetadataFooterNavEntriesTitlesFilterInput;
  SiteSiteMetadataFooterNavEntriesLinksFilterListInput: SiteSiteMetadataFooterNavEntriesLinksFilterListInput;
  SiteSiteMetadataFooterNavEntriesLinksFilterInput: SiteSiteMetadataFooterNavEntriesLinksFilterInput;
  SiteSiteMetadataFooterNavEntriesLinksNamesFilterInput: SiteSiteMetadataFooterNavEntriesLinksNamesFilterInput;
  SiteSiteMetadataGithubLinkFilterInput: SiteSiteMetadataGithubLinkFilterInput;
  SiteSiteMetadataGithubLinkNamesFilterInput: SiteSiteMetadataGithubLinkNamesFilterInput;
  Site: ResolverTypeWrapper<Site>;
  SiteSiteMetadata: ResolverTypeWrapper<SiteSiteMetadata>;
  SiteSiteMetadataAuthor: ResolverTypeWrapper<SiteSiteMetadataAuthor>;
  SiteSiteMetadataSocial: ResolverTypeWrapper<SiteSiteMetadataSocial>;
  SiteSiteMetadataCopyright: ResolverTypeWrapper<SiteSiteMetadataCopyright>;
  SiteSiteMetadataMainNavEntries: ResolverTypeWrapper<SiteSiteMetadataMainNavEntries>;
  SiteSiteMetadataMainNavEntriesNames: ResolverTypeWrapper<SiteSiteMetadataMainNavEntriesNames>;
  SiteSiteMetadataFooterNavEntries: ResolverTypeWrapper<SiteSiteMetadataFooterNavEntries>;
  SiteSiteMetadataFooterNavEntriesTitles: ResolverTypeWrapper<
    SiteSiteMetadataFooterNavEntriesTitles
  >;
  SiteSiteMetadataFooterNavEntriesLinks: ResolverTypeWrapper<SiteSiteMetadataFooterNavEntriesLinks>;
  SiteSiteMetadataFooterNavEntriesLinksNames: ResolverTypeWrapper<
    SiteSiteMetadataFooterNavEntriesLinksNames
  >;
  SiteSiteMetadataGithubLink: ResolverTypeWrapper<SiteSiteMetadataGithubLink>;
  SiteSiteMetadataGithubLinkNames: ResolverTypeWrapper<SiteSiteMetadataGithubLinkNames>;
  SiteFilterInput: SiteFilterInput;
  SiteSortInput: SiteSortInput;
  SiteFieldsEnum: SiteFieldsEnum;
  SiteConnection: ResolverTypeWrapper<SiteConnection>;
  SiteEdge: ResolverTypeWrapper<SiteEdge>;
  SiteGroupConnection: ResolverTypeWrapper<SiteGroupConnection>;
  MarkdownRemarkSortInput: MarkdownRemarkSortInput;
  MarkdownRemarkFieldsEnum: MarkdownRemarkFieldsEnum;
  MarkdownRemarkConnection: ResolverTypeWrapper<MarkdownRemarkConnection>;
  MarkdownRemarkEdge: ResolverTypeWrapper<MarkdownRemarkEdge>;
  MarkdownRemarkGroupConnection: ResolverTypeWrapper<MarkdownRemarkGroupConnection>;
  ImageSharpSortInput: ImageSharpSortInput;
  ImageSharpFieldsEnum: ImageSharpFieldsEnum;
  ImageSharpConnection: ResolverTypeWrapper<ImageSharpConnection>;
  ImageSharpEdge: ResolverTypeWrapper<ImageSharpEdge>;
  ImageSharpGroupConnection: ResolverTypeWrapper<ImageSharpGroupConnection>;
  PrismicIndexPageDataTypeFilterInput: PrismicIndexPageDataTypeFilterInput;
  PrismicStructuredTextTypeFilterInput: PrismicStructuredTextTypeFilterInput;
  PrismicLinkTypeFilterListInput: PrismicLinkTypeFilterListInput;
  PrismicLinkTypeFilterInput: PrismicLinkTypeFilterInput;
  PrismicLinkTypesQueryOperatorInput: PrismicLinkTypesQueryOperatorInput;
  PrismicLinkTypes: PrismicLinkTypes;
  IDQueryOperatorInput: IdQueryOperatorInput;
  PrismicIndexPage: ResolverTypeWrapper<PrismicIndexPage>;
  PrismicDocument:
    | ResolversTypes['PrismicIndexPage']
    | ResolversTypes['PrismicTest']
    | ResolversTypes['PrismicFaqPage'];
  PrismicLinkType: ResolverTypeWrapper<
    Omit<PrismicLinkType, 'document'> & {
      document?: Maybe<ResolversTypes['PrismicAllDocumentTypes']>;
    }
  >;
  PrismicAllDocumentTypes:
    | ResolversTypes['PrismicIndexPage']
    | ResolversTypes['PrismicTest']
    | ResolversTypes['PrismicFaqPage'];
  PrismicTest: ResolverTypeWrapper<PrismicTest>;
  PrismicTestDataType: ResolverTypeWrapper<PrismicTestDataType>;
  PrismicStructuredTextType: ResolverTypeWrapper<PrismicStructuredTextType>;
  PrismicImageType: ResolverTypeWrapper<PrismicImageType>;
  PrismicImageInterface:
    | ResolversTypes['PrismicImageType']
    | ResolversTypes['PrismicImageThumbnailType'];
  PrismicImageDimensionsType: ResolverTypeWrapper<PrismicImageDimensionsType>;
  PrismicImageFixedType: ResolverTypeWrapper<PrismicImageFixedType>;
  PrismicImageFluidType: ResolverTypeWrapper<PrismicImageFluidType>;
  ImgixUrlParamsInput: ImgixUrlParamsInput;
  PrismicImageThumbnailsType: ResolverTypeWrapper<Scalars['PrismicImageThumbnailsType']>;
  PrismicFaqPage: ResolverTypeWrapper<PrismicFaqPage>;
  PrismicFaqPageDataType: ResolverTypeWrapper<PrismicFaqPageDataType>;
  PrismicFaqPageEntriesGroupType: ResolverTypeWrapper<PrismicFaqPageEntriesGroupType>;
  PrismicIndexPageDataType: ResolverTypeWrapper<PrismicIndexPageDataType>;
  PrismicIndexPageFilterInput: PrismicIndexPageFilterInput;
  PrismicIndexPageSortInput: PrismicIndexPageSortInput;
  PrismicIndexPageFieldsEnum: PrismicIndexPageFieldsEnum;
  PrismicIndexPageConnection: ResolverTypeWrapper<PrismicIndexPageConnection>;
  PrismicIndexPageEdge: ResolverTypeWrapper<PrismicIndexPageEdge>;
  PrismicIndexPageGroupConnection: ResolverTypeWrapper<PrismicIndexPageGroupConnection>;
  PrismicTestDataTypeFilterInput: PrismicTestDataTypeFilterInput;
  PrismicImageTypeFilterInput: PrismicImageTypeFilterInput;
  PrismicImageDimensionsTypeFilterInput: PrismicImageDimensionsTypeFilterInput;
  PrismicImageFixedTypeFilterInput: PrismicImageFixedTypeFilterInput;
  PrismicImageFluidTypeFilterInput: PrismicImageFluidTypeFilterInput;
  PrismicImageThumbnailsTypeQueryOperatorInput: PrismicImageThumbnailsTypeQueryOperatorInput;
  PrismicTestFilterInput: PrismicTestFilterInput;
  PrismicTestSortInput: PrismicTestSortInput;
  PrismicTestFieldsEnum: PrismicTestFieldsEnum;
  PrismicTestConnection: ResolverTypeWrapper<PrismicTestConnection>;
  PrismicTestEdge: ResolverTypeWrapper<PrismicTestEdge>;
  PrismicTestGroupConnection: ResolverTypeWrapper<PrismicTestGroupConnection>;
  PrismicFaqPageDataTypeFilterInput: PrismicFaqPageDataTypeFilterInput;
  PrismicFaqPageEntriesGroupTypeFilterListInput: PrismicFaqPageEntriesGroupTypeFilterListInput;
  PrismicFaqPageEntriesGroupTypeFilterInput: PrismicFaqPageEntriesGroupTypeFilterInput;
  PrismicFaqPageFilterInput: PrismicFaqPageFilterInput;
  PrismicFaqPageSortInput: PrismicFaqPageSortInput;
  PrismicFaqPageFieldsEnum: PrismicFaqPageFieldsEnum;
  PrismicFaqPageConnection: ResolverTypeWrapper<PrismicFaqPageConnection>;
  PrismicFaqPageEdge: ResolverTypeWrapper<PrismicFaqPageEdge>;
  PrismicFaqPageGroupConnection: ResolverTypeWrapper<PrismicFaqPageGroupConnection>;
  PrismicFaqEntryDataFilterInput: PrismicFaqEntryDataFilterInput;
  PrismicFaqEntryDataTitleFilterListInput: PrismicFaqEntryDataTitleFilterListInput;
  PrismicFaqEntryDataTitleFilterInput: PrismicFaqEntryDataTitleFilterInput;
  PrismicFaqEntryDataQuestionFilterListInput: PrismicFaqEntryDataQuestionFilterListInput;
  PrismicFaqEntryDataQuestionFilterInput: PrismicFaqEntryDataQuestionFilterInput;
  PrismicFaqEntryDataAnswerFilterListInput: PrismicFaqEntryDataAnswerFilterListInput;
  PrismicFaqEntryDataAnswerFilterInput: PrismicFaqEntryDataAnswerFilterInput;
  PrismicFaqEntryDataRawFilterInput: PrismicFaqEntryDataRawFilterInput;
  PrismicFaqEntryDataRawTitleFilterListInput: PrismicFaqEntryDataRawTitleFilterListInput;
  PrismicFaqEntryDataRawTitleFilterInput: PrismicFaqEntryDataRawTitleFilterInput;
  PrismicFaqEntryDataRawQuestionFilterListInput: PrismicFaqEntryDataRawQuestionFilterListInput;
  PrismicFaqEntryDataRawQuestionFilterInput: PrismicFaqEntryDataRawQuestionFilterInput;
  PrismicFaqEntryDataRawAnswerFilterListInput: PrismicFaqEntryDataRawAnswerFilterListInput;
  PrismicFaqEntryDataRawAnswerFilterInput: PrismicFaqEntryDataRawAnswerFilterInput;
  PrismicFaqEntry: ResolverTypeWrapper<PrismicFaqEntry>;
  PrismicFaqEntryData: ResolverTypeWrapper<PrismicFaqEntryData>;
  PrismicFaqEntryDataTitle: ResolverTypeWrapper<PrismicFaqEntryDataTitle>;
  PrismicFaqEntryDataQuestion: ResolverTypeWrapper<PrismicFaqEntryDataQuestion>;
  PrismicFaqEntryDataAnswer: ResolverTypeWrapper<PrismicFaqEntryDataAnswer>;
  PrismicFaqEntryDataRaw: ResolverTypeWrapper<PrismicFaqEntryDataRaw>;
  PrismicFaqEntryDataRawTitle: ResolverTypeWrapper<PrismicFaqEntryDataRawTitle>;
  PrismicFaqEntryDataRawQuestion: ResolverTypeWrapper<PrismicFaqEntryDataRawQuestion>;
  PrismicFaqEntryDataRawAnswer: ResolverTypeWrapper<PrismicFaqEntryDataRawAnswer>;
  PrismicFaqEntryFilterInput: PrismicFaqEntryFilterInput;
  PrismicFaqEntrySortInput: PrismicFaqEntrySortInput;
  PrismicFaqEntryFieldsEnum: PrismicFaqEntryFieldsEnum;
  PrismicFaqEntryConnection: ResolverTypeWrapper<PrismicFaqEntryConnection>;
  PrismicFaqEntryEdge: ResolverTypeWrapper<PrismicFaqEntryEdge>;
  PrismicFaqEntryGroupConnection: ResolverTypeWrapper<PrismicFaqEntryGroupConnection>;
  FaqJsonSortInput: FaqJsonSortInput;
  FaqJsonFieldsEnum: FaqJsonFieldsEnum;
  FaqJsonConnection: ResolverTypeWrapper<FaqJsonConnection>;
  FaqJsonEdge: ResolverTypeWrapper<FaqJsonEdge>;
  FaqJsonGroupConnection: ResolverTypeWrapper<FaqJsonGroupConnection>;
  SiteBuildMetadata: ResolverTypeWrapper<SiteBuildMetadata>;
  SiteBuildMetadataFilterInput: SiteBuildMetadataFilterInput;
  SiteBuildMetadataSortInput: SiteBuildMetadataSortInput;
  SiteBuildMetadataFieldsEnum: SiteBuildMetadataFieldsEnum;
  SiteBuildMetadataConnection: ResolverTypeWrapper<SiteBuildMetadataConnection>;
  SiteBuildMetadataEdge: ResolverTypeWrapper<SiteBuildMetadataEdge>;
  SiteBuildMetadataGroupConnection: ResolverTypeWrapper<SiteBuildMetadataGroupConnection>;
  SitePluginSortInput: SitePluginSortInput;
  SitePluginFieldsEnum: SitePluginFieldsEnum;
  SitePluginConnection: ResolverTypeWrapper<SitePluginConnection>;
  SitePluginEdge: ResolverTypeWrapper<SitePluginEdge>;
  SitePluginGroupConnection: ResolverTypeWrapper<SitePluginGroupConnection>;
  PrismicImageThumbnailType: ResolverTypeWrapper<PrismicImageThumbnailType>;
  PrismicGeoPointType: ResolverTypeWrapper<PrismicGeoPointType>;
  PrismicEmbedType: ResolverTypeWrapper<PrismicEmbedType>;
  PrismicSliceType: never;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Int: Scalars['Int'];
  StringQueryOperatorInput: StringQueryOperatorInput;
  String: Scalars['String'];
  IntQueryOperatorInput: IntQueryOperatorInput;
  DateQueryOperatorInput: DateQueryOperatorInput;
  Date: Scalars['Date'];
  FloatQueryOperatorInput: FloatQueryOperatorInput;
  Float: Scalars['Float'];
  ImageSharpFilterInput: ImageSharpFilterInput;
  ImageSharpFixedFilterInput: ImageSharpFixedFilterInput;
  ImageSharpResolutionsFilterInput: ImageSharpResolutionsFilterInput;
  ImageSharpFluidFilterInput: ImageSharpFluidFilterInput;
  ImageSharpSizesFilterInput: ImageSharpSizesFilterInput;
  ImageSharpOriginalFilterInput: ImageSharpOriginalFilterInput;
  ImageSharpResizeFilterInput: ImageSharpResizeFilterInput;
  NodeFilterInput: NodeFilterInput;
  NodeFilterListInput: NodeFilterListInput;
  InternalFilterInput: InternalFilterInput;
  BooleanQueryOperatorInput: BooleanQueryOperatorInput;
  Boolean: Scalars['Boolean'];
  MarkdownRemarkFilterInput: MarkdownRemarkFilterInput;
  MarkdownRemarkFrontmatterFilterInput: MarkdownRemarkFrontmatterFilterInput;
  MarkdownRemarkFieldsFilterInput: MarkdownRemarkFieldsFilterInput;
  JSONQueryOperatorInput: JsonQueryOperatorInput;
  JSON: Scalars['JSON'];
  MarkdownHeadingFilterListInput: MarkdownHeadingFilterListInput;
  MarkdownHeadingFilterInput: MarkdownHeadingFilterInput;
  MarkdownWordCountFilterInput: MarkdownWordCountFilterInput;
  FaqJsonFilterInput: FaqJsonFilterInput;
  FaqJsonSection_mainFilterInput: FaqJsonSection_MainFilterInput;
  FaqJsonSection_mainHeadlineFilterInput: FaqJsonSection_MainHeadlineFilterInput;
  FaqJsonSection_mainTextsFilterInput: FaqJsonSection_MainTextsFilterInput;
  FaqJsonSection_mainSectionsFilterListInput: FaqJsonSection_MainSectionsFilterListInput;
  FaqJsonSection_mainSectionsFilterInput: FaqJsonSection_MainSectionsFilterInput;
  FaqJsonSection_mainSectionsAccordionFilterListInput: FaqJsonSection_MainSectionsAccordionFilterListInput;
  FaqJsonSection_mainSectionsAccordionFilterInput: FaqJsonSection_MainSectionsAccordionFilterInput;
  File: File;
  ID: Scalars['ID'];
  Node:
    | ResolversParentTypes['File']
    | ResolversParentTypes['ImageSharp']
    | ResolversParentTypes['MarkdownRemark']
    | ResolversParentTypes['FaqJson']
    | ResolversParentTypes['Directory']
    | ResolversParentTypes['SitePage']
    | ResolversParentTypes['SitePlugin']
    | ResolversParentTypes['Site']
    | ResolversParentTypes['PrismicIndexPage']
    | ResolversParentTypes['PrismicTest']
    | ResolversParentTypes['PrismicFaqPage']
    | ResolversParentTypes['PrismicFaqEntry']
    | ResolversParentTypes['SiteBuildMetadata'];
  Internal: Internal;
  ImageSharp: ImageSharp;
  DuotoneGradient: DuotoneGradient;
  Potrace: Potrace;
  ImageSharpFixed: ImageSharpFixed;
  ImageSharpResolutions: ImageSharpResolutions;
  ImageSharpFluid: ImageSharpFluid;
  ImageSharpSizes: ImageSharpSizes;
  ImageSharpOriginal: ImageSharpOriginal;
  ImageSharpResize: ImageSharpResize;
  MarkdownRemark: MarkdownRemark;
  MarkdownRemarkFrontmatter: MarkdownRemarkFrontmatter;
  MarkdownRemarkFields: MarkdownRemarkFields;
  MarkdownHeading: MarkdownHeading;
  MarkdownWordCount: MarkdownWordCount;
  FaqJson: FaqJson;
  FaqJsonSection_main: FaqJsonSection_Main;
  FaqJsonSection_mainHeadline: FaqJsonSection_MainHeadline;
  FaqJsonSection_mainTexts: FaqJsonSection_MainTexts;
  FaqJsonSection_mainSections: FaqJsonSection_MainSections;
  FaqJsonSection_mainSectionsAccordion: FaqJsonSection_MainSectionsAccordion;
  FileFilterInput: FileFilterInput;
  FileSortInput: FileSortInput;
  FileConnection: FileConnection;
  FileEdge: FileEdge;
  PageInfo: PageInfo;
  FileGroupConnection: FileGroupConnection;
  Directory: Directory;
  DirectoryFilterInput: DirectoryFilterInput;
  DirectorySortInput: DirectorySortInput;
  DirectoryConnection: DirectoryConnection;
  DirectoryEdge: DirectoryEdge;
  DirectoryGroupConnection: DirectoryGroupConnection;
  SitePageContextFilterInput: SitePageContextFilterInput;
  SitePageContextPreviousFilterInput: SitePageContextPreviousFilterInput;
  SitePageContextPreviousFieldsFilterInput: SitePageContextPreviousFieldsFilterInput;
  SitePageContextPreviousFrontmatterFilterInput: SitePageContextPreviousFrontmatterFilterInput;
  SitePageContextNextFilterInput: SitePageContextNextFilterInput;
  SitePageContextNextFieldsFilterInput: SitePageContextNextFieldsFilterInput;
  SitePageContextNextFrontmatterFilterInput: SitePageContextNextFrontmatterFilterInput;
  SitePluginFilterInput: SitePluginFilterInput;
  SitePluginPluginOptionsFilterInput: SitePluginPluginOptionsFilterInput;
  SitePluginPluginOptionsPluginsFilterListInput: SitePluginPluginOptionsPluginsFilterListInput;
  SitePluginPluginOptionsPluginsFilterInput: SitePluginPluginOptionsPluginsFilterInput;
  SitePluginPluginOptionsPluginsPluginOptionsFilterInput: SitePluginPluginOptionsPluginsPluginOptionsFilterInput;
  SitePluginPluginOptionsSchemasFilterInput: SitePluginPluginOptionsSchemasFilterInput;
  SitePluginPluginOptionsSchemasIndex_pageFilterInput: SitePluginPluginOptionsSchemasIndex_PageFilterInput;
  SitePluginPluginOptionsSchemasIndex_pageMainFilterInput: SitePluginPluginOptionsSchemasIndex_PageMainFilterInput;
  SitePluginPluginOptionsSchemasIndex_pageMainUidFilterInput: SitePluginPluginOptionsSchemasIndex_PageMainUidFilterInput;
  SitePluginPluginOptionsSchemasIndex_pageMainUidConfigFilterInput: SitePluginPluginOptionsSchemasIndex_PageMainUidConfigFilterInput;
  SitePluginPluginOptionsSchemasIndex_pageMainTitleFilterInput: SitePluginPluginOptionsSchemasIndex_PageMainTitleFilterInput;
  SitePluginPluginOptionsSchemasIndex_pageMainTitleConfigFilterInput: SitePluginPluginOptionsSchemasIndex_PageMainTitleConfigFilterInput;
  SitePluginPluginOptionsSchemasIndex_pageMainDescriptionFilterInput: SitePluginPluginOptionsSchemasIndex_PageMainDescriptionFilterInput;
  SitePluginPluginOptionsSchemasIndex_pageMainDescriptionConfigFilterInput: SitePluginPluginOptionsSchemasIndex_PageMainDescriptionConfigFilterInput;
  SitePluginPluginOptionsSchemasTestFilterInput: SitePluginPluginOptionsSchemasTestFilterInput;
  SitePluginPluginOptionsSchemasTestMainFilterInput: SitePluginPluginOptionsSchemasTestMainFilterInput;
  SitePluginPluginOptionsSchemasTestMainTitleFilterInput: SitePluginPluginOptionsSchemasTestMainTitleFilterInput;
  SitePluginPluginOptionsSchemasTestMainTitleConfigFilterInput: SitePluginPluginOptionsSchemasTestMainTitleConfigFilterInput;
  SitePluginPluginOptionsSchemasTestMainTextFilterInput: SitePluginPluginOptionsSchemasTestMainTextFilterInput;
  SitePluginPluginOptionsSchemasTestMainTextConfigFilterInput: SitePluginPluginOptionsSchemasTestMainTextConfigFilterInput;
  SitePluginPluginOptionsSchemasTestMainImageFilterInput: SitePluginPluginOptionsSchemasTestMainImageFilterInput;
  SitePluginPluginOptionsSchemasTestMainImageConfigFilterInput: SitePluginPluginOptionsSchemasTestMainImageConfigFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageFilterInput: SitePluginPluginOptionsSchemasFaq_PageFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainTitleFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainTitleFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainTitleConfigFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainTitleConfigFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainDescriptionFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainDescriptionFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainDescriptionConfigFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainDescriptionConfigFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainTitle_group_1FilterInput: SitePluginPluginOptionsSchemasFaq_PageMainTitle_Group_1FilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainTitle_group_1ConfigFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainTitle_Group_1ConfigFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainEntriesFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsQuestionFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsQuestionFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsQuestionConfigFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsQuestionConfigFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsAnswerFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsAnswerFilterInput;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsAnswerConfigFilterInput: SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsAnswerConfigFilterInput;
  SitePluginPackageJsonFilterInput: SitePluginPackageJsonFilterInput;
  SitePluginPackageJsonDependenciesFilterListInput: SitePluginPackageJsonDependenciesFilterListInput;
  SitePluginPackageJsonDependenciesFilterInput: SitePluginPackageJsonDependenciesFilterInput;
  SitePluginPackageJsonDevDependenciesFilterListInput: SitePluginPackageJsonDevDependenciesFilterListInput;
  SitePluginPackageJsonDevDependenciesFilterInput: SitePluginPackageJsonDevDependenciesFilterInput;
  SitePluginPackageJsonPeerDependenciesFilterListInput: SitePluginPackageJsonPeerDependenciesFilterListInput;
  SitePluginPackageJsonPeerDependenciesFilterInput: SitePluginPackageJsonPeerDependenciesFilterInput;
  SitePage: SitePage;
  SitePageContext: SitePageContext;
  SitePageContextPrevious: SitePageContextPrevious;
  SitePageContextPreviousFields: SitePageContextPreviousFields;
  SitePageContextPreviousFrontmatter: SitePageContextPreviousFrontmatter;
  SitePageContextNext: SitePageContextNext;
  SitePageContextNextFields: SitePageContextNextFields;
  SitePageContextNextFrontmatter: SitePageContextNextFrontmatter;
  SitePlugin: SitePlugin;
  SitePluginPluginOptions: SitePluginPluginOptions;
  SitePluginPluginOptionsPlugins: SitePluginPluginOptionsPlugins;
  SitePluginPluginOptionsPluginsPluginOptions: SitePluginPluginOptionsPluginsPluginOptions;
  SitePluginPluginOptionsSchemas: SitePluginPluginOptionsSchemas;
  SitePluginPluginOptionsSchemasIndex_page: SitePluginPluginOptionsSchemasIndex_Page;
  SitePluginPluginOptionsSchemasIndex_pageMain: SitePluginPluginOptionsSchemasIndex_PageMain;
  SitePluginPluginOptionsSchemasIndex_pageMainUid: SitePluginPluginOptionsSchemasIndex_PageMainUid;
  SitePluginPluginOptionsSchemasIndex_pageMainUidConfig: SitePluginPluginOptionsSchemasIndex_PageMainUidConfig;
  SitePluginPluginOptionsSchemasIndex_pageMainTitle: SitePluginPluginOptionsSchemasIndex_PageMainTitle;
  SitePluginPluginOptionsSchemasIndex_pageMainTitleConfig: SitePluginPluginOptionsSchemasIndex_PageMainTitleConfig;
  SitePluginPluginOptionsSchemasIndex_pageMainDescription: SitePluginPluginOptionsSchemasIndex_PageMainDescription;
  SitePluginPluginOptionsSchemasIndex_pageMainDescriptionConfig: SitePluginPluginOptionsSchemasIndex_PageMainDescriptionConfig;
  SitePluginPluginOptionsSchemasTest: SitePluginPluginOptionsSchemasTest;
  SitePluginPluginOptionsSchemasTestMain: SitePluginPluginOptionsSchemasTestMain;
  SitePluginPluginOptionsSchemasTestMainTitle: SitePluginPluginOptionsSchemasTestMainTitle;
  SitePluginPluginOptionsSchemasTestMainTitleConfig: SitePluginPluginOptionsSchemasTestMainTitleConfig;
  SitePluginPluginOptionsSchemasTestMainText: SitePluginPluginOptionsSchemasTestMainText;
  SitePluginPluginOptionsSchemasTestMainTextConfig: SitePluginPluginOptionsSchemasTestMainTextConfig;
  SitePluginPluginOptionsSchemasTestMainImage: SitePluginPluginOptionsSchemasTestMainImage;
  SitePluginPluginOptionsSchemasTestMainImageConfig: SitePluginPluginOptionsSchemasTestMainImageConfig;
  SitePluginPluginOptionsSchemasFaq_page: SitePluginPluginOptionsSchemasFaq_Page;
  SitePluginPluginOptionsSchemasFaq_pageMain: SitePluginPluginOptionsSchemasFaq_PageMain;
  SitePluginPluginOptionsSchemasFaq_pageMainTitle: SitePluginPluginOptionsSchemasFaq_PageMainTitle;
  SitePluginPluginOptionsSchemasFaq_pageMainTitleConfig: SitePluginPluginOptionsSchemasFaq_PageMainTitleConfig;
  SitePluginPluginOptionsSchemasFaq_pageMainDescription: SitePluginPluginOptionsSchemasFaq_PageMainDescription;
  SitePluginPluginOptionsSchemasFaq_pageMainDescriptionConfig: SitePluginPluginOptionsSchemasFaq_PageMainDescriptionConfig;
  SitePluginPluginOptionsSchemasFaq_pageMainTitle_group_1: SitePluginPluginOptionsSchemasFaq_PageMainTitle_Group_1;
  SitePluginPluginOptionsSchemasFaq_pageMainTitle_group_1Config: SitePluginPluginOptionsSchemasFaq_PageMainTitle_Group_1Config;
  SitePluginPluginOptionsSchemasFaq_pageMainEntries: SitePluginPluginOptionsSchemasFaq_PageMainEntries;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfig: SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfig;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFields: SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFields;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsQuestion: SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsQuestion;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsQuestionConfig: SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsQuestionConfig;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsAnswer: SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsAnswer;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsAnswerConfig: SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsAnswerConfig;
  SitePluginPackageJson: SitePluginPackageJson;
  SitePluginPackageJsonDependencies: SitePluginPackageJsonDependencies;
  SitePluginPackageJsonDevDependencies: SitePluginPackageJsonDevDependencies;
  SitePluginPackageJsonPeerDependencies: SitePluginPackageJsonPeerDependencies;
  SitePageFilterInput: SitePageFilterInput;
  SitePageSortInput: SitePageSortInput;
  SitePageConnection: SitePageConnection;
  SitePageEdge: SitePageEdge;
  SitePageGroupConnection: SitePageGroupConnection;
  SiteSiteMetadataFilterInput: SiteSiteMetadataFilterInput;
  SiteSiteMetadataAuthorFilterInput: SiteSiteMetadataAuthorFilterInput;
  SiteSiteMetadataSocialFilterInput: SiteSiteMetadataSocialFilterInput;
  SiteSiteMetadataCopyrightFilterInput: SiteSiteMetadataCopyrightFilterInput;
  SiteSiteMetadataMainNavEntriesFilterListInput: SiteSiteMetadataMainNavEntriesFilterListInput;
  SiteSiteMetadataMainNavEntriesFilterInput: SiteSiteMetadataMainNavEntriesFilterInput;
  SiteSiteMetadataMainNavEntriesNamesFilterInput: SiteSiteMetadataMainNavEntriesNamesFilterInput;
  SiteSiteMetadataFooterNavEntriesFilterListInput: SiteSiteMetadataFooterNavEntriesFilterListInput;
  SiteSiteMetadataFooterNavEntriesFilterInput: SiteSiteMetadataFooterNavEntriesFilterInput;
  SiteSiteMetadataFooterNavEntriesTitlesFilterInput: SiteSiteMetadataFooterNavEntriesTitlesFilterInput;
  SiteSiteMetadataFooterNavEntriesLinksFilterListInput: SiteSiteMetadataFooterNavEntriesLinksFilterListInput;
  SiteSiteMetadataFooterNavEntriesLinksFilterInput: SiteSiteMetadataFooterNavEntriesLinksFilterInput;
  SiteSiteMetadataFooterNavEntriesLinksNamesFilterInput: SiteSiteMetadataFooterNavEntriesLinksNamesFilterInput;
  SiteSiteMetadataGithubLinkFilterInput: SiteSiteMetadataGithubLinkFilterInput;
  SiteSiteMetadataGithubLinkNamesFilterInput: SiteSiteMetadataGithubLinkNamesFilterInput;
  Site: Site;
  SiteSiteMetadata: SiteSiteMetadata;
  SiteSiteMetadataAuthor: SiteSiteMetadataAuthor;
  SiteSiteMetadataSocial: SiteSiteMetadataSocial;
  SiteSiteMetadataCopyright: SiteSiteMetadataCopyright;
  SiteSiteMetadataMainNavEntries: SiteSiteMetadataMainNavEntries;
  SiteSiteMetadataMainNavEntriesNames: SiteSiteMetadataMainNavEntriesNames;
  SiteSiteMetadataFooterNavEntries: SiteSiteMetadataFooterNavEntries;
  SiteSiteMetadataFooterNavEntriesTitles: SiteSiteMetadataFooterNavEntriesTitles;
  SiteSiteMetadataFooterNavEntriesLinks: SiteSiteMetadataFooterNavEntriesLinks;
  SiteSiteMetadataFooterNavEntriesLinksNames: SiteSiteMetadataFooterNavEntriesLinksNames;
  SiteSiteMetadataGithubLink: SiteSiteMetadataGithubLink;
  SiteSiteMetadataGithubLinkNames: SiteSiteMetadataGithubLinkNames;
  SiteFilterInput: SiteFilterInput;
  SiteSortInput: SiteSortInput;
  SiteConnection: SiteConnection;
  SiteEdge: SiteEdge;
  SiteGroupConnection: SiteGroupConnection;
  MarkdownRemarkSortInput: MarkdownRemarkSortInput;
  MarkdownRemarkConnection: MarkdownRemarkConnection;
  MarkdownRemarkEdge: MarkdownRemarkEdge;
  MarkdownRemarkGroupConnection: MarkdownRemarkGroupConnection;
  ImageSharpSortInput: ImageSharpSortInput;
  ImageSharpConnection: ImageSharpConnection;
  ImageSharpEdge: ImageSharpEdge;
  ImageSharpGroupConnection: ImageSharpGroupConnection;
  PrismicIndexPageDataTypeFilterInput: PrismicIndexPageDataTypeFilterInput;
  PrismicStructuredTextTypeFilterInput: PrismicStructuredTextTypeFilterInput;
  PrismicLinkTypeFilterListInput: PrismicLinkTypeFilterListInput;
  PrismicLinkTypeFilterInput: PrismicLinkTypeFilterInput;
  PrismicLinkTypesQueryOperatorInput: PrismicLinkTypesQueryOperatorInput;
  IDQueryOperatorInput: IdQueryOperatorInput;
  PrismicIndexPage: PrismicIndexPage;
  PrismicDocument:
    | ResolversParentTypes['PrismicIndexPage']
    | ResolversParentTypes['PrismicTest']
    | ResolversParentTypes['PrismicFaqPage'];
  PrismicLinkType: Omit<PrismicLinkType, 'document'> & {
    document?: Maybe<ResolversParentTypes['PrismicAllDocumentTypes']>;
  };
  PrismicAllDocumentTypes:
    | ResolversParentTypes['PrismicIndexPage']
    | ResolversParentTypes['PrismicTest']
    | ResolversParentTypes['PrismicFaqPage'];
  PrismicTest: PrismicTest;
  PrismicTestDataType: PrismicTestDataType;
  PrismicStructuredTextType: PrismicStructuredTextType;
  PrismicImageType: PrismicImageType;
  PrismicImageInterface:
    | ResolversParentTypes['PrismicImageType']
    | ResolversParentTypes['PrismicImageThumbnailType'];
  PrismicImageDimensionsType: PrismicImageDimensionsType;
  PrismicImageFixedType: PrismicImageFixedType;
  PrismicImageFluidType: PrismicImageFluidType;
  ImgixUrlParamsInput: ImgixUrlParamsInput;
  PrismicImageThumbnailsType: Scalars['PrismicImageThumbnailsType'];
  PrismicFaqPage: PrismicFaqPage;
  PrismicFaqPageDataType: PrismicFaqPageDataType;
  PrismicFaqPageEntriesGroupType: PrismicFaqPageEntriesGroupType;
  PrismicIndexPageDataType: PrismicIndexPageDataType;
  PrismicIndexPageFilterInput: PrismicIndexPageFilterInput;
  PrismicIndexPageSortInput: PrismicIndexPageSortInput;
  PrismicIndexPageConnection: PrismicIndexPageConnection;
  PrismicIndexPageEdge: PrismicIndexPageEdge;
  PrismicIndexPageGroupConnection: PrismicIndexPageGroupConnection;
  PrismicTestDataTypeFilterInput: PrismicTestDataTypeFilterInput;
  PrismicImageTypeFilterInput: PrismicImageTypeFilterInput;
  PrismicImageDimensionsTypeFilterInput: PrismicImageDimensionsTypeFilterInput;
  PrismicImageFixedTypeFilterInput: PrismicImageFixedTypeFilterInput;
  PrismicImageFluidTypeFilterInput: PrismicImageFluidTypeFilterInput;
  PrismicImageThumbnailsTypeQueryOperatorInput: PrismicImageThumbnailsTypeQueryOperatorInput;
  PrismicTestFilterInput: PrismicTestFilterInput;
  PrismicTestSortInput: PrismicTestSortInput;
  PrismicTestConnection: PrismicTestConnection;
  PrismicTestEdge: PrismicTestEdge;
  PrismicTestGroupConnection: PrismicTestGroupConnection;
  PrismicFaqPageDataTypeFilterInput: PrismicFaqPageDataTypeFilterInput;
  PrismicFaqPageEntriesGroupTypeFilterListInput: PrismicFaqPageEntriesGroupTypeFilterListInput;
  PrismicFaqPageEntriesGroupTypeFilterInput: PrismicFaqPageEntriesGroupTypeFilterInput;
  PrismicFaqPageFilterInput: PrismicFaqPageFilterInput;
  PrismicFaqPageSortInput: PrismicFaqPageSortInput;
  PrismicFaqPageConnection: PrismicFaqPageConnection;
  PrismicFaqPageEdge: PrismicFaqPageEdge;
  PrismicFaqPageGroupConnection: PrismicFaqPageGroupConnection;
  PrismicFaqEntryDataFilterInput: PrismicFaqEntryDataFilterInput;
  PrismicFaqEntryDataTitleFilterListInput: PrismicFaqEntryDataTitleFilterListInput;
  PrismicFaqEntryDataTitleFilterInput: PrismicFaqEntryDataTitleFilterInput;
  PrismicFaqEntryDataQuestionFilterListInput: PrismicFaqEntryDataQuestionFilterListInput;
  PrismicFaqEntryDataQuestionFilterInput: PrismicFaqEntryDataQuestionFilterInput;
  PrismicFaqEntryDataAnswerFilterListInput: PrismicFaqEntryDataAnswerFilterListInput;
  PrismicFaqEntryDataAnswerFilterInput: PrismicFaqEntryDataAnswerFilterInput;
  PrismicFaqEntryDataRawFilterInput: PrismicFaqEntryDataRawFilterInput;
  PrismicFaqEntryDataRawTitleFilterListInput: PrismicFaqEntryDataRawTitleFilterListInput;
  PrismicFaqEntryDataRawTitleFilterInput: PrismicFaqEntryDataRawTitleFilterInput;
  PrismicFaqEntryDataRawQuestionFilterListInput: PrismicFaqEntryDataRawQuestionFilterListInput;
  PrismicFaqEntryDataRawQuestionFilterInput: PrismicFaqEntryDataRawQuestionFilterInput;
  PrismicFaqEntryDataRawAnswerFilterListInput: PrismicFaqEntryDataRawAnswerFilterListInput;
  PrismicFaqEntryDataRawAnswerFilterInput: PrismicFaqEntryDataRawAnswerFilterInput;
  PrismicFaqEntry: PrismicFaqEntry;
  PrismicFaqEntryData: PrismicFaqEntryData;
  PrismicFaqEntryDataTitle: PrismicFaqEntryDataTitle;
  PrismicFaqEntryDataQuestion: PrismicFaqEntryDataQuestion;
  PrismicFaqEntryDataAnswer: PrismicFaqEntryDataAnswer;
  PrismicFaqEntryDataRaw: PrismicFaqEntryDataRaw;
  PrismicFaqEntryDataRawTitle: PrismicFaqEntryDataRawTitle;
  PrismicFaqEntryDataRawQuestion: PrismicFaqEntryDataRawQuestion;
  PrismicFaqEntryDataRawAnswer: PrismicFaqEntryDataRawAnswer;
  PrismicFaqEntryFilterInput: PrismicFaqEntryFilterInput;
  PrismicFaqEntrySortInput: PrismicFaqEntrySortInput;
  PrismicFaqEntryConnection: PrismicFaqEntryConnection;
  PrismicFaqEntryEdge: PrismicFaqEntryEdge;
  PrismicFaqEntryGroupConnection: PrismicFaqEntryGroupConnection;
  FaqJsonSortInput: FaqJsonSortInput;
  FaqJsonConnection: FaqJsonConnection;
  FaqJsonEdge: FaqJsonEdge;
  FaqJsonGroupConnection: FaqJsonGroupConnection;
  SiteBuildMetadata: SiteBuildMetadata;
  SiteBuildMetadataFilterInput: SiteBuildMetadataFilterInput;
  SiteBuildMetadataSortInput: SiteBuildMetadataSortInput;
  SiteBuildMetadataConnection: SiteBuildMetadataConnection;
  SiteBuildMetadataEdge: SiteBuildMetadataEdge;
  SiteBuildMetadataGroupConnection: SiteBuildMetadataGroupConnection;
  SitePluginSortInput: SitePluginSortInput;
  SitePluginConnection: SitePluginConnection;
  SitePluginEdge: SitePluginEdge;
  SitePluginGroupConnection: SitePluginGroupConnection;
  PrismicImageThumbnailType: PrismicImageThumbnailType;
  PrismicGeoPointType: PrismicGeoPointType;
  PrismicEmbedType: PrismicEmbedType;
  PrismicSliceType: never;
};

export type DefaultDirectiveArgs = { value: Scalars['JSON'] };

export type DefaultDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = DefaultDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type DateformatDirectiveArgs = {
  formatString?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
};

export type DateformatDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = DateformatDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {
  by?: Scalars['String'];
  from?: Maybe<Scalars['String']>;
  on?: Maybe<Scalars['String']>;
};

export type LinkDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = LinkDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type FileByRelativePathDirectiveArgs = { from?: Maybe<Scalars['String']> };

export type FileByRelativePathDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = FileByRelativePathDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ProxyDirectiveArgs = { from: Scalars['String']; fromNode?: Scalars['Boolean'] };

export type ProxyDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = ProxyDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type InferDirectiveArgs = { noDefaultResolvers?: Maybe<Scalars['Boolean']> };

export type InferDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = InferDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type DontInferDirectiveArgs = { noDefaultResolvers?: Maybe<Scalars['Boolean']> };

export type DontInferDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = DontInferDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MimeTypesDirectiveArgs = { types?: Array<Scalars['String']> };

export type MimeTypesDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = MimeTypesDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ChildOfDirectiveArgs = {
  mimeTypes?: Array<Scalars['String']>;
  types?: Array<Scalars['String']>;
  many?: Scalars['Boolean'];
};

export type ChildOfDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = ChildOfDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type NodeInterfaceDirectiveArgs = {};

export type NodeInterfaceDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = NodeInterfaceDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  file?: Resolver<
    Maybe<ResolversTypes['File']>,
    ParentType,
    ContextType,
    RequireFields<QueryFileArgs, never>
  >;
  allFile?: Resolver<
    ResolversTypes['FileConnection'],
    ParentType,
    ContextType,
    RequireFields<QueryAllFileArgs, never>
  >;
  directory?: Resolver<
    Maybe<ResolversTypes['Directory']>,
    ParentType,
    ContextType,
    RequireFields<QueryDirectoryArgs, never>
  >;
  allDirectory?: Resolver<
    ResolversTypes['DirectoryConnection'],
    ParentType,
    ContextType,
    RequireFields<QueryAllDirectoryArgs, never>
  >;
  sitePage?: Resolver<
    Maybe<ResolversTypes['SitePage']>,
    ParentType,
    ContextType,
    RequireFields<QuerySitePageArgs, never>
  >;
  allSitePage?: Resolver<
    ResolversTypes['SitePageConnection'],
    ParentType,
    ContextType,
    RequireFields<QueryAllSitePageArgs, never>
  >;
  site?: Resolver<
    Maybe<ResolversTypes['Site']>,
    ParentType,
    ContextType,
    RequireFields<QuerySiteArgs, never>
  >;
  allSite?: Resolver<
    ResolversTypes['SiteConnection'],
    ParentType,
    ContextType,
    RequireFields<QueryAllSiteArgs, never>
  >;
  markdownRemark?: Resolver<
    Maybe<ResolversTypes['MarkdownRemark']>,
    ParentType,
    ContextType,
    RequireFields<QueryMarkdownRemarkArgs, never>
  >;
  allMarkdownRemark?: Resolver<
    ResolversTypes['MarkdownRemarkConnection'],
    ParentType,
    ContextType,
    RequireFields<QueryAllMarkdownRemarkArgs, never>
  >;
  imageSharp?: Resolver<
    Maybe<ResolversTypes['ImageSharp']>,
    ParentType,
    ContextType,
    RequireFields<QueryImageSharpArgs, never>
  >;
  allImageSharp?: Resolver<
    ResolversTypes['ImageSharpConnection'],
    ParentType,
    ContextType,
    RequireFields<QueryAllImageSharpArgs, never>
  >;
  prismicIndexPage?: Resolver<
    Maybe<ResolversTypes['PrismicIndexPage']>,
    ParentType,
    ContextType,
    RequireFields<QueryPrismicIndexPageArgs, never>
  >;
  allPrismicIndexPage?: Resolver<
    ResolversTypes['PrismicIndexPageConnection'],
    ParentType,
    ContextType,
    RequireFields<QueryAllPrismicIndexPageArgs, never>
  >;
  prismicTest?: Resolver<
    Maybe<ResolversTypes['PrismicTest']>,
    ParentType,
    ContextType,
    RequireFields<QueryPrismicTestArgs, never>
  >;
  allPrismicTest?: Resolver<
    ResolversTypes['PrismicTestConnection'],
    ParentType,
    ContextType,
    RequireFields<QueryAllPrismicTestArgs, never>
  >;
  prismicFaqPage?: Resolver<
    Maybe<ResolversTypes['PrismicFaqPage']>,
    ParentType,
    ContextType,
    RequireFields<QueryPrismicFaqPageArgs, never>
  >;
  allPrismicFaqPage?: Resolver<
    ResolversTypes['PrismicFaqPageConnection'],
    ParentType,
    ContextType,
    RequireFields<QueryAllPrismicFaqPageArgs, never>
  >;
  prismicFaqEntry?: Resolver<
    Maybe<ResolversTypes['PrismicFaqEntry']>,
    ParentType,
    ContextType,
    RequireFields<QueryPrismicFaqEntryArgs, never>
  >;
  allPrismicFaqEntry?: Resolver<
    ResolversTypes['PrismicFaqEntryConnection'],
    ParentType,
    ContextType,
    RequireFields<QueryAllPrismicFaqEntryArgs, never>
  >;
  faqJson?: Resolver<
    Maybe<ResolversTypes['FaqJson']>,
    ParentType,
    ContextType,
    RequireFields<QueryFaqJsonArgs, never>
  >;
  allFaqJson?: Resolver<
    ResolversTypes['FaqJsonConnection'],
    ParentType,
    ContextType,
    RequireFields<QueryAllFaqJsonArgs, never>
  >;
  siteBuildMetadata?: Resolver<
    Maybe<ResolversTypes['SiteBuildMetadata']>,
    ParentType,
    ContextType,
    RequireFields<QuerySiteBuildMetadataArgs, never>
  >;
  allSiteBuildMetadata?: Resolver<
    ResolversTypes['SiteBuildMetadataConnection'],
    ParentType,
    ContextType,
    RequireFields<QueryAllSiteBuildMetadataArgs, never>
  >;
  sitePlugin?: Resolver<
    Maybe<ResolversTypes['SitePlugin']>,
    ParentType,
    ContextType,
    RequireFields<QuerySitePluginArgs, never>
  >;
  allSitePlugin?: Resolver<
    ResolversTypes['SitePluginConnection'],
    ParentType,
    ContextType,
    RequireFields<QueryAllSitePluginArgs, never>
  >;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type FileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']
> = {
  sourceInstanceName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  absolutePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relativePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extension?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  prettySize?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  modifiedTime?: Resolver<
    ResolversTypes['Date'],
    ParentType,
    ContextType,
    RequireFields<FileModifiedTimeArgs, never>
  >;
  accessTime?: Resolver<
    ResolversTypes['Date'],
    ParentType,
    ContextType,
    RequireFields<FileAccessTimeArgs, never>
  >;
  changeTime?: Resolver<
    ResolversTypes['Date'],
    ParentType,
    ContextType,
    RequireFields<FileChangeTimeArgs, never>
  >;
  birthTime?: Resolver<
    ResolversTypes['Date'],
    ParentType,
    ContextType,
    RequireFields<FileBirthTimeArgs, never>
  >;
  root?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dir?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  base?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ext?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relativeDirectory?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dev?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nlink?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rdev?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ino?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  atimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  mtimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  ctimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  atime?: Resolver<
    ResolversTypes['Date'],
    ParentType,
    ContextType,
    RequireFields<FileAtimeArgs, never>
  >;
  mtime?: Resolver<
    ResolversTypes['Date'],
    ParentType,
    ContextType,
    RequireFields<FileMtimeArgs, never>
  >;
  ctime?: Resolver<
    ResolversTypes['Date'],
    ParentType,
    ContextType,
    RequireFields<FileCtimeArgs, never>
  >;
  birthtime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  birthtimeMs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  blksize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  blocks?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  publicURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  childImageSharp?: Resolver<Maybe<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  childMarkdownRemark?: Resolver<Maybe<ResolversTypes['MarkdownRemark']>, ParentType, ContextType>;
  childFaqJson?: Resolver<Maybe<ResolversTypes['FaqJson']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NodeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']
> = {
  __resolveType: TypeResolveFn<
    | 'File'
    | 'ImageSharp'
    | 'MarkdownRemark'
    | 'FaqJson'
    | 'Directory'
    | 'SitePage'
    | 'SitePlugin'
    | 'Site'
    | 'PrismicIndexPage'
    | 'PrismicTest'
    | 'PrismicFaqPage'
    | 'PrismicFaqEntry'
    | 'SiteBuildMetadata',
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
};

export type InternalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Internal'] = ResolversParentTypes['Internal']
> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentDigest?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fieldOwners?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  ignoreType?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mediaType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ImageSharp'] = ResolversParentTypes['ImageSharp']
> = {
  fixed?: Resolver<
    Maybe<ResolversTypes['ImageSharpFixed']>,
    ParentType,
    ContextType,
    RequireFields<
      ImageSharpFixedArgs,
      | 'jpegProgressive'
      | 'pngCompressionSpeed'
      | 'grayscale'
      | 'toFormat'
      | 'toFormatBase64'
      | 'cropFocus'
      | 'fit'
      | 'background'
      | 'rotate'
      | 'trim'
    >
  >;
  resolutions?: Resolver<
    Maybe<ResolversTypes['ImageSharpResolutions']>,
    ParentType,
    ContextType,
    RequireFields<
      ImageSharpResolutionsArgs,
      | 'jpegProgressive'
      | 'pngCompressionSpeed'
      | 'grayscale'
      | 'toFormat'
      | 'toFormatBase64'
      | 'cropFocus'
      | 'fit'
      | 'background'
      | 'rotate'
      | 'trim'
    >
  >;
  fluid?: Resolver<
    Maybe<ResolversTypes['ImageSharpFluid']>,
    ParentType,
    ContextType,
    RequireFields<
      ImageSharpFluidArgs,
      | 'grayscale'
      | 'jpegProgressive'
      | 'pngCompressionSpeed'
      | 'toFormat'
      | 'toFormatBase64'
      | 'cropFocus'
      | 'fit'
      | 'background'
      | 'rotate'
      | 'trim'
      | 'sizes'
      | 'srcSetBreakpoints'
    >
  >;
  sizes?: Resolver<
    Maybe<ResolversTypes['ImageSharpSizes']>,
    ParentType,
    ContextType,
    RequireFields<
      ImageSharpSizesArgs,
      | 'grayscale'
      | 'jpegProgressive'
      | 'pngCompressionSpeed'
      | 'toFormat'
      | 'toFormatBase64'
      | 'cropFocus'
      | 'fit'
      | 'background'
      | 'rotate'
      | 'trim'
      | 'sizes'
      | 'srcSetBreakpoints'
    >
  >;
  original?: Resolver<Maybe<ResolversTypes['ImageSharpOriginal']>, ParentType, ContextType>;
  resize?: Resolver<
    Maybe<ResolversTypes['ImageSharpResize']>,
    ParentType,
    ContextType,
    RequireFields<
      ImageSharpResizeArgs,
      | 'jpegProgressive'
      | 'pngCompressionLevel'
      | 'pngCompressionSpeed'
      | 'grayscale'
      | 'base64'
      | 'toFormat'
      | 'cropFocus'
      | 'fit'
      | 'background'
      | 'rotate'
      | 'trim'
    >
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpFixedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ImageSharpFixed'] = ResolversParentTypes['ImageSharpFixed']
> = {
  base64?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tracedSVG?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  aspectRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  src?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcSet?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  srcSetWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpResolutionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ImageSharpResolutions'] = ResolversParentTypes['ImageSharpResolutions']
> = {
  base64?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tracedSVG?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  aspectRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  src?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcSet?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  srcSetWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpFluidResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ImageSharpFluid'] = ResolversParentTypes['ImageSharpFluid']
> = {
  base64?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tracedSVG?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  aspectRatio?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  src?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcSet?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  srcSetWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sizes?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originalImg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  presentationWidth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  presentationHeight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpSizesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ImageSharpSizes'] = ResolversParentTypes['ImageSharpSizes']
> = {
  base64?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tracedSVG?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  aspectRatio?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  src?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcSet?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  srcSetWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sizes?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originalImg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  presentationWidth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  presentationHeight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpOriginalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ImageSharpOriginal'] = ResolversParentTypes['ImageSharpOriginal']
> = {
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpResizeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ImageSharpResize'] = ResolversParentTypes['ImageSharpResize']
> = {
  src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tracedSVG?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  aspectRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  originalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarkdownRemarkResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MarkdownRemark'] = ResolversParentTypes['MarkdownRemark']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  frontmatter?: Resolver<
    Maybe<ResolversTypes['MarkdownRemarkFrontmatter']>,
    ParentType,
    ContextType
  >;
  excerpt?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<MarkdownRemarkExcerptArgs, 'pruneLength' | 'truncate' | 'format'>
  >;
  rawMarkdownBody?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileAbsolutePath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fields?: Resolver<Maybe<ResolversTypes['MarkdownRemarkFields']>, ParentType, ContextType>;
  html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  htmlAst?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  excerptAst?: Resolver<
    Maybe<ResolversTypes['JSON']>,
    ParentType,
    ContextType,
    RequireFields<MarkdownRemarkExcerptAstArgs, 'pruneLength' | 'truncate'>
  >;
  headings?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['MarkdownHeading']>>>,
    ParentType,
    ContextType,
    RequireFields<MarkdownRemarkHeadingsArgs, never>
  >;
  timeToRead?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tableOfContents?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<MarkdownRemarkTableOfContentsArgs, 'absolute' | 'pathToSlugField'>
  >;
  wordCount?: Resolver<Maybe<ResolversTypes['MarkdownWordCount']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarkdownRemarkFrontmatterResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MarkdownRemarkFrontmatter'] = ResolversParentTypes['MarkdownRemarkFrontmatter']
> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<
    Maybe<ResolversTypes['Date']>,
    ParentType,
    ContextType,
    RequireFields<MarkdownRemarkFrontmatterDateArgs, never>
  >;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarkdownRemarkFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MarkdownRemarkFields'] = ResolversParentTypes['MarkdownRemarkFields']
> = {
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarkdownHeadingResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MarkdownHeading'] = ResolversParentTypes['MarkdownHeading']
> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  depth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarkdownWordCountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MarkdownWordCount'] = ResolversParentTypes['MarkdownWordCount']
> = {
  paragraphs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sentences?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  words?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FaqJsonResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FaqJson'] = ResolversParentTypes['FaqJson']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  section_main?: Resolver<Maybe<ResolversTypes['FaqJsonSection_main']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FaqJsonSection_MainResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FaqJsonSection_main'] = ResolversParentTypes['FaqJsonSection_main']
> = {
  headline?: Resolver<
    Maybe<ResolversTypes['FaqJsonSection_mainHeadline']>,
    ParentType,
    ContextType
  >;
  texts?: Resolver<Maybe<ResolversTypes['FaqJsonSection_mainTexts']>, ParentType, ContextType>;
  sections?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['FaqJsonSection_mainSections']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FaqJsonSection_MainHeadlineResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FaqJsonSection_mainHeadline'] = ResolversParentTypes['FaqJsonSection_mainHeadline']
> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FaqJsonSection_MainTextsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FaqJsonSection_mainTexts'] = ResolversParentTypes['FaqJsonSection_mainTexts']
> = {
  permalink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  search?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  questions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  to_top?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FaqJsonSection_MainSectionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FaqJsonSection_mainSections'] = ResolversParentTypes['FaqJsonSection_mainSections']
> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accordion?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['FaqJsonSection_mainSectionsAccordion']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FaqJsonSection_MainSectionsAccordionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FaqJsonSection_mainSectionsAccordion'] = ResolversParentTypes['FaqJsonSection_mainSectionsAccordion']
> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  anchor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  textblock?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FileConnection'] = ResolversParentTypes['FileConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['FileEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<FileConnectionDistinctArgs, 'field'>
  >;
  group?: Resolver<
    Array<ResolversTypes['FileGroupConnection']>,
    ParentType,
    ContextType,
    RequireFields<FileConnectionGroupArgs, 'field'>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FileEdge'] = ResolversParentTypes['FileEdge']
> = {
  next?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['File'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']
> = {
  currentPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  itemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileGroupConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FileGroupConnection'] = ResolversParentTypes['FileGroupConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['FileEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DirectoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Directory'] = ResolversParentTypes['Directory']
> = {
  sourceInstanceName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  absolutePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relativePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extension?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  prettySize?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  modifiedTime?: Resolver<
    ResolversTypes['Date'],
    ParentType,
    ContextType,
    RequireFields<DirectoryModifiedTimeArgs, never>
  >;
  accessTime?: Resolver<
    ResolversTypes['Date'],
    ParentType,
    ContextType,
    RequireFields<DirectoryAccessTimeArgs, never>
  >;
  changeTime?: Resolver<
    ResolversTypes['Date'],
    ParentType,
    ContextType,
    RequireFields<DirectoryChangeTimeArgs, never>
  >;
  birthTime?: Resolver<
    ResolversTypes['Date'],
    ParentType,
    ContextType,
    RequireFields<DirectoryBirthTimeArgs, never>
  >;
  root?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dir?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  base?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ext?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relativeDirectory?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dev?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nlink?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rdev?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ino?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  atimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  mtimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  ctimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  atime?: Resolver<
    ResolversTypes['Date'],
    ParentType,
    ContextType,
    RequireFields<DirectoryAtimeArgs, never>
  >;
  mtime?: Resolver<
    ResolversTypes['Date'],
    ParentType,
    ContextType,
    RequireFields<DirectoryMtimeArgs, never>
  >;
  ctime?: Resolver<
    ResolversTypes['Date'],
    ParentType,
    ContextType,
    RequireFields<DirectoryCtimeArgs, never>
  >;
  birthtime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  birthtimeMs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  blksize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  blocks?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DirectoryConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DirectoryConnection'] = ResolversParentTypes['DirectoryConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['DirectoryEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Directory']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<DirectoryConnectionDistinctArgs, 'field'>
  >;
  group?: Resolver<
    Array<ResolversTypes['DirectoryGroupConnection']>,
    ParentType,
    ContextType,
    RequireFields<DirectoryConnectionGroupArgs, 'field'>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DirectoryEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DirectoryEdge'] = ResolversParentTypes['DirectoryEdge']
> = {
  next?: Resolver<Maybe<ResolversTypes['Directory']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Directory'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['Directory']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DirectoryGroupConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DirectoryGroupConnection'] = ResolversParentTypes['DirectoryGroupConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['DirectoryEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Directory']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePage'] = ResolversParentTypes['SitePage']
> = {
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  component?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  internalComponentName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  componentChunkName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  matchPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  isCreatedByStatefulCreatePages?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  context?: Resolver<Maybe<ResolversTypes['SitePageContext']>, ParentType, ContextType>;
  pluginCreator?: Resolver<Maybe<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  pluginCreatorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  componentPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageContextResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePageContext'] = ResolversParentTypes['SitePageContext']
> = {
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['SitePageContextPrevious']>, ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['SitePageContextNext']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageContextPreviousResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePageContextPrevious'] = ResolversParentTypes['SitePageContextPrevious']
> = {
  fields?: Resolver<
    Maybe<ResolversTypes['SitePageContextPreviousFields']>,
    ParentType,
    ContextType
  >;
  frontmatter?: Resolver<
    Maybe<ResolversTypes['SitePageContextPreviousFrontmatter']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageContextPreviousFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePageContextPreviousFields'] = ResolversParentTypes['SitePageContextPreviousFields']
> = {
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageContextPreviousFrontmatterResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePageContextPreviousFrontmatter'] = ResolversParentTypes['SitePageContextPreviousFrontmatter']
> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageContextNextResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePageContextNext'] = ResolversParentTypes['SitePageContextNext']
> = {
  fields?: Resolver<Maybe<ResolversTypes['SitePageContextNextFields']>, ParentType, ContextType>;
  frontmatter?: Resolver<
    Maybe<ResolversTypes['SitePageContextNextFrontmatter']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageContextNextFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePageContextNextFields'] = ResolversParentTypes['SitePageContextNextFields']
> = {
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageContextNextFrontmatterResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePageContextNextFrontmatter'] = ResolversParentTypes['SitePageContextNextFrontmatter']
> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePlugin'] = ResolversParentTypes['SitePlugin']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  resolve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pluginOptions?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptions']>,
    ParentType,
    ContextType
  >;
  nodeAPIs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  browserAPIs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  ssrAPIs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  pluginFilepath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  packageJson?: Resolver<Maybe<ResolversTypes['SitePluginPackageJson']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptions'] = ResolversParentTypes['SitePluginPluginOptions']
> = {
  plugins?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['SitePluginPluginOptionsPlugins']>>>,
    ParentType,
    ContextType
  >;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxWidth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pathPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wrapperStyle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  backgroundColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkImagesToOriginal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  showCaptions?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  markdownCaptions?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  withWebp?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  tracedSVG?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  loading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  disableBgImageOnAlpha?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  disableBgImage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ignoreFileExtensions?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >;
  short_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  background_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  theme_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cache_busting_mode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  include_favicon?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  legacy?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  theme_color_in_head?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  cacheDigest?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayName?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  repositoryName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accessToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  schemas?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemas']>,
    ParentType,
    ContextType
  >;
  pathCheck?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsPluginsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsPlugins'] = ResolversParentTypes['SitePluginPluginOptionsPlugins']
> = {
  resolve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pluginOptions?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsPluginsPluginOptions']>,
    ParentType,
    ContextType
  >;
  browserAPIs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  pluginFilepath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsPluginsPluginOptions'] = ResolversParentTypes['SitePluginPluginOptionsPluginsPluginOptions']
> = {
  maxWidth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pathPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wrapperStyle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  backgroundColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkImagesToOriginal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  showCaptions?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  markdownCaptions?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  withWebp?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  tracedSVG?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  loading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  disableBgImageOnAlpha?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  disableBgImage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ignoreFileExtensions?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemas'] = ResolversParentTypes['SitePluginPluginOptionsSchemas']
> = {
  index_page?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasIndex_page']>,
    ParentType,
    ContextType
  >;
  test?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasTest']>,
    ParentType,
    ContextType
  >;
  faq_page?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasFaq_page']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasIndex_PageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasIndex_page'] = ResolversParentTypes['SitePluginPluginOptionsSchemasIndex_page']
> = {
  Main?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasIndex_pageMain']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasIndex_PageMainResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasIndex_pageMain'] = ResolversParentTypes['SitePluginPluginOptionsSchemasIndex_pageMain']
> = {
  uid?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasIndex_pageMainUid']>,
    ParentType,
    ContextType
  >;
  title?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasIndex_pageMainTitle']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasIndex_pageMainDescription']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasIndex_PageMainUidResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasIndex_pageMainUid'] = ResolversParentTypes['SitePluginPluginOptionsSchemasIndex_pageMainUid']
> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  config?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasIndex_pageMainUidConfig']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasIndex_PageMainUidConfigResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasIndex_pageMainUidConfig'] = ResolversParentTypes['SitePluginPluginOptionsSchemasIndex_pageMainUidConfig']
> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasIndex_PageMainTitleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasIndex_pageMainTitle'] = ResolversParentTypes['SitePluginPluginOptionsSchemasIndex_pageMainTitle']
> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  config?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasIndex_pageMainTitleConfig']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasIndex_PageMainTitleConfigResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasIndex_pageMainTitleConfig'] = ResolversParentTypes['SitePluginPluginOptionsSchemasIndex_pageMainTitleConfig']
> = {
  single?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasIndex_PageMainDescriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasIndex_pageMainDescription'] = ResolversParentTypes['SitePluginPluginOptionsSchemasIndex_pageMainDescription']
> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  config?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasIndex_pageMainDescriptionConfig']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasIndex_PageMainDescriptionConfigResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasIndex_pageMainDescriptionConfig'] = ResolversParentTypes['SitePluginPluginOptionsSchemasIndex_pageMainDescriptionConfig']
> = {
  multi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasTestResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasTest'] = ResolversParentTypes['SitePluginPluginOptionsSchemasTest']
> = {
  Main?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasTestMain']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasTestMainResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasTestMain'] = ResolversParentTypes['SitePluginPluginOptionsSchemasTestMain']
> = {
  title?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasTestMainTitle']>,
    ParentType,
    ContextType
  >;
  text?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasTestMainText']>,
    ParentType,
    ContextType
  >;
  image?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasTestMainImage']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasTestMainTitleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasTestMainTitle'] = ResolversParentTypes['SitePluginPluginOptionsSchemasTestMainTitle']
> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  config?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasTestMainTitleConfig']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasTestMainTitleConfigResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasTestMainTitleConfig'] = ResolversParentTypes['SitePluginPluginOptionsSchemasTestMainTitleConfig']
> = {
  single?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasTestMainTextResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasTestMainText'] = ResolversParentTypes['SitePluginPluginOptionsSchemasTestMainText']
> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  config?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasTestMainTextConfig']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasTestMainTextConfigResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasTestMainTextConfig'] = ResolversParentTypes['SitePluginPluginOptionsSchemasTestMainTextConfig']
> = {
  multi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasTestMainImageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasTestMainImage'] = ResolversParentTypes['SitePluginPluginOptionsSchemasTestMainImage']
> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  config?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasTestMainImageConfig']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasTestMainImageConfigResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasTestMainImageConfig'] = ResolversParentTypes['SitePluginPluginOptionsSchemasTestMainImageConfig']
> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasFaq_PageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_page'] = ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_page']
> = {
  Main?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasFaq_pageMain']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMain'] = ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMain']
> = {
  title?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasFaq_pageMainTitle']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasFaq_pageMainDescription']>,
    ParentType,
    ContextType
  >;
  title_group_1?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasFaq_pageMainTitle_group_1']>,
    ParentType,
    ContextType
  >;
  entries?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasFaq_pageMainEntries']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainTitleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainTitle'] = ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainTitle']
> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  config?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasFaq_pageMainTitleConfig']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainTitleConfigResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainTitleConfig'] = ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainTitleConfig']
> = {
  single?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainDescriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainDescription'] = ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainDescription']
> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  config?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasFaq_pageMainDescriptionConfig']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainDescriptionConfigResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainDescriptionConfig'] = ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainDescriptionConfig']
> = {
  multi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainTitle_Group_1Resolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainTitle_group_1'] = ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainTitle_group_1']
> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  config?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasFaq_pageMainTitle_group_1Config']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainTitle_Group_1ConfigResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainTitle_group_1Config'] = ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainTitle_group_1Config']
> = {
  single?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainEntriesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainEntries'] = ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainEntries']
> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  config?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfig']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfig'] = ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfig']
> = {
  fields?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFields']>,
    ParentType,
    ContextType
  >;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFields'] = ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFields']
> = {
  question?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsQuestion']>,
    ParentType,
    ContextType
  >;
  answer?: Resolver<
    Maybe<ResolversTypes['SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsAnswer']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsQuestionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsQuestion'] = ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsQuestion']
> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  config?: Resolver<
    Maybe<
      ResolversTypes['SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsQuestionConfig']
    >,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsQuestionConfigResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsQuestionConfig'] = ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsQuestionConfig']
> = {
  multi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsAnswerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsAnswer'] = ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsAnswer']
> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  config?: Resolver<
    Maybe<
      ResolversTypes['SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsAnswerConfig']
    >,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsAnswerConfigResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsAnswerConfig'] = ResolversParentTypes['SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsAnswerConfig']
> = {
  multi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPackageJsonResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPackageJson'] = ResolversParentTypes['SitePluginPackageJson']
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  main?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  license?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dependencies?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['SitePluginPackageJsonDependencies']>>>,
    ParentType,
    ContextType
  >;
  devDependencies?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['SitePluginPackageJsonDevDependencies']>>>,
    ParentType,
    ContextType
  >;
  peerDependencies?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['SitePluginPackageJsonPeerDependencies']>>>,
    ParentType,
    ContextType
  >;
  keywords?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPackageJsonDependenciesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPackageJsonDependencies'] = ResolversParentTypes['SitePluginPackageJsonDependencies']
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPackageJsonDevDependenciesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPackageJsonDevDependencies'] = ResolversParentTypes['SitePluginPackageJsonDevDependencies']
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPackageJsonPeerDependenciesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginPackageJsonPeerDependencies'] = ResolversParentTypes['SitePluginPackageJsonPeerDependencies']
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePageConnection'] = ResolversParentTypes['SitePageConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SitePageEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SitePage']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<SitePageConnectionDistinctArgs, 'field'>
  >;
  group?: Resolver<
    Array<ResolversTypes['SitePageGroupConnection']>,
    ParentType,
    ContextType,
    RequireFields<SitePageConnectionGroupArgs, 'field'>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePageEdge'] = ResolversParentTypes['SitePageEdge']
> = {
  next?: Resolver<Maybe<ResolversTypes['SitePage']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SitePage'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['SitePage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageGroupConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePageGroupConnection'] = ResolversParentTypes['SitePageGroupConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SitePageEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SitePage']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Site'] = ResolversParentTypes['Site']
> = {
  buildTime?: Resolver<
    Maybe<ResolversTypes['Date']>,
    ParentType,
    ContextType,
    RequireFields<SiteBuildTimeArgs, never>
  >;
  siteMetadata?: Resolver<Maybe<ResolversTypes['SiteSiteMetadata']>, ParentType, ContextType>;
  port?: Resolver<
    Maybe<ResolversTypes['Date']>,
    ParentType,
    ContextType,
    RequireFields<SitePortArgs, never>
  >;
  host?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  polyfill?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  pathPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteSiteMetadataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SiteSiteMetadata'] = ResolversParentTypes['SiteSiteMetadata']
> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['SiteSiteMetadataAuthor']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  social?: Resolver<Maybe<ResolversTypes['SiteSiteMetadataSocial']>, ParentType, ContextType>;
  copyright?: Resolver<Maybe<ResolversTypes['SiteSiteMetadataCopyright']>, ParentType, ContextType>;
  mainNavEntries?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['SiteSiteMetadataMainNavEntries']>>>,
    ParentType,
    ContextType
  >;
  footerNavEntries?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['SiteSiteMetadataFooterNavEntries']>>>,
    ParentType,
    ContextType
  >;
  githubLink?: Resolver<
    Maybe<ResolversTypes['SiteSiteMetadataGithubLink']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteSiteMetadataAuthorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SiteSiteMetadataAuthor'] = ResolversParentTypes['SiteSiteMetadataAuthor']
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteSiteMetadataSocialResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SiteSiteMetadataSocial'] = ResolversParentTypes['SiteSiteMetadataSocial']
> = {
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteSiteMetadataCopyrightResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SiteSiteMetadataCopyright'] = ResolversParentTypes['SiteSiteMetadataCopyright']
> = {
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteSiteMetadataMainNavEntriesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SiteSiteMetadataMainNavEntries'] = ResolversParentTypes['SiteSiteMetadataMainNavEntries']
> = {
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  names?: Resolver<
    Maybe<ResolversTypes['SiteSiteMetadataMainNavEntriesNames']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteSiteMetadataMainNavEntriesNamesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SiteSiteMetadataMainNavEntriesNames'] = ResolversParentTypes['SiteSiteMetadataMainNavEntriesNames']
> = {
  en?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  de?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteSiteMetadataFooterNavEntriesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SiteSiteMetadataFooterNavEntries'] = ResolversParentTypes['SiteSiteMetadataFooterNavEntries']
> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  titles?: Resolver<
    Maybe<ResolversTypes['SiteSiteMetadataFooterNavEntriesTitles']>,
    ParentType,
    ContextType
  >;
  links?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['SiteSiteMetadataFooterNavEntriesLinks']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteSiteMetadataFooterNavEntriesTitlesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SiteSiteMetadataFooterNavEntriesTitles'] = ResolversParentTypes['SiteSiteMetadataFooterNavEntriesTitles']
> = {
  en?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  de?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteSiteMetadataFooterNavEntriesLinksResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SiteSiteMetadataFooterNavEntriesLinks'] = ResolversParentTypes['SiteSiteMetadataFooterNavEntriesLinks']
> = {
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  names?: Resolver<
    Maybe<ResolversTypes['SiteSiteMetadataFooterNavEntriesLinksNames']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteSiteMetadataFooterNavEntriesLinksNamesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SiteSiteMetadataFooterNavEntriesLinksNames'] = ResolversParentTypes['SiteSiteMetadataFooterNavEntriesLinksNames']
> = {
  en?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  de?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteSiteMetadataGithubLinkResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SiteSiteMetadataGithubLink'] = ResolversParentTypes['SiteSiteMetadataGithubLink']
> = {
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  names?: Resolver<
    Maybe<ResolversTypes['SiteSiteMetadataGithubLinkNames']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteSiteMetadataGithubLinkNamesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SiteSiteMetadataGithubLinkNames'] = ResolversParentTypes['SiteSiteMetadataGithubLinkNames']
> = {
  en?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  de?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SiteConnection'] = ResolversParentTypes['SiteConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SiteEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Site']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<SiteConnectionDistinctArgs, 'field'>
  >;
  group?: Resolver<
    Array<ResolversTypes['SiteGroupConnection']>,
    ParentType,
    ContextType,
    RequireFields<SiteConnectionGroupArgs, 'field'>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SiteEdge'] = ResolversParentTypes['SiteEdge']
> = {
  next?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Site'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteGroupConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SiteGroupConnection'] = ResolversParentTypes['SiteGroupConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SiteEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Site']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarkdownRemarkConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MarkdownRemarkConnection'] = ResolversParentTypes['MarkdownRemarkConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['MarkdownRemarkEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['MarkdownRemark']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<MarkdownRemarkConnectionDistinctArgs, 'field'>
  >;
  group?: Resolver<
    Array<ResolversTypes['MarkdownRemarkGroupConnection']>,
    ParentType,
    ContextType,
    RequireFields<MarkdownRemarkConnectionGroupArgs, 'field'>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarkdownRemarkEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MarkdownRemarkEdge'] = ResolversParentTypes['MarkdownRemarkEdge']
> = {
  next?: Resolver<Maybe<ResolversTypes['MarkdownRemark']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MarkdownRemark'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['MarkdownRemark']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarkdownRemarkGroupConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MarkdownRemarkGroupConnection'] = ResolversParentTypes['MarkdownRemarkGroupConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['MarkdownRemarkEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['MarkdownRemark']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ImageSharpConnection'] = ResolversParentTypes['ImageSharpConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ImageSharpEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<ImageSharpConnectionDistinctArgs, 'field'>
  >;
  group?: Resolver<
    Array<ResolversTypes['ImageSharpGroupConnection']>,
    ParentType,
    ContextType,
    RequireFields<ImageSharpConnectionGroupArgs, 'field'>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ImageSharpEdge'] = ResolversParentTypes['ImageSharpEdge']
> = {
  next?: Resolver<Maybe<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ImageSharp'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpGroupConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ImageSharpGroupConnection'] = ResolversParentTypes['ImageSharpGroupConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ImageSharpEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicIndexPageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicIndexPage'] = ResolversParentTypes['PrismicIndexPage']
> = {
  data?: Resolver<Maybe<ResolversTypes['PrismicIndexPageDataType']>, ParentType, ContextType>;
  dataRaw?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  dataString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  first_publication_date?: Resolver<
    ResolversTypes['Date'],
    ParentType,
    ContextType,
    RequireFields<PrismicIndexPageFirst_Publication_DateArgs, never>
  >;
  href?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lang?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  last_publication_date?: Resolver<
    ResolversTypes['Date'],
    ParentType,
    ContextType,
    RequireFields<PrismicIndexPageLast_Publication_DateArgs, never>
  >;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  alternate_languages?: Resolver<Array<ResolversTypes['PrismicLinkType']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prismicId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _previewable?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  uid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicDocumentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicDocument'] = ResolversParentTypes['PrismicDocument']
> = {
  __resolveType: TypeResolveFn<
    'PrismicIndexPage' | 'PrismicTest' | 'PrismicFaqPage',
    ParentType,
    ContextType
  >;
  dataRaw?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  dataString?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  first_publication_date?: Resolver<
    Maybe<ResolversTypes['Date']>,
    ParentType,
    ContextType,
    RequireFields<PrismicDocumentFirst_Publication_DateArgs, never>
  >;
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lang?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  last_publication_date?: Resolver<
    Maybe<ResolversTypes['Date']>,
    ParentType,
    ContextType,
    RequireFields<PrismicDocumentLast_Publication_DateArgs, never>
  >;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  alternate_languages?: Resolver<Array<ResolversTypes['PrismicLinkType']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prismicId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _previewable?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type PrismicLinkTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicLinkType'] = ResolversParentTypes['PrismicLinkType']
> = {
  link_type?: Resolver<ResolversTypes['PrismicLinkTypes'], ParentType, ContextType>;
  isBroken?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  lang?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  document?: Resolver<Maybe<ResolversTypes['PrismicAllDocumentTypes']>, ParentType, ContextType>;
  raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicAllDocumentTypesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicAllDocumentTypes'] = ResolversParentTypes['PrismicAllDocumentTypes']
> = {
  __resolveType: TypeResolveFn<
    'PrismicIndexPage' | 'PrismicTest' | 'PrismicFaqPage',
    ParentType,
    ContextType
  >;
};

export type PrismicTestResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicTest'] = ResolversParentTypes['PrismicTest']
> = {
  data?: Resolver<Maybe<ResolversTypes['PrismicTestDataType']>, ParentType, ContextType>;
  dataRaw?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  dataString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  first_publication_date?: Resolver<
    ResolversTypes['Date'],
    ParentType,
    ContextType,
    RequireFields<PrismicTestFirst_Publication_DateArgs, never>
  >;
  href?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lang?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  last_publication_date?: Resolver<
    ResolversTypes['Date'],
    ParentType,
    ContextType,
    RequireFields<PrismicTestLast_Publication_DateArgs, never>
  >;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  alternate_languages?: Resolver<Array<ResolversTypes['PrismicLinkType']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prismicId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _previewable?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicTestDataTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicTestDataType'] = ResolversParentTypes['PrismicTestDataType']
> = {
  title?: Resolver<Maybe<ResolversTypes['PrismicStructuredTextType']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['PrismicStructuredTextType']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['PrismicImageType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicStructuredTextTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicStructuredTextType'] = ResolversParentTypes['PrismicStructuredTextType']
> = {
  html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicImageTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicImageType'] = ResolversParentTypes['PrismicImageType']
> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  copyright?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dimensions?: Resolver<
    Maybe<ResolversTypes['PrismicImageDimensionsType']>,
    ParentType,
    ContextType
  >;
  url?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<PrismicImageTypeUrlArgs, 'imgixParams'>
  >;
  fixed?: Resolver<
    Maybe<ResolversTypes['PrismicImageFixedType']>,
    ParentType,
    ContextType,
    RequireFields<PrismicImageTypeFixedArgs, 'width' | 'imgixParams' | 'placeholderImgixParams'>
  >;
  fluid?: Resolver<
    Maybe<ResolversTypes['PrismicImageFluidType']>,
    ParentType,
    ContextType,
    RequireFields<PrismicImageTypeFluidArgs, 'maxWidth' | 'imgixParams' | 'placeholderImgixParams'>
  >;
  localFile?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  thumbnails?: Resolver<
    Maybe<ResolversTypes['PrismicImageThumbnailsType']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicImageInterfaceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicImageInterface'] = ResolversParentTypes['PrismicImageInterface']
> = {
  __resolveType: TypeResolveFn<
    'PrismicImageType' | 'PrismicImageThumbnailType',
    ParentType,
    ContextType
  >;
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  copyright?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dimensions?: Resolver<
    Maybe<ResolversTypes['PrismicImageDimensionsType']>,
    ParentType,
    ContextType
  >;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  localFile?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  fixed?: Resolver<Maybe<ResolversTypes['PrismicImageFixedType']>, ParentType, ContextType>;
  fluid?: Resolver<Maybe<ResolversTypes['PrismicImageFluidType']>, ParentType, ContextType>;
};

export type PrismicImageDimensionsTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicImageDimensionsType'] = ResolversParentTypes['PrismicImageDimensionsType']
> = {
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicImageFixedTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicImageFixedType'] = ResolversParentTypes['PrismicImageFixedType']
> = {
  base64?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  src?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcSet?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcWebp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcSetWebp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sizes?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicImageFluidTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicImageFluidType'] = ResolversParentTypes['PrismicImageFluidType']
> = {
  base64?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  src?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcSet?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcWebp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcSetWebp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sizes?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  aspectRatio?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface PrismicImageThumbnailsTypeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['PrismicImageThumbnailsType'], any> {
  name: 'PrismicImageThumbnailsType';
}

export type PrismicFaqPageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicFaqPage'] = ResolversParentTypes['PrismicFaqPage']
> = {
  data?: Resolver<Maybe<ResolversTypes['PrismicFaqPageDataType']>, ParentType, ContextType>;
  dataRaw?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  dataString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  first_publication_date?: Resolver<
    ResolversTypes['Date'],
    ParentType,
    ContextType,
    RequireFields<PrismicFaqPageFirst_Publication_DateArgs, never>
  >;
  href?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lang?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  last_publication_date?: Resolver<
    ResolversTypes['Date'],
    ParentType,
    ContextType,
    RequireFields<PrismicFaqPageLast_Publication_DateArgs, never>
  >;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  alternate_languages?: Resolver<Array<ResolversTypes['PrismicLinkType']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prismicId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _previewable?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicFaqPageDataTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicFaqPageDataType'] = ResolversParentTypes['PrismicFaqPageDataType']
> = {
  title?: Resolver<Maybe<ResolversTypes['PrismicStructuredTextType']>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes['PrismicStructuredTextType']>,
    ParentType,
    ContextType
  >;
  title_group_1?: Resolver<
    Maybe<ResolversTypes['PrismicStructuredTextType']>,
    ParentType,
    ContextType
  >;
  entries?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['PrismicFaqPageEntriesGroupType']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicFaqPageEntriesGroupTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicFaqPageEntriesGroupType'] = ResolversParentTypes['PrismicFaqPageEntriesGroupType']
> = {
  question?: Resolver<Maybe<ResolversTypes['PrismicStructuredTextType']>, ParentType, ContextType>;
  answer?: Resolver<Maybe<ResolversTypes['PrismicStructuredTextType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicIndexPageDataTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicIndexPageDataType'] = ResolversParentTypes['PrismicIndexPageDataType']
> = {
  title?: Resolver<Maybe<ResolversTypes['PrismicStructuredTextType']>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes['PrismicStructuredTextType']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicIndexPageConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicIndexPageConnection'] = ResolversParentTypes['PrismicIndexPageConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PrismicIndexPageEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['PrismicIndexPage']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<PrismicIndexPageConnectionDistinctArgs, 'field'>
  >;
  group?: Resolver<
    Array<ResolversTypes['PrismicIndexPageGroupConnection']>,
    ParentType,
    ContextType,
    RequireFields<PrismicIndexPageConnectionGroupArgs, 'field'>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicIndexPageEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicIndexPageEdge'] = ResolversParentTypes['PrismicIndexPageEdge']
> = {
  next?: Resolver<Maybe<ResolversTypes['PrismicIndexPage']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['PrismicIndexPage'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['PrismicIndexPage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicIndexPageGroupConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicIndexPageGroupConnection'] = ResolversParentTypes['PrismicIndexPageGroupConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PrismicIndexPageEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['PrismicIndexPage']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicTestConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicTestConnection'] = ResolversParentTypes['PrismicTestConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PrismicTestEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['PrismicTest']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<PrismicTestConnectionDistinctArgs, 'field'>
  >;
  group?: Resolver<
    Array<ResolversTypes['PrismicTestGroupConnection']>,
    ParentType,
    ContextType,
    RequireFields<PrismicTestConnectionGroupArgs, 'field'>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicTestEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicTestEdge'] = ResolversParentTypes['PrismicTestEdge']
> = {
  next?: Resolver<Maybe<ResolversTypes['PrismicTest']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['PrismicTest'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['PrismicTest']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicTestGroupConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicTestGroupConnection'] = ResolversParentTypes['PrismicTestGroupConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PrismicTestEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['PrismicTest']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicFaqPageConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicFaqPageConnection'] = ResolversParentTypes['PrismicFaqPageConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PrismicFaqPageEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['PrismicFaqPage']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<PrismicFaqPageConnectionDistinctArgs, 'field'>
  >;
  group?: Resolver<
    Array<ResolversTypes['PrismicFaqPageGroupConnection']>,
    ParentType,
    ContextType,
    RequireFields<PrismicFaqPageConnectionGroupArgs, 'field'>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicFaqPageEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicFaqPageEdge'] = ResolversParentTypes['PrismicFaqPageEdge']
> = {
  next?: Resolver<Maybe<ResolversTypes['PrismicFaqPage']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['PrismicFaqPage'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['PrismicFaqPage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicFaqPageGroupConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicFaqPageGroupConnection'] = ResolversParentTypes['PrismicFaqPageGroupConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PrismicFaqPageEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['PrismicFaqPage']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicFaqEntryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicFaqEntry'] = ResolversParentTypes['PrismicFaqEntry']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  first_publication_date?: Resolver<
    Maybe<ResolversTypes['Date']>,
    ParentType,
    ContextType,
    RequireFields<PrismicFaqEntryFirst_Publication_DateArgs, never>
  >;
  last_publication_date?: Resolver<
    Maybe<ResolversTypes['Date']>,
    ParentType,
    ContextType,
    RequireFields<PrismicFaqEntryLast_Publication_DateArgs, never>
  >;
  slugs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  lang?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['PrismicFaqEntryData']>, ParentType, ContextType>;
  prismicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dataString?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dataRaw?: Resolver<Maybe<ResolversTypes['PrismicFaqEntryDataRaw']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _previewable?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicFaqEntryDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicFaqEntryData'] = ResolversParentTypes['PrismicFaqEntryData']
> = {
  title?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['PrismicFaqEntryDataTitle']>>>,
    ParentType,
    ContextType
  >;
  question?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['PrismicFaqEntryDataQuestion']>>>,
    ParentType,
    ContextType
  >;
  answer?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['PrismicFaqEntryDataAnswer']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicFaqEntryDataTitleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicFaqEntryDataTitle'] = ResolversParentTypes['PrismicFaqEntryDataTitle']
> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicFaqEntryDataQuestionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicFaqEntryDataQuestion'] = ResolversParentTypes['PrismicFaqEntryDataQuestion']
> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicFaqEntryDataAnswerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicFaqEntryDataAnswer'] = ResolversParentTypes['PrismicFaqEntryDataAnswer']
> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicFaqEntryDataRawResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicFaqEntryDataRaw'] = ResolversParentTypes['PrismicFaqEntryDataRaw']
> = {
  title?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['PrismicFaqEntryDataRawTitle']>>>,
    ParentType,
    ContextType
  >;
  question?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['PrismicFaqEntryDataRawQuestion']>>>,
    ParentType,
    ContextType
  >;
  answer?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['PrismicFaqEntryDataRawAnswer']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicFaqEntryDataRawTitleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicFaqEntryDataRawTitle'] = ResolversParentTypes['PrismicFaqEntryDataRawTitle']
> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicFaqEntryDataRawQuestionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicFaqEntryDataRawQuestion'] = ResolversParentTypes['PrismicFaqEntryDataRawQuestion']
> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicFaqEntryDataRawAnswerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicFaqEntryDataRawAnswer'] = ResolversParentTypes['PrismicFaqEntryDataRawAnswer']
> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicFaqEntryConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicFaqEntryConnection'] = ResolversParentTypes['PrismicFaqEntryConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PrismicFaqEntryEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['PrismicFaqEntry']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<PrismicFaqEntryConnectionDistinctArgs, 'field'>
  >;
  group?: Resolver<
    Array<ResolversTypes['PrismicFaqEntryGroupConnection']>,
    ParentType,
    ContextType,
    RequireFields<PrismicFaqEntryConnectionGroupArgs, 'field'>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicFaqEntryEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicFaqEntryEdge'] = ResolversParentTypes['PrismicFaqEntryEdge']
> = {
  next?: Resolver<Maybe<ResolversTypes['PrismicFaqEntry']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['PrismicFaqEntry'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['PrismicFaqEntry']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicFaqEntryGroupConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicFaqEntryGroupConnection'] = ResolversParentTypes['PrismicFaqEntryGroupConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PrismicFaqEntryEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['PrismicFaqEntry']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FaqJsonConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FaqJsonConnection'] = ResolversParentTypes['FaqJsonConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['FaqJsonEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['FaqJson']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<FaqJsonConnectionDistinctArgs, 'field'>
  >;
  group?: Resolver<
    Array<ResolversTypes['FaqJsonGroupConnection']>,
    ParentType,
    ContextType,
    RequireFields<FaqJsonConnectionGroupArgs, 'field'>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FaqJsonEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FaqJsonEdge'] = ResolversParentTypes['FaqJsonEdge']
> = {
  next?: Resolver<Maybe<ResolversTypes['FaqJson']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['FaqJson'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['FaqJson']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FaqJsonGroupConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FaqJsonGroupConnection'] = ResolversParentTypes['FaqJsonGroupConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['FaqJsonEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['FaqJson']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteBuildMetadataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SiteBuildMetadata'] = ResolversParentTypes['SiteBuildMetadata']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  buildTime?: Resolver<
    Maybe<ResolversTypes['Date']>,
    ParentType,
    ContextType,
    RequireFields<SiteBuildMetadataBuildTimeArgs, never>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteBuildMetadataConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SiteBuildMetadataConnection'] = ResolversParentTypes['SiteBuildMetadataConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SiteBuildMetadataEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SiteBuildMetadata']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<SiteBuildMetadataConnectionDistinctArgs, 'field'>
  >;
  group?: Resolver<
    Array<ResolversTypes['SiteBuildMetadataGroupConnection']>,
    ParentType,
    ContextType,
    RequireFields<SiteBuildMetadataConnectionGroupArgs, 'field'>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteBuildMetadataEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SiteBuildMetadataEdge'] = ResolversParentTypes['SiteBuildMetadataEdge']
> = {
  next?: Resolver<Maybe<ResolversTypes['SiteBuildMetadata']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SiteBuildMetadata'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['SiteBuildMetadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteBuildMetadataGroupConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SiteBuildMetadataGroupConnection'] = ResolversParentTypes['SiteBuildMetadataGroupConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SiteBuildMetadataEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SiteBuildMetadata']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginConnection'] = ResolversParentTypes['SitePluginConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SitePluginEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<SitePluginConnectionDistinctArgs, 'field'>
  >;
  group?: Resolver<
    Array<ResolversTypes['SitePluginGroupConnection']>,
    ParentType,
    ContextType,
    RequireFields<SitePluginConnectionGroupArgs, 'field'>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginEdge'] = ResolversParentTypes['SitePluginEdge']
> = {
  next?: Resolver<Maybe<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SitePlugin'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginGroupConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SitePluginGroupConnection'] = ResolversParentTypes['SitePluginGroupConnection']
> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SitePluginEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicImageThumbnailTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicImageThumbnailType'] = ResolversParentTypes['PrismicImageThumbnailType']
> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  copyright?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dimensions?: Resolver<
    Maybe<ResolversTypes['PrismicImageDimensionsType']>,
    ParentType,
    ContextType
  >;
  url?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<PrismicImageThumbnailTypeUrlArgs, 'imgixParams'>
  >;
  fixed?: Resolver<
    Maybe<ResolversTypes['PrismicImageFixedType']>,
    ParentType,
    ContextType,
    RequireFields<
      PrismicImageThumbnailTypeFixedArgs,
      'width' | 'imgixParams' | 'placeholderImgixParams'
    >
  >;
  fluid?: Resolver<
    Maybe<ResolversTypes['PrismicImageFluidType']>,
    ParentType,
    ContextType,
    RequireFields<
      PrismicImageThumbnailTypeFluidArgs,
      'maxWidth' | 'imgixParams' | 'placeholderImgixParams'
    >
  >;
  localFile?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicGeoPointTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicGeoPointType'] = ResolversParentTypes['PrismicGeoPointType']
> = {
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicEmbedTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicEmbedType'] = ResolversParentTypes['PrismicEmbedType']
> = {
  author_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  author_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cache_age?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  embed_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail_height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thumbnail_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail_width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  media_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismicSliceTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PrismicSliceType'] = ResolversParentTypes['PrismicSliceType']
> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  slice_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slice_label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Date?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  File?: FileResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  Internal?: InternalResolvers<ContextType>;
  ImageSharp?: ImageSharpResolvers<ContextType>;
  ImageSharpFixed?: ImageSharpFixedResolvers<ContextType>;
  ImageSharpResolutions?: ImageSharpResolutionsResolvers<ContextType>;
  ImageSharpFluid?: ImageSharpFluidResolvers<ContextType>;
  ImageSharpSizes?: ImageSharpSizesResolvers<ContextType>;
  ImageSharpOriginal?: ImageSharpOriginalResolvers<ContextType>;
  ImageSharpResize?: ImageSharpResizeResolvers<ContextType>;
  MarkdownRemark?: MarkdownRemarkResolvers<ContextType>;
  MarkdownRemarkFrontmatter?: MarkdownRemarkFrontmatterResolvers<ContextType>;
  MarkdownRemarkFields?: MarkdownRemarkFieldsResolvers<ContextType>;
  MarkdownHeading?: MarkdownHeadingResolvers<ContextType>;
  MarkdownWordCount?: MarkdownWordCountResolvers<ContextType>;
  FaqJson?: FaqJsonResolvers<ContextType>;
  FaqJsonSection_main?: FaqJsonSection_MainResolvers<ContextType>;
  FaqJsonSection_mainHeadline?: FaqJsonSection_MainHeadlineResolvers<ContextType>;
  FaqJsonSection_mainTexts?: FaqJsonSection_MainTextsResolvers<ContextType>;
  FaqJsonSection_mainSections?: FaqJsonSection_MainSectionsResolvers<ContextType>;
  FaqJsonSection_mainSectionsAccordion?: FaqJsonSection_MainSectionsAccordionResolvers<ContextType>;
  FileConnection?: FileConnectionResolvers<ContextType>;
  FileEdge?: FileEdgeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  FileGroupConnection?: FileGroupConnectionResolvers<ContextType>;
  Directory?: DirectoryResolvers<ContextType>;
  DirectoryConnection?: DirectoryConnectionResolvers<ContextType>;
  DirectoryEdge?: DirectoryEdgeResolvers<ContextType>;
  DirectoryGroupConnection?: DirectoryGroupConnectionResolvers<ContextType>;
  SitePage?: SitePageResolvers<ContextType>;
  SitePageContext?: SitePageContextResolvers<ContextType>;
  SitePageContextPrevious?: SitePageContextPreviousResolvers<ContextType>;
  SitePageContextPreviousFields?: SitePageContextPreviousFieldsResolvers<ContextType>;
  SitePageContextPreviousFrontmatter?: SitePageContextPreviousFrontmatterResolvers<ContextType>;
  SitePageContextNext?: SitePageContextNextResolvers<ContextType>;
  SitePageContextNextFields?: SitePageContextNextFieldsResolvers<ContextType>;
  SitePageContextNextFrontmatter?: SitePageContextNextFrontmatterResolvers<ContextType>;
  SitePlugin?: SitePluginResolvers<ContextType>;
  SitePluginPluginOptions?: SitePluginPluginOptionsResolvers<ContextType>;
  SitePluginPluginOptionsPlugins?: SitePluginPluginOptionsPluginsResolvers<ContextType>;
  SitePluginPluginOptionsPluginsPluginOptions?: SitePluginPluginOptionsPluginsPluginOptionsResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemas?: SitePluginPluginOptionsSchemasResolvers<ContextType>;
  SitePluginPluginOptionsSchemasIndex_page?: SitePluginPluginOptionsSchemasIndex_PageResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasIndex_pageMain?: SitePluginPluginOptionsSchemasIndex_PageMainResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasIndex_pageMainUid?: SitePluginPluginOptionsSchemasIndex_PageMainUidResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasIndex_pageMainUidConfig?: SitePluginPluginOptionsSchemasIndex_PageMainUidConfigResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasIndex_pageMainTitle?: SitePluginPluginOptionsSchemasIndex_PageMainTitleResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasIndex_pageMainTitleConfig?: SitePluginPluginOptionsSchemasIndex_PageMainTitleConfigResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasIndex_pageMainDescription?: SitePluginPluginOptionsSchemasIndex_PageMainDescriptionResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasIndex_pageMainDescriptionConfig?: SitePluginPluginOptionsSchemasIndex_PageMainDescriptionConfigResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasTest?: SitePluginPluginOptionsSchemasTestResolvers<ContextType>;
  SitePluginPluginOptionsSchemasTestMain?: SitePluginPluginOptionsSchemasTestMainResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasTestMainTitle?: SitePluginPluginOptionsSchemasTestMainTitleResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasTestMainTitleConfig?: SitePluginPluginOptionsSchemasTestMainTitleConfigResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasTestMainText?: SitePluginPluginOptionsSchemasTestMainTextResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasTestMainTextConfig?: SitePluginPluginOptionsSchemasTestMainTextConfigResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasTestMainImage?: SitePluginPluginOptionsSchemasTestMainImageResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasTestMainImageConfig?: SitePluginPluginOptionsSchemasTestMainImageConfigResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasFaq_page?: SitePluginPluginOptionsSchemasFaq_PageResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasFaq_pageMain?: SitePluginPluginOptionsSchemasFaq_PageMainResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainTitle?: SitePluginPluginOptionsSchemasFaq_PageMainTitleResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainTitleConfig?: SitePluginPluginOptionsSchemasFaq_PageMainTitleConfigResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainDescription?: SitePluginPluginOptionsSchemasFaq_PageMainDescriptionResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainDescriptionConfig?: SitePluginPluginOptionsSchemasFaq_PageMainDescriptionConfigResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainTitle_group_1?: SitePluginPluginOptionsSchemasFaq_PageMainTitle_Group_1Resolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainTitle_group_1Config?: SitePluginPluginOptionsSchemasFaq_PageMainTitle_Group_1ConfigResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainEntries?: SitePluginPluginOptionsSchemasFaq_PageMainEntriesResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfig?: SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFields?: SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsQuestion?: SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsQuestionResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsQuestionConfig?: SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsQuestionConfigResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsAnswer?: SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsAnswerResolvers<
    ContextType
  >;
  SitePluginPluginOptionsSchemasFaq_pageMainEntriesConfigFieldsAnswerConfig?: SitePluginPluginOptionsSchemasFaq_PageMainEntriesConfigFieldsAnswerConfigResolvers<
    ContextType
  >;
  SitePluginPackageJson?: SitePluginPackageJsonResolvers<ContextType>;
  SitePluginPackageJsonDependencies?: SitePluginPackageJsonDependenciesResolvers<ContextType>;
  SitePluginPackageJsonDevDependencies?: SitePluginPackageJsonDevDependenciesResolvers<ContextType>;
  SitePluginPackageJsonPeerDependencies?: SitePluginPackageJsonPeerDependenciesResolvers<
    ContextType
  >;
  SitePageConnection?: SitePageConnectionResolvers<ContextType>;
  SitePageEdge?: SitePageEdgeResolvers<ContextType>;
  SitePageGroupConnection?: SitePageGroupConnectionResolvers<ContextType>;
  Site?: SiteResolvers<ContextType>;
  SiteSiteMetadata?: SiteSiteMetadataResolvers<ContextType>;
  SiteSiteMetadataAuthor?: SiteSiteMetadataAuthorResolvers<ContextType>;
  SiteSiteMetadataSocial?: SiteSiteMetadataSocialResolvers<ContextType>;
  SiteSiteMetadataCopyright?: SiteSiteMetadataCopyrightResolvers<ContextType>;
  SiteSiteMetadataMainNavEntries?: SiteSiteMetadataMainNavEntriesResolvers<ContextType>;
  SiteSiteMetadataMainNavEntriesNames?: SiteSiteMetadataMainNavEntriesNamesResolvers<ContextType>;
  SiteSiteMetadataFooterNavEntries?: SiteSiteMetadataFooterNavEntriesResolvers<ContextType>;
  SiteSiteMetadataFooterNavEntriesTitles?: SiteSiteMetadataFooterNavEntriesTitlesResolvers<
    ContextType
  >;
  SiteSiteMetadataFooterNavEntriesLinks?: SiteSiteMetadataFooterNavEntriesLinksResolvers<
    ContextType
  >;
  SiteSiteMetadataFooterNavEntriesLinksNames?: SiteSiteMetadataFooterNavEntriesLinksNamesResolvers<
    ContextType
  >;
  SiteSiteMetadataGithubLink?: SiteSiteMetadataGithubLinkResolvers<ContextType>;
  SiteSiteMetadataGithubLinkNames?: SiteSiteMetadataGithubLinkNamesResolvers<ContextType>;
  SiteConnection?: SiteConnectionResolvers<ContextType>;
  SiteEdge?: SiteEdgeResolvers<ContextType>;
  SiteGroupConnection?: SiteGroupConnectionResolvers<ContextType>;
  MarkdownRemarkConnection?: MarkdownRemarkConnectionResolvers<ContextType>;
  MarkdownRemarkEdge?: MarkdownRemarkEdgeResolvers<ContextType>;
  MarkdownRemarkGroupConnection?: MarkdownRemarkGroupConnectionResolvers<ContextType>;
  ImageSharpConnection?: ImageSharpConnectionResolvers<ContextType>;
  ImageSharpEdge?: ImageSharpEdgeResolvers<ContextType>;
  ImageSharpGroupConnection?: ImageSharpGroupConnectionResolvers<ContextType>;
  PrismicIndexPage?: PrismicIndexPageResolvers<ContextType>;
  PrismicDocument?: PrismicDocumentResolvers<ContextType>;
  PrismicLinkType?: PrismicLinkTypeResolvers<ContextType>;
  PrismicAllDocumentTypes?: PrismicAllDocumentTypesResolvers<ContextType>;
  PrismicTest?: PrismicTestResolvers<ContextType>;
  PrismicTestDataType?: PrismicTestDataTypeResolvers<ContextType>;
  PrismicStructuredTextType?: PrismicStructuredTextTypeResolvers<ContextType>;
  PrismicImageType?: PrismicImageTypeResolvers<ContextType>;
  PrismicImageInterface?: PrismicImageInterfaceResolvers<ContextType>;
  PrismicImageDimensionsType?: PrismicImageDimensionsTypeResolvers<ContextType>;
  PrismicImageFixedType?: PrismicImageFixedTypeResolvers<ContextType>;
  PrismicImageFluidType?: PrismicImageFluidTypeResolvers<ContextType>;
  PrismicImageThumbnailsType?: GraphQLScalarType;
  PrismicFaqPage?: PrismicFaqPageResolvers<ContextType>;
  PrismicFaqPageDataType?: PrismicFaqPageDataTypeResolvers<ContextType>;
  PrismicFaqPageEntriesGroupType?: PrismicFaqPageEntriesGroupTypeResolvers<ContextType>;
  PrismicIndexPageDataType?: PrismicIndexPageDataTypeResolvers<ContextType>;
  PrismicIndexPageConnection?: PrismicIndexPageConnectionResolvers<ContextType>;
  PrismicIndexPageEdge?: PrismicIndexPageEdgeResolvers<ContextType>;
  PrismicIndexPageGroupConnection?: PrismicIndexPageGroupConnectionResolvers<ContextType>;
  PrismicTestConnection?: PrismicTestConnectionResolvers<ContextType>;
  PrismicTestEdge?: PrismicTestEdgeResolvers<ContextType>;
  PrismicTestGroupConnection?: PrismicTestGroupConnectionResolvers<ContextType>;
  PrismicFaqPageConnection?: PrismicFaqPageConnectionResolvers<ContextType>;
  PrismicFaqPageEdge?: PrismicFaqPageEdgeResolvers<ContextType>;
  PrismicFaqPageGroupConnection?: PrismicFaqPageGroupConnectionResolvers<ContextType>;
  PrismicFaqEntry?: PrismicFaqEntryResolvers<ContextType>;
  PrismicFaqEntryData?: PrismicFaqEntryDataResolvers<ContextType>;
  PrismicFaqEntryDataTitle?: PrismicFaqEntryDataTitleResolvers<ContextType>;
  PrismicFaqEntryDataQuestion?: PrismicFaqEntryDataQuestionResolvers<ContextType>;
  PrismicFaqEntryDataAnswer?: PrismicFaqEntryDataAnswerResolvers<ContextType>;
  PrismicFaqEntryDataRaw?: PrismicFaqEntryDataRawResolvers<ContextType>;
  PrismicFaqEntryDataRawTitle?: PrismicFaqEntryDataRawTitleResolvers<ContextType>;
  PrismicFaqEntryDataRawQuestion?: PrismicFaqEntryDataRawQuestionResolvers<ContextType>;
  PrismicFaqEntryDataRawAnswer?: PrismicFaqEntryDataRawAnswerResolvers<ContextType>;
  PrismicFaqEntryConnection?: PrismicFaqEntryConnectionResolvers<ContextType>;
  PrismicFaqEntryEdge?: PrismicFaqEntryEdgeResolvers<ContextType>;
  PrismicFaqEntryGroupConnection?: PrismicFaqEntryGroupConnectionResolvers<ContextType>;
  FaqJsonConnection?: FaqJsonConnectionResolvers<ContextType>;
  FaqJsonEdge?: FaqJsonEdgeResolvers<ContextType>;
  FaqJsonGroupConnection?: FaqJsonGroupConnectionResolvers<ContextType>;
  SiteBuildMetadata?: SiteBuildMetadataResolvers<ContextType>;
  SiteBuildMetadataConnection?: SiteBuildMetadataConnectionResolvers<ContextType>;
  SiteBuildMetadataEdge?: SiteBuildMetadataEdgeResolvers<ContextType>;
  SiteBuildMetadataGroupConnection?: SiteBuildMetadataGroupConnectionResolvers<ContextType>;
  SitePluginConnection?: SitePluginConnectionResolvers<ContextType>;
  SitePluginEdge?: SitePluginEdgeResolvers<ContextType>;
  SitePluginGroupConnection?: SitePluginGroupConnectionResolvers<ContextType>;
  PrismicImageThumbnailType?: PrismicImageThumbnailTypeResolvers<ContextType>;
  PrismicGeoPointType?: PrismicGeoPointTypeResolvers<ContextType>;
  PrismicEmbedType?: PrismicEmbedTypeResolvers<ContextType>;
  PrismicSliceType?: PrismicSliceTypeResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  default?: DefaultDirectiveResolver<any, any, ContextType>;
  dateformat?: DateformatDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  fileByRelativePath?: FileByRelativePathDirectiveResolver<any, any, ContextType>;
  proxy?: ProxyDirectiveResolver<any, any, ContextType>;
  infer?: InferDirectiveResolver<any, any, ContextType>;
  dontInfer?: DontInferDirectiveResolver<any, any, ContextType>;
  mimeTypes?: MimeTypesDirectiveResolver<any, any, ContextType>;
  childOf?: ChildOfDirectiveResolver<any, any, ContextType>;
  nodeInterface?: NodeInterfaceDirectiveResolver<any, any, ContextType>;
};

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;
