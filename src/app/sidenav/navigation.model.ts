export interface NavigationItem {
  name: string;
  route: string;
  image: ImageData;
}

export interface ImageData {
  type: 'icon' | 'img';
  value: string;
}
