import { Visibility } from 'src/types/visibility';
import { User } from './user.interface';

export interface Status {
  id: string;
  createdAt: Date;
  text: string | null;
  contentWarning: string | null;
  visibility: Visibility;
  user: User;
  isFederated: boolean;
}
