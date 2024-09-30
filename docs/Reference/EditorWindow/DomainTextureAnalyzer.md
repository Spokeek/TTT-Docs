# DomainTextureAnalyzer

:::warning
DomainTextureAnalyzer は実験的な機能です！予告なく機能変更や削除がされる可能性があります。
:::

## 概要

[AtlasTexture](/docs/Reference/AtlasTexture) を使う為に、アバターの中で使用率の低いテクスチャーを探すための拡張ウィンドウです。

## 使い方

DomainRoot に アバタールートなどを割り当てることで、分析結果が表示されます。

## 構成情報

### テクスチャーのプレビュー表示

このプレビュー表示には　灰色の四角で使用されているUVのひと固まりがすべて描画されます。

### Texture usage

テクスチャーの使用率を荒く算出した値が表示されます。
以下の三つの色で表示され、それぞれこのような意味を持ちます。

- 白 [AtlasTexture](/docs/Reference/AtlasTexture) によってかえって無駄が増えることが多い、アトラス化するべきではない使用率
- 黄色 [AtlasTexture](/docs/Reference/AtlasTexture) によって無駄が削れるかが場合による微妙な使用率
- 赤 無駄が大きく [AtlasTexture](/docs/Reference/AtlasTexture) を使った時にほとんどの場合に効果がる使用率

### GroupMaterials

アトラス化を行うときに極力、同時にアトラス化をしたほうが良いマテリアルの表示です。
