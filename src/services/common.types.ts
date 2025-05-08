// Media (Video or Images)
export type MediaAttributes = {
  alternativeText?: string;
  url?: string;
  mime?: string;
  name?: string;
};

export type ButtonWithSlug = {
  id?: string;
  name?: string;
  slug?: string;
  show?: boolean;
};

export type LinkWithSlug = {
  id?: string;
  link?: string;
  slug?: string;
};

export type ImageWithDescription = {
  id?: string;
  image?: string;
  description?: [];
};

export type TitleWithDescription = {
  id?: string;
  title?: string;
  description?: [];
  image?: MediaAttributes;
};
