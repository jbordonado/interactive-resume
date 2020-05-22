export interface NavigationItem {
  name: string;
  route: string;
  image: ImageData;
  ariaLabel?: string;
}

export interface ImageData {
  type: 'icon' | 'img';
  value: string;
}
