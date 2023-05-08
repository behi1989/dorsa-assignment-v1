import {IResponse} from './response'

export type MetaProps = {
  name: string
  pageTitle: string
  pageDescription: string
  status: boolean
  paged: number
  max_num_pages: number
}

export interface IResponseProps extends MetaProps {
  data: IResponse[]
}
