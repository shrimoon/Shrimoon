export const visibilities = [
  // パブリック
  'public',
  // ホーム
  'unlisted',
  // フォロワー限定
  'followerOnly',
  // DM
  'direct',
  // ログインユーザー限定
  'loginOnly',
] as const;

export type Visibility = typeof visibilities[number];
