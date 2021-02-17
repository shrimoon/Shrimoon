import { Gender } from 'src/types/gender';

export interface User {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  avatarUrl: string | null;
  bannerUrl: string | null;
  host: string | null;
  profileName: string | null;
  birthday: string | null;
  gender: Gender;
  isFederated: boolean;
}
