import { ButtonWithSlug, LinkWithSlug, MediaAttributes } from '../common.types';

export type HeaderDataType = {
  header?: HeaderPageType;
};

export type HeaderPageType = {
  companyName?: string;
  companyLogo?: MediaAttributes;
  demobtn?: ButtonWithSlug;
  headerlinks?: LinkWithSlug[];
};
