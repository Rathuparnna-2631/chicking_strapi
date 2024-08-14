import type { Schema, Attribute } from '@strapi/strapi';

export interface MetadataProfileMetaData extends Schema.Component {
  collectionName: 'components_metadata_profile_meta_data';
  info: {
    displayName: 'profileMetaData';
  };
  attributes: {
    firstName: Attribute.String;
    lastName: Attribute.String;
    phoneNumber: Attribute.Integer;
    email: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'metadata.profile-meta-data': MetadataProfileMetaData;
    }
  }
}
