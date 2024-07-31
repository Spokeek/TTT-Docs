---
sidebar_position: 1
---

# ExecutionOrder

The TexTransTool components is the execution order of can change the final result.

The execution order is big significant especially for [SimpleDecal](/docs/Reference/SimpleDecal).

## Phase

ほとんどのコンポーネントには 実行するフェーズが存在します。

TexTransPhase と表記されることもあり、下記五つによって構成されていて、上から順に実行されます。

### BeforeUVModification

UVに強い依存を持ち、UVの変更がなされた後では動作できないコンポーネントが属するフェーズ

属するコンポーネント

- [MultiLayerImageCanvas](/docs/Reference/MultiLayerImageCanvas)
- [TextureBlender](/docs/Reference/TextureBlender)

### UVModification

UVを書き換えるようなコンポーネントが属すフェーズ

現在属するコンポーネントは存在しませんが今後追加される可能性があります。

### AfterUVModification

UVに依存がなく、UVが書き換えられたことによる影響がない、または受けれるコンポーネントが属するフェーズ。

属するコンポーネント

- [SimpleDecal](/docs/Reference/SimpleDecal)

### UnDefined

どのフェーズに属するべきかがケースバイケースであり、ユーザーが必要に応じて定義すべきなコンポーネントが属するフェーズ

属するコンポーネント

- [MaterialOverrideTransfer](/docs/Reference/MaterialOverrideTransfer)

### Optimizing

最適化を行う、早い段階で動く必要のないコンポーネントが属するフェーズ

属するコンポーネント

- [AtlasTexture](/docs/Reference/AtlasTexture)
- [TextureConfigurator](/docs/Reference/TextureConfigurator)

## Execution order with in a phase

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
