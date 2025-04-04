import type { Schema, Struct } from '@strapi/strapi';

export interface NavItemHero extends Struct.ComponentSchema {
  collectionName: 'components_nav_item_heroes';
  info: {
    displayName: 'hero';
    icon: 'cast';
  };
  attributes: {
    background: Schema.Attribute.Media<'files' | 'images'>;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    subHeading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageComponentHero extends Struct.ComponentSchema {
  collectionName: 'components_page_component_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    subHeading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'nav-item.hero': NavItemHero;
      'page-component.hero': PageComponentHero;
    }
  }
}
