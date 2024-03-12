# TextureSelector

[MultiLayerImageCanvas](/docs/Reference/MultiLayerImageCanvas) や [TextureBlender](/docs/Reference/TextureBlender.md) でターゲットとするテクスチャーを指定するための存在です。

## 設定項目

![TextureSelector](../img/TextureSelector.png)

### セレクターモード

#### Absolute

テクスチャーに対する直接的な参照一つで指定するモードで、非常に簡単に使用でき D&D で使用するときには重宝するものですが、ほかツールとの競合に弱いなどの弱点が存在します。

#### Relative

テクスチャーに対してレンダラーとマテリアルスロットとプロパティネームを使用して、間接的に指定するもので簡易的ではないですが、ほかツールとの競合が起こりづらくビルドする前には存在しないテクスチャーを指定するような特殊なことも可能です。
