---
title: 【css】过渡延迟 transition 注意事项
date: 2020-10-04
categories:
 - 前端
tags:
 - css
---

## transition

::: tip
transition可以写在当前元素或者`:hover`等伪类中,同时写可以产生两种不同的过渡延迟效果
:::

以hover为例：

css

```css
    section{
        transition:1s;
    }
    section:hover{
        transform: translateX(-100%);
    }
```

html

```html
    <section>2333~</section>
```

### transition-proprety 

**用于设置哪些属性应用过渡效果。**

- 默认值为all 即所有属性都发生过渡效果
- 多个属性使用逗号分隔

### transition-duration

**用于设置过渡时间，需要注意以下几点**

- 可使用单位为 ms毫秒、s秒
- 默认值为0s不产生过渡效果
- 一个值时，所有属性使用同样的时间
- 二个值时，奇数属性使用第一个，偶数属性使用第二个
- 变化属性数量大于时间数量时，后面的属性再从第一个时间开始重复使用

```css
transition-property: background-color, transform, opacity, border-radius;
transition-duration: 200ms, 5s, 2s;
```

### transition-delay

- 默认为0s即立刻开始过渡
- 值可以为负数
- 变化属性数量大于时间数量时，后面的属性再从第一个时间开始重复使用

:::warning
使用`transition-property`时,需要注意对应的`transition-duration`。
注意对应关系
:::

```css
 transition-property: background-color, transform, border-radius;
 transition-duration: 1s, 2s, 3s;
 transition-delay: 1s, 3s, 5s;
```

### transition-timeing-function

**用于设置过渡效果的速度，可在 [https://cubic-bezier.com](https://cubic-bezier.com) 网站在线体验效果差异**

| 值 | 描述 |
| --- | --- |
| linear | 匀速 |
| ease | 慢-快-超慢 |
| ease-in | 慢-快 |
| ease-out | 快-慢 |
| ease-in-out |  |

#### 贝赛尔曲线

需要设置四个值 `cubic-bezier(<x1>, <y1>, <x2>, <y2>)`

#### 步进效果

**表示将过渡过程分几步完成。** 

`steps(3,end)`表示将过渡过程分3步完成

