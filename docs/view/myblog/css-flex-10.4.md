---
title: 【css】弹性布局-flex
date: 2020-10-04
categories:
 - 前端
tags:
 - css
 - 布局
---

## flex 子元素属性

|属性|值|含义|
| --- | --- | --- |
| align-self | stretch、flex-start...   | ... |
| flex-grap | number | 分配空间 |
| flex-shrink | number | 缩放 |
| flex-basis | px | 基准尺寸 |
| flex | number number px | 分配空间 缩放 基准尺寸 |
| order | number | 排序方式 |


### flex 

**`flex`是`flex-grow`、`flex-shrink` 、`flex-basis`缩写组合。**

> 建议使用 flex 面不要单独使用 flex-grow / flew-shrink / flex-basis 。



### align-self

**用于控制单个元素在交叉轴上的排列方式，**


| 选项 | 说明 |
| --- | --- |
| stretch | 将空间平均分配给元素 |
| flex-start | 元素紧靠轴起点 |
| flex-end | 元素紧靠轴终点 |
| center | 元素从弹性容器中心开始 |

::: tip
`align-items` 用于控制容器中所有元素的排列，而 `align-self` 用于控制一个弹性元素的交叉轴排列。
:::

::: warning
父元素设置换行 `warp` 时 `align-self` 将无效
:::

### flex-grap

**弹性盒子空间富余时可将弹性盒子的可用空间，分配给弹性元素(内部的子元素)。可以使用整数或小数声明。**

### flex-shrink

**在弹性盒子装不下元素时定义的缩小值。**

::: tip
默认值为 1 ，即缩放。设置为0时 表示不缩放，父元素空间不够时将溢出
:::

### flex-basis

`flex-basis` 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。

可以是长度单位，也可以是百分比。`flex-basis`的优先级高于`width、height`属性。

#### 优先级

**`flex-basis` 优先级大于 `width、height`。**

### order 

**用于控制弹性元素的位置，默认为 `order:0` 数值越小越在前面，可以负数或整数。**


::: tip
 以上属性皆是写于定义了弹性盒子`flex`的子元素内 
:::

## align-content

**换行后，使用`align-content`代替`align-items`进行交叉抽的多行对齐方式**

::: warning
父元素设置换行 `warp` 时 `align-content` 将无效
:::

::: tip
1. 弹性盒子`flex`默认不换行，若空间不够，将对子元素进行缩放。
2. 若空间富余，可用`flex:1;`，对子元素进行空间分配；
:::