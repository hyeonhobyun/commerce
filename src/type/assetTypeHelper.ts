export type SpriteDirectories = 'viewChanger';
export type ViewChangerSpriteImages = 'ic_grid' | 'ic_list';

export interface AllOfSpriteImages {
  viewChanger: ViewChangerSpriteImages;
}

export type PickImageSet<T extends SpriteDirectories> = AllOfSpriteImages[T];
export type SVGNames = 'basket' | 'logo' | 'search';
