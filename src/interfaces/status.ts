import { Visibility } from 'src/types/visibility';
import { IUser } from './user';

export interface IStatus {
  id: string;
  createdAt: Date;
  text: string | null;
  contentWarning: string | null;
  visibility: Visibility;
  user: IUser;
  isFederated: boolean;
}
