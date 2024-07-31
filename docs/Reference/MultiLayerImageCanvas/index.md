---
sidebar_position: 8
---

# MultiLayerImageCanvas

:::warning
MultiLayerImageCanvas は実験的なコンポーネントです！予告なく機能変更や削除がされる可能性があります。
:::
:::info
内部的な仕組みも含め、すべて開発途中なため実験的なコンポーネントとして扱われます。
:::

## 概要

一般的な画像編集ソフトやお絵かきソフトのキャンバスを再現し、高度な色改変をUnity内で行う  
[SimpleDecal](/docs/Reference/SimpleDecal)のために作られた色合成技術を転用して作られたコンポーネント。

## レイヤーの定義

- MultiLayerImageCanvas の子のゲームオブジェクトで1階層目であること
  - 2階層目以降は、LayerFolder の子のゲームオブジェクトで1階層目であること
- レイヤーとして動作するコンポーネントが追加されていること

## 設定項目

### TextureSelector

このキャンバスの結果で置き換える対象選択。[詳細](../Common/TextureSelector.md)
