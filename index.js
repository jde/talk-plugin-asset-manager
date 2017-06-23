// talk-plugin-asset-manager/index.js

const AssetModel = require('models/asset');

module.exports = {
  router(router) {
    router.post('/api/v1/asset-manager', (req, res) => {

      const asset = req.body;
      const update = {$setOnInsert: {url: asset.url}};

      AssetModel.findOneAndUpdate(asset, update, {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true
      })
      .then((asset) => res.json(asset));
    });
  }
}
