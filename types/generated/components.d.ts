import type { Schema, Attribute } from '@strapi/strapi';

export interface MetadataProfileMetaData extends Schema.Component {
  collectionName: 'components_metadata_profile_meta_data';
  info: {
    displayName: 'profileMetaData';
    description: '';
  };
  attributes: {
    firstName: Attribute.String;
    lastName: Attribute.String;
    email: Attribute.Text;
    PhoneNumber: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'metadata.profile-meta-data': MetadataProfileMetaData;
    }
  }
}
