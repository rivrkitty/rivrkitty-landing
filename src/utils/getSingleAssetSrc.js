const singleAssetRequire = require.context(
  "../assets/token",
  false,
  /\.(svg|webp|png)$/
);
const singleAssets = Object.fromEntries(
  singleAssetRequire
    .keys()
    .map((path) => [path.substring(2, path.lastIndexOf(".")), path])
);
const singleAssetCache = {};

export const getSingleAssetSrc = (symbol) => {
  if (symbol in singleAssetCache) {
    return singleAssetCache[symbol];
  }

  if (symbol in singleAssets) {
    return (singleAssetCache[symbol] = singleAssetRequire(
      singleAssets[symbol]
    ));
  }

  console.error(`Image required for '${symbol}' token in 'assets/token/'`);
  return { default: "" };
};
