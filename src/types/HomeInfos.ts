export interface SocialMediaLink {
  slug?: string;
  url?: string;
  svg_icon_jsx?: string;
}

export interface ContentBlockConfig {
  provider?: string;
  url: string;
  qrcode_image_url: string;
  email?: string;
}

export interface ContentBlock {
  type: string;
  type_label: string;
  title: string;
  config: ContentBlockConfig;
}

export interface ShareLinks {
  facebook: string;
  twitter: string;
  whatsapp: string;
}

export interface ProfileInfos {
  name: string;
  bio: string;
  avatar_url: string;
  social_media_links: SocialMediaLink[];
  content_blocks: ContentBlock[];
  share_links: ShareLinks;
}
