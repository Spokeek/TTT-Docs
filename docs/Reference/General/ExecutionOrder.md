---
sidebar_position: 2
---

# 実行順序

TexTransTool のコンポーネントはどの順番で実行されるかによって最終結果が変化することがあります。

特に[SimpleDecal](/docs/Reference/SimpleDecal)では実行順は特に大きな意味を持ちます。

## フェーズ

ほとんどのコンポーネントには 実行するフェーズが存在します。

TexTransPhase と表記されることもあり、下記五つによって構成されていて、上から順に実行されます。

### BeforeUVModification | UV変更前

UVに強い依存を持ち、UVの変更がなされた後だと動作できないコンポーネントが属するフェーズ

例

- [MultiLayerImageCanvas](/docs/Reference/MultiLayerImageCanvas)
- [TextureBlender](/docs/Reference/TextureBlender)

### UVModification | UV変更

UVを書き換えるようなコンポーネントが属すフェーズ

現在属するコンポーネントは存在しませんが今後追加される可能性があります。

### AfterUVModification | UV変更後

UVに依存がなく、UVが書き換えられたことによる影響を受けるコンポーネントが属するフェーズ

例

- [SimpleDecal](/docs/Reference/SimpleDecal)
- CylindricalDecal
- NailEditor

### UnDefined | 未定義

どのフェーズに属するべきかがケースバイケースであり、ユーザーが必要に応じて定義すべきなコンポーネントが属するフェーズ

例

- MaterialModifier
- MatAndTexAbsoluteSeparator
- MatAndTexRelativeSeparator

### Optimizing | 最適化

最適化を行う、早い段階で動く必要のないコンポーネントが属するフェーズ

例

- [AtlasTexture](/docs/Reference/AtlasTexture)

## フェーズ内での実行順

TexTransTool が アバターに対してビルドを行うとき、 上記の五つのフェーズを順番に実行します。

同じフェーズに属すコンポーネントがどのような順序で実行されるかは、以下の三つの要素から決定されます。

### [PhaseDefine](/docs/Reference/GroupComponent/PhaseDefine)

PhaseDefine で実行フェーズを指定されたコンポーネントは一番高い優先度で実行されます。

PhaseDefine の範囲では、それらコンポーネントが持つフェーズの定義を無視した上で、範囲内のコンポーネントをすべて、ビルドごとに一貫性のある順序で実行します。

### [TexTransGroup](/docs/Reference/GroupComponent/TexTransGroup)

TexTransGroup の範囲のコンポーネントの中で、現在実行するフェーズと同じフェーズ定義を持つコンポーネントのみ実行され、それらコンポーネント間はビルドごとに一貫性のある順序で実行します。

### Other

PhaseDefine にも TexTransGroup にも属さないが、現在実行するフェーズと同じフェーズ定義を持つコンポーネントは、

一番低い優先度でかつ、順序不定な状態で実行されます。
