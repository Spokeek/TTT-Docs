---
sidebar_position: 12
---

# TextureConfigurator

:::warning
TextureConfigurator は実験的なコンポーネントです！予告なく機能変更や削除がされる可能性があります。
:::

## 概要

テクスチャーの解像度やMipMapの制御などによる VRAM削減 を、非破壊的に行うために作られたコンポーネントです。

## 設定項目

### TargetTexture

設定対象の選択。[詳細](/docs/Reference/Common/TextureSelector)

### OverrideTextureSettings

テクスチャの解像度やMipMapを置き換えるかどうかの項目です。

### TextureSize

設定するテクスチャの解像度を指定する項目、二のべき乗の値のみ入力可能です。

### MipMap

MipMapを使用するか否かの設定です。

### DownScalingAlgorism

MipMapの生成やダウンスケーリングを行うときのアルゴリズムの指定。
現在選択肢は存在しません。

### OverrideCompression

テクスチャの圧縮設定を置き換えるかどうかの項目です。

### Compress

[こちら](/docs/Reference/AtlasTexture/TextureFineTuning#compress)を参照してください。
