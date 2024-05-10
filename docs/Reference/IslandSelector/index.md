---
sidebar_position: 10
---


# IslandSelector

:::warning
IslandSelector は実験的なコンポーネント群です！予告なく機能変更や削除がされる可能性があります。
:::

## 概要

[SimpleDecal](/docs/Reference/SimpleDecal) や [AtlasTexture](/docs/Reference/AtlasTexture)で、アイランド単位で何かを行うための、アイランドの選択用コンポーネント。

## 選択コンポーネント

### BoxIslandSelector & SphereIslandSelector

それぞれボックスとスフィアの形状で、3D空間上の頂点を基にアイランドを選択します。

#### IsAll

通常 アイランドの持つ頂点が一つでも範囲に入っているときにアイランドが選択されますが、  
有効な時は、アイランドの持つ頂点すべてが範囲に入っている時にアイランドが選択されます。

### RayCastIslandSelector

レイキャストを行い、当たったポリゴンを持つアイランドを選択します。

#### Island Selector Range

レイの最大距離

### RendererIslandSelector

指定したレンダラーに属するアイランドを選択します。

#### Renderer List

ここに追加されたレンダラーがアイランド選択の対象となります。

### SubMeshIslandSelector

アイランドの属するサブメッシュインデックスを基にアイランドを選択します。

#### Select Sub Mesh Index

サブメッシュのインデックスを指定する項目で、0から始まります。

## 論理演算子

論理演算子系コンポーネントは、原則 子の GameObject を上から順に読み取り、演算を適用します。

### IslandSelectorAND

アイランドの選択で AND演算 を行います。

[RendererIslandSelector](#rendererislandselector) と [SubMeshIslandSelector](#submeshislandselector) で AND 演算を行い、特定のサブメッシュに属するアイランドを選択したりする。
のようなことを想定しています。

### IslandSelectorOR

アイランドの選択で OR演算 を行います。

アイランドの選択を束ねるような使用用途を想定しています。

### IslandSelectorNOT

アイランドの選択で NOT演算 を行います。

:::info
IslandSelectorNOT は、子のGameObject 1番目だけを読み取り、2番目以降は使用されません。
:::

特定の場所のアイランド以外すべての選択や、すべての選択を行うことを想定しています。

### IslandSelectorXOR

アイランドの選択で XOR演算 を行います。

何かに使えるかもしれません。
