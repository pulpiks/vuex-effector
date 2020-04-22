import { User } from '../state/user'
import { TRequestState } from '../state/request'
import { TFiltersState } from '../state/filters'

export type S = {
  user: User;
  requests: TRequestState[];
  filters: TFiltersState;
}
