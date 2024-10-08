---
sidebar_position: 1
---

# ExecutionOrder

The TexTransTool components is the execution order of can change the final result.

The execution order is big significant especially for [SimpleDecal](/docs/Reference/SimpleDecal).

## Phase

Most components have a phase in which they are executed.

This is sometimes written as TexTransPhase, and it consists of the following five phases, which are executed in order from top to bottom.

### BeforeUVModification

A phase that contains components that have a strong dependency on UVs and cannot operate after UV changes are made

Components that belong to this phase

- [MultiLayerImageCanvas](/docs/Reference/MultiLayerImageCanvas)
- [TextureBlender](/docs/Reference/TextureBlender)

### UVModification

This phase contains components that rewrite UVs.

Currently there are no components that belong to this phase, but they may be added in the future.

### AfterUVModification

This phase contains components that are not dependent on UVs and are not affected by UV rewriting or can be affected by UV rewriting.

Components that belong to this phase

- [SimpleDecal](/docs/Reference/SimpleDecal)

### UnDefined

Which phase a component should belong to is case-by-case, and the user should define it as necessary.

Components that belong to this phase

- [MaterialOverrideTransfer](/docs/Reference/MaterialOverrideTransfer)

### Optimizing

This phase contains components that do not need to be optimized early on.

Components that belong to this phase

- [AtlasTexture](/docs/Reference/AtlasTexture)
- [TextureConfigurator](/docs/Reference/TextureConfigurator)

## Execution order with in a phase

When TexTransTool builds an avatar, it executes the five phases listed above in order.

The order in which components in the same phase are executed is determined by the following three factors:

### [PhaseDefine](/docs/Reference/GroupComponent/PhaseDefine)

Components that have an execution phase specified in PhaseDefine are executed with the highest priority.

The scope of a PhaseDefine ignores the phase definitions of those components and executes all components within the scope in a consistent order for each build.

### [TexTransGroup](/docs/Reference/GroupComponent/TexTransGroup)

Among the components in the TexTransGroup scope, only those components that have the same phase definition as the currently executing phase will be executed, and they will execute in a consistent order from build to build.

### Other

Components that do not belong to either PhaseDefine or TexTransGroup but have the same phase definition as the currently executing phase

It will be executed with the lowest priority and in an unspecified order.
