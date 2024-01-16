---
sidebar_position: 2
---

# 実行順序

[SimpleDecal](../SimpleDecal.md)だけであっても、どの順番で実行されるかによって最終結果が変わってしまうようなものを扱っているのが TexTransTool で、実行順は非常に重要な意味を持ちます。

## フェーズ

ほとんどのコンポーネントには 実行するフェーズが存在します。

TexTransPhase と表記されることもあり、下記四つによって構成されていて、上から順に実行されます。

### BeforeUVModification | UV変更前

UVに強い依存を持ち、UVの変更がなされた後だと動作できないコンポーネントが属すフェーズ

例

- [MultiLayerImageCanvas](../MultiLayerImageCanvas)
- TextureBlender

### UVModification | UV変更

UVを書き換えるようなコンポーネントが属すフェーズ

例

- [AtlasTexture](../AtlasTexture)

### AfterUVModification | UV変更後

UVに依存がなく、UVが書き換えられたことによる恩恵を受けれるコンポーネントが属すフェーズ

例

- [SimpleDecal](../SimpleDecal.md)
- CylindricalDecal
- NailEditor

### UnDefined | 未定義

どこに属するべきかが不定なコンポーネントが属すフェーズ

例

- MaterialModifier
- MatAndTexAbsoluteSeparator
- MatAndTexRelativeSeparator

## フェーズ内での実行順

主に三つの優先度があり、それらフェーズが実行されたとき

### [PhaseDefine](../GroupComponent/PhaseDefine)

実行するフェーズと同じフェーズを持つ PhaseDefine は一番高い優先度で実行され、
その PhaseDefine の範囲では、それらコンポーネントが持つフェーズの定義を無視した上で、範囲内のコンポーネントをすべて、実行順を保証したうえで実行されます。

### [TexTransGroup](../GroupComponent/TexTransGroup)

TexTransGroup の範囲のコンポーネントの中で、実行するフェーズと同じフェーズ定義を持つコンポーネントのみ実行され、それらコンポーネント間は実行順が保証されます。

### Other

PhaseDefine にも TexTransGroup にも属さないが、実行するフェーズと同じフェーズ定義を持つコンポーネントは、一番低い優先度でかつ、それらコンポーネント間の実行順は保証されず、順序不定な状態で実行されます。
