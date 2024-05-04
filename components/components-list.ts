import { FunctionComponent } from 'react'
import { BlokComponentModel } from '../models/blok-component.model'
import Blog from './blog/Blog'
import Feature from './feature/Feature'
import Grid from './grid/Grid'
import PageStory from './page/PageStory'
import Teaser from './teaser/Teaser'

interface ComponentsMapProps {
  [key: string]: FunctionComponent<BlokComponentModel<any>>
}
export const ComponentsMap: ComponentsMapProps = {
  page: PageStory,
  grid: Grid,
  feature: Feature,
  teaser: Teaser,
  blog: Blog,
} 

