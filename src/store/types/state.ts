import { User } from '../state/user'
import { TRequestState } from '../state/request'

export type S = {
  user: User;
  requests: TRequestState[];
}
