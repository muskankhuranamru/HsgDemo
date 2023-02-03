module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AKIAJ4NDCUVOBECPLGBA'),
        secretAccessKey: env('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'),
        region: env('ap-south-1'),
        params: {
          Bucket: env('hsgbucket'),
        },
      },
      // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
      actionOptions: {
        upload: {
          ACL: null,
        },
        uploadStream: {
          ACL: null,
        },
      },
    },
  },
})
