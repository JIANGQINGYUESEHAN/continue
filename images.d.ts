/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.gif";
declare module "*.bmp";
declare module "*.tiff";
declare module "*.svg";
